import * as Styles from "./Styles.js";
import { DesactivarEspacio, ObtenerTodasReservasAceptadasEspacio, ObtenerTodasSolicitudesEspacio } from "../../servicios/servicio";
import { useEffect, useState } from "react";
import * as singleSpa from "single-spa";
import FondoOpaco from "../Modal/FondoOpaco.js";
import ModalDesactivarEspacio from "./../Modal/ModalDesactivarEspacio";


export const Espacio = ({direccion,tipo, capacidad, idEspacio, disponible, tipoCobro, imagen, precioEspacio,espacio,onSolicitudes, onDisabled, onReservas}) => {
    const [solicitudes, setSolicitudes] = useState(null)
    const [reservas, setReservas] = useState(null)
    const [mainState, setMainState] = useState({
        isModalOpen: false,
        isModalClose: false
    });
    const[infoModal, setInfoModal] = useState({})
    
    const openModal = () => {
        setMainState((prev) => ({ ...prev, ["isModalOpen"]: true }));
    };


    const handleContinue = () => {  
        localStorage.setItem('espacioSeleccionado', JSON.stringify(espacio))
        onContinue() 
    }

    useEffect(() => {
        ObtenerTodasSolicitudesEspacio(espacio.idEspacio)
            .then((res) => {
                if (res.data.length > 0){
                    setSolicitudes(res.data)
                }
            })
        
        ObtenerTodasReservasAceptadasEspacio(espacio.idEspacio)
            .then((res) => {
                if (res.data.length > 0){
                    setReservas(res.data)
                }
            })
    },[])

    const handleDisabled = (data) => {
        setInfoModal({
            title: '¿DESEAS CONFIRMAR ESTA SOLICITUD?',
            button: 'Aceptar',
            confirm: true
        })
        openModal()
        // DesactivarEspacio(data)
        //     .then((res) => {
        //         //reload mfproveedor
        //         unmountApplication('mfproveedor')
        //     })
        //     .catch((e) => {
        //         console.log(e)
        //     })
    }

    const handleListReserve = (data, espacio) => {
        const info = {
            reserva: data,
            espacio: espacio
        }
        localStorage.setItem('reservasEspacio',JSON.stringify(info));
        onReservas()
    }

    const handleListSolicitud = (data, espacio) => {
        const info = {
            reserva: data,
            espacio: espacio
        }
        localStorage.setItem('solicitudesEspacio',JSON.stringify(info));
        onSolicitudes()
    }
    

    return(
        <>
            <ModalDesactivarEspacio
                    isOpen={mainState.isModalOpen}
                    onClose={() =>
                        setMainState((prev) => ({ ...prev, ["isModalOpen"]: false }))
                    }
                    setMainState={setMainState}
                    direccion={direccion}
                    tipo={tipo}
                    capacidad={capacidad}
                    idEspacio={idEspacio}
                    disponible={disponible}
                    tipoCobro={tipoCobro}
                    imagen={imagen}
                    precioEspacio={precioEspacio}
                    espacio={espacio}
                    onContinue={onDisabled}
                />
            <Styles.Card >
                

                <Styles.WrapperContent style={{'cursor':'pointer'}} onClick={() => handleContinue(idEspacio)}>
                    <Styles.WrapperInline>
                        <Styles.WrapperDiv style={{'alignItems':'center'}}>
                            <Styles.WrapperImage 
                                src={"http://127.0.0.1:8000" + imagen} alt={imagen}
                            />
                        </Styles.WrapperDiv>
                        <Styles.WrapperDiv>
                            <Styles.Text style={{'fontWeight':'400', 'textTransform':'uppercase'}}>
                                {direccion}
                            </Styles.Text>

                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Precio: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'lowerCase'}}>
                                    ${precioEspacio} por {tipoCobro}
                                </Styles.Text>
                            </Styles.WrapperInline>
                            
                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Tipo: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                                    {tipo}
                                </Styles.Text>
                            </Styles.WrapperInline>

                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Capacidad: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    {capacidad }                
                                </Styles.Text>
                            </Styles.WrapperInline>

                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Disponible: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    {disponible }                
                                </Styles.Text>
                            </Styles.WrapperInline>
                          
                        </Styles.WrapperDiv>
                    </Styles.WrapperInline>
                </Styles.WrapperContent>

                <Styles.Banner>
                {
                    reservas && solicitudes ?
                        <>
                            <Styles.DivBanner>
                                <Styles.ButtonBanner
                                    onClick={() => handleListReserve(reservas, espacio)}
                                > 
                                    Reservas 
                                </Styles.ButtonBanner>
                            </Styles.DivBanner>  
                            <Styles.DivBanner>
                                <Styles.ButtonBanner
                                    style={{'background':'#DFFADD', 'color':'rgba(16, 121, 77, 1)', 'border':'1px solid #85C9AC'}}
                                    onClick={() => handleListSolicitud(solicitudes, espacio)}
                                > 
                                    Solicitudes 
                                </Styles.ButtonBanner>
                            </Styles.DivBanner> 
                        </>
                    : 
                    reservas && !solicitudes ?
                        <>
                            <Styles.DivBanner>
                                <Styles.ButtonBanner
                                    onClick={() => handleListReserve(reservas, espacio)}
                                > 
                                    Reservas 
                                </Styles.ButtonBanner>    
                            </Styles.DivBanner>  
                            <Styles.DivBanner/> 
                        </>
                       
                    : !reservas && solicitudes ?
                        <>
                            <Styles.DivBanner/>  
                            <Styles.DivBanner>
                                <Styles.ButtonBanner
                                    style={{'background':'#DFFADD', 'color':'rgba(16, 121, 77, 1)', 'border':'1px solid #85C9AC'}}
                                    onClick={() => handleListSolicitud(solicitudes, espacio)}
                                > 
                                    Solicitudes 
                                </Styles.ButtonBanner>
                            </Styles.DivBanner>
                        </>
                    : !reservas && !solicitudes ? 
                        <>
                            <Styles.DivBanner>
                                <Styles.ButtonBanner
                                    style={{'background':'#F8F5F0', 'border':' 1px solid #E8CBCB', 'color':'#9E2C2C'}}
                                    onClick={() => handleDisabled(idEspacio)}
                                > 
                                    Desactivar 
                                </Styles.ButtonBanner>    
                            </Styles.DivBanner>  
                            <Styles.DivBanner/> 
                        </>
                    : null
                }
                </Styles.Banner>
                    
            </Styles.Card>
            <FondoOpaco
                isVisible={mainState.isModalOpen}
            />
        </>
    )
}


export default Espacio;