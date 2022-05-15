import { useEffect, useState } from "react";
import styled from "styled-components";
import Reservas from "./Reservas";
import * as Styles from "./Styles.js";


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5%;
`;

export const ListaReservas = ({espacio}) => {

    const [espacios, setEspacios] = useState(espacio);
    var listaReservas = []
    
    console.log(espacios.espacio)

    if (espacios !== null) {
        espacios.reserva.map((data, key) => {
            listaReservas.push(
                <Reservas 
                    cliente={data.nombreCliente}
                    cantidadSolicitada={data.capacidadReserva}
                    fechaInicio={data.fechaInicio}
                    cantidadTiempo={data.totalTiempo}
                    tipoCobro={espacios.espacio.tipoCobro}
                    comentario={data.comentario}
                    valorTotal={(data.capacidadReserva * espacios.espacio.precio * data.totalTiempo)}
                    key={key}
                />
            )
        })
    }

    return(
        <>
            { 
                espacios !== null ?
                    <>
                        <Styles.Wrapper>
                            <Styles.WrapperTitle>
                                <Styles.Title style={{'textTransform':'uppercase'}}>
                                    {espacios.espacio.direccion}
                                </Styles.Title>
                            </Styles.WrapperTitle>
                        </Styles.Wrapper>

                        <Wrapper style={{'marginBottom':'2%'}}>
                            {listaReservas}
                        </Wrapper>
                        
                    </>
                : 
                    null
            }
        </>
    )
}


export default ListaReservas;