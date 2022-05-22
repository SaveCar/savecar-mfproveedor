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
    width: 100%;
`;

export const ListaSolicitudes = ({espacio, onContinue}) => {

    const [espacios, setEspacios] = useState(espacio);
    var listaReservas = []
    


    if (espacios !== null) {
        espacios.map((data, key) => {
            listaReservas.push(
                <Solicitudes 
                    cliente={data.nombreCliente}
                    cantidadSolicitada={data.capacidadReserva}
                    fechaInicio={data.fechaInicio}
                    cantidadTiempo={data.totalTiempo}
                    tipoCobro={data.tipoCobro}
                    valorTotal={(data.capacidadReserva * data.precioEspacio * data.totalTiempo)}
                    solicitud={data}
                    onContinue={onContinue}
                    imagen={data.imagenEspacio}
                    direccion={data.direccion}
                    disponible={data.disponible}
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
                        <Wrapper style={{'marginBottom':'2%'}}>
                            {listaReservas}
                        </Wrapper>
                    </>
                : 
                <Styles.Wrapper>
                    <Styles.Text style={{'marginTop':'5%', 'fontStyle':'italic'}}>
                        No hay solicitudes activas
                    </Styles.Text>
                </Styles.Wrapper>
            }
        </>
    )
}


export default ListaSolicitudes;