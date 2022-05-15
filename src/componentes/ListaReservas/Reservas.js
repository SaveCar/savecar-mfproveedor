import * as Styles from "./Styles.js";
import arrow_down from "./../../icon/arrow_down.png";
import arrow_up from "./../../icon/arrow_up.png";
import { useEffect, useState } from "react";
import moment from "moment";

export const Reservas = ({cliente, cantidadSolicitada, fechaInicio, cantidadTiempo, tipoCobro, comentario, valorTotal}) => {


    return(
        <>
            <Styles.Wrapper>
               
                <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                    <Styles.Text style={{'fontWeight':'600'}}>
                        Cliente: 
                    </Styles.Text>
                    <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                        {cliente}
                    </Styles.Text>
                </Styles.WrapperInline>
                
                <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                    <Styles.Text style={{'fontWeight':'600'}}>
                        Cantidad solicitada: 
                    </Styles.Text>
                    <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                        {cantidadSolicitada}
                    </Styles.Text>
                </Styles.WrapperInline>
        
                <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                    <Styles.Text style={{'fontWeight':'600'}}>
                        Fecha de inicio: 
                    </Styles.Text>
                    <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                        {moment(fechaInicio).format("DD/MM/YYYY")}
                    </Styles.Text>
                </Styles.WrapperInline>
            
                <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                    <Styles.Text style={{'fontWeight':'600'}}>
                        Cantidad de tiempo: 
                    </Styles.Text>
                    <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'lowerCase'}}>
                        {cantidadTiempo} {tipoCobro}s
                    </Styles.Text>
                </Styles.WrapperInline>

                {
                    comentario !== null &&
                    <Styles.WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                        <Styles.Text style={{'fontWeight':'600'}}>
                            Comentario: 
                        </Styles.Text>
                        <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                            {comentario}
                        </Styles.Text>
                    </Styles.WrapperInline>
                }
                
            
                <Styles.LineSmall/>

                <Styles.WrapperInline style={{'justifyContent': 'space-between', 'marginBottom':'0px'}}>
                    <Styles.Text style={{'fontWeight':'600'}}>
                        Valor total: 
                    </Styles.Text>
                    <Styles.Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                        ${valorTotal}
                    </Styles.Text>
                </Styles.WrapperInline>
              
               <Styles.LineBig/>

            </Styles.Wrapper>
            
           
        </>
    )
}


export default Reservas;