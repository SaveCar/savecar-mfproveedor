import * as Styles from "./Styles.js";
import { useEffect, useState } from "react";
import moment from "moment";
import FondoOpaco from "./../Modal/FondoOpaco";
import ModalRespuestaSolicitud from "./../Modal/ModalRespuestaSolicitud";

export const Solicitudes = ({cliente,imagen,direccion,disponible, cantidadSolicitada, fechaInicio, cantidadTiempo, tipoCobro, valorTotal, solicitud,onContinue}) => {

    const[StylesRechazar, setStylesRechazar]= useState({'cursor':'pointer','color':'rgba(158, 44, 44, 1)', 'border':'1px solid rgba(232, 203, 203, 1)', 'background':'rgba(248, 245, 240, 1)'})
    const[StylesAceptar, setStylesAceptar]= useState({'cursor':'pointer','color':'rgba(16, 121, 77, 1)', 'border':'1px solid rgba(133, 201, 172, 1)', 'background':'rgba(223, 250, 221, 1)'})
    const [mainState, setMainState] = useState({
        isModalOpen: false,
        isModalClose: false
    });
    const espacioDisponible = localStorage.getItem('disponibles')

    const[infoModal, setInfoModal] = useState({})
    
    const openModal = () => {
        setMainState((prev) => ({ ...prev, ["isModalOpen"]: true }));
    };


    const handleAceptar = () => {
        setInfoModal({
            title: '¿DESEAS CONFIRMAR ESTA SOLICITUD?',
            button: 'Aceptar',
            confirm: true
        })
        openModal()
    }

    const handleRechazar = () => {
        setInfoModal({
            title: '¿DESEAS RECHAZAR ESTA SOLICITUD?',
            button: 'Rechazar',
            confirm: false
        })
        openModal()
    }

    return(
        <>
            <Styles.Card>
                <ModalRespuestaSolicitud
                    isOpen={mainState.isModalOpen}
                    onClose={() =>
                        setMainState((prev) => ({ ...prev, ["isModalOpen"]: false }))
                    }
                    setMainState={setMainState}
                    cliente={cliente}
                    cantidadSolicitada={cantidadSolicitada}
                    fechaInicio={fechaInicio}
                    cantidadTiempo={cantidadTiempo}
                    tipoCobro={tipoCobro}
                   
                    valorTotal={valorTotal}
                    solicitud={solicitud}
                    infoModal={infoModal}
                    onContinue={onContinue}
                />
                <Styles.WrapperContent>
                    <Styles.WrapperInline>
                        <Styles.WrapperDiv style={{'alignItems':'center', 'width':'40%'}}>
                            <Styles.WrapperImage 
                                src={"http://127.0.0.1:8000" + imagen} alt={imagen}
                            />
                        </Styles.WrapperDiv>
                        <Styles.WrapperDiv style={{'width':'60%'}}>
                            <Styles.Text style={{'fontWeight':'400', 'textTransform':'uppercase'}}>
                                {direccion}
                            </Styles.Text>

                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Cliente: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                                    {cliente}
                                </Styles.Text>
                            </Styles.WrapperInline>
                            
                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Cantidad solicitada: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    {cantidadSolicitada}
                                </Styles.Text>
                            </Styles.WrapperInline>

                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Fecha de inicio: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    {moment(fechaInicio).format("DD/MM/YYYY")}         
                                </Styles.Text>
                            </Styles.WrapperInline>

                            <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                    Cantidad de tiempo: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    {cantidadTiempo} {tipoCobro}s   
                                </Styles.Text>
                            </Styles.WrapperInline>

                            <Styles.LineSmall/>

                            <Styles.WrapperInline style={{'marginBottom':'0px'}}>
                                <Styles.Text style={{'fontWeight':'400'}}>
                                   Valor total:  
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    ${valorTotal}
                                </Styles.Text>
                            </Styles.WrapperInline>
                          
                        </Styles.WrapperDiv>
                    </Styles.WrapperInline>
                </Styles.WrapperContent>
                
                {
                    disponible >= cantidadSolicitada ?
                    <Styles.WrapperInline style={{'marginBottom':'4%', 'width':'80%'}}>
                        <Styles.Button
                            style={{'cursor':StylesRechazar.cursor, 'color': StylesRechazar.color, 'border': StylesRechazar.border, 'background':StylesRechazar.background}}
                            onClick={() => handleRechazar(cantidadSolicitada, solicitud)}
                        >   
                            Rechazar
                        </Styles.Button>
                        <Styles.Button
                            style={{'cursor':StylesAceptar.cursor,'color': StylesAceptar.color, 'border': StylesAceptar.border, 'background':StylesAceptar.background}}
                            onClick={() => handleAceptar(cantidadSolicitada, solicitud)}
                        >
                            Aceptar
                        </Styles.Button>
                    </Styles.WrapperInline>
                    
                    : 
                    <>
                        <Styles.WrapperTitle style={{'border':'1px solid rgba(232, 203, 203, 1)', 'background':'rgba(248, 245, 240, 1)', 'borderRadius':'10px', 'padding':'3% 2%', 'width':'70%', 'marginTop':'2%'}}>
                            <Styles.Text style={{'color':'rgba(158, 44, 44, 1)'}}> Espacio disponible no es suficiente </Styles.Text>
                        </Styles.WrapperTitle>
                        <Styles.WrapperInline style={{'marginBottom':'4%', 'width':'80%'}}>
                            <Styles.Button
                                style={{'cursor':StylesRechazar.cursor, 'color': StylesRechazar.color, 'border': StylesRechazar.border, 'background':StylesRechazar.background}}
                                onClick={() => handleRechazar(cantidadSolicitada, solicitud)}
                            >   
                                Rechazar
                            </Styles.Button>
                        </Styles.WrapperInline>
                    </>
                       
                }
                
            </Styles.Card>
            <FondoOpaco
                isVisible={mainState.isModalOpen}
            />
        </>
    )
}


export default Solicitudes;