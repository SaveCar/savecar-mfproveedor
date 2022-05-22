import * as Styles from "./Styles.js";
import arrow_down from "./../../icon/arrow_down.png";
import arrow_up from "./../../icon/arrow_up.png";
import { useEffect, useState } from "react";
import moment from "moment";

export const Reservas = ({cliente,imagen,direccion,disponible, cantidadSolicitada, fechaTermino, cantidadTiempo, tipoCobro, valorTotal}) => {


    return(
        <>
            <Styles.Card>
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
                                    Fecha de término: 
                                </Styles.Text>
                                <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    {moment(fechaTermino).format("DD/MM/YYYY")}         
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
                
            </Styles.Card>
            
           
        </>
    )
}


export default Reservas;