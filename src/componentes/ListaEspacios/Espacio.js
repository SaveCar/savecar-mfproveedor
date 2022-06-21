import * as Styles from "./Styles.js";
import { DesactivarEspacio, ObtenerTodasReservasAceptadasEspacio, ObtenerTodasSolicitudesEspacio } from "../../servicios/servicio";
import { useEffect, useState } from "react";
import * as singleSpa from "single-spa";
import FondoOpaco from "../Modal/FondoOpaco.js";
import ModalDesactivarEspacio from "./../Modal/ModalDesactivarEspacio";


export const Espacio = ({direccion,tipo, capacidad, idEspacio, disponible, tipoCobro, imagen, precioEspacio,espacio, onContinue,onSolicitudes, onDisabled, onReservas}) => {

    const handleContinue = () => {  
        localStorage.setItem('espacioSeleccionado', JSON.stringify(espacio))
        onContinue() 
    }


    return(
        <>
            <Styles.Card >
                
                <Styles.WrapperContent style={{'cursor':'pointer'}} onClick={() => handleContinue(idEspacio)}>
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
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
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
            </Styles.Card>
        </>
    )
}


export default Espacio;