import * as Styles from "./Styles.js";
import { ObtenerTodasReservasAceptadasEspacio, ObtenerTodasSolicitudesEspacio } from "../../servicios/servicio";
import { useEffect, useState } from "react";

export const Espacio = ({direccion,tipo, capacidad, idEspacio, idEstado, tipoCobro, imagen, precioEspacio,espacio, onContinue}) => {
    const [solicitudes, setSolicitudes] = useState(null)
    const [reservas, setReservas] = useState(null)

    const handleContinue = (data) => {  
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

    return(
        <>
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
                          
                        </Styles.WrapperDiv>
                    </Styles.WrapperInline>
                </Styles.WrapperContent>

                <Styles.Banner>
                {
                    reservas && solicitudes ?
                        <>
                            <Styles.DivBanner>
                                <Styles.ButtonBanner> Reservas </Styles.ButtonBanner>
                            </Styles.DivBanner>  
                            <Styles.DivBanner>
                                <Styles.ButtonBanner
                                    style={{'background':'#DFFADD', 'color':'rgba(16, 121, 77, 1)', 'border':'1px solid #85C9AC'}}
                                > 
                                    Solicitudes 
                                </Styles.ButtonBanner>
                            </Styles.DivBanner> 
                        </>
                    : 
                    reservas && !solicitudes ?
                        <>
                            <Styles.DivBanner>
                                <Styles.ButtonBanner> Reservas </Styles.ButtonBanner>    
                            </Styles.DivBanner>  
                            <Styles.DivBanner/> 
                        </>
                       
                    : !reservas && solicitudes ?
                        <>
                            <Styles.DivBanner/>  
                            <Styles.DivBanner>
                                <Styles.ButtonBanner
                                    style={{'background':'#DFFADD', 'color':'rgba(16, 121, 77, 1)', 'border':'1px solid #85C9AC'}}
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
        </>
    )
}


export default Espacio;