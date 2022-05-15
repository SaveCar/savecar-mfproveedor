import { useEffect, useState } from "react";
import styled from "styled-components";
import { Solicitudes } from "./Solicitudes";
import * as Styles from "./Styles.js";


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5%;
`;

export const ListaSolicitudes = ({espacio, onContinue}) => {

    const [espacios, setEspacios] = useState(espacio);
    var listaReservas = []
    
    localStorage.setItem('disponibles', espacios.espacio.disponible)

    console.log(espacios)

    if (espacios !== null) {
        espacios.reserva.map((data, key) => {
            listaReservas.push(
                <Solicitudes 
                    cliente={data.nombreCliente}
                    cantidadSolicitada={data.cantidadReserva}
                    fechaInicio={data.fechaInicio}
                    cantidadTiempo={data.cantidadTiempo}
                    tipoCobro={espacios.espacio.tipoCobro}
                    comentario={data.comentario}
                    valorTotal={(data.cantidadReserva * espacios.espacio.precio * data.cantidadTiempo)}
                    solicitud={data}
                    onContinue={onContinue}
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
                        <Styles.WrapperTitle style={{'flexDirection':'column'}}>
                            <Styles.Title style={{'textTransform':'uppercase'}}>
                                {espacios.espacio.direccion}
                            </Styles.Title>
                            <Styles.Text>
                                Disponible: {localStorage.getItem('disponibles')}
                            </Styles.Text>
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


export default ListaSolicitudes;