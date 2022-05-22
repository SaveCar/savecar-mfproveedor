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
    width: 100%;
`;

export const ListaReservas = ({espacio}) => {

    const [espacios, setEspacios] = useState(espacio);
    var listaReservas = []

    if (espacios !== null) {
        espacios.map((data, key) => {
            listaReservas.push(
                <Reservas 
                    cliente={data.nombreCliente}
                    cantidadSolicitada={data.capacidadReserva}
                    fechaTermino={data.fechaFin}
                    cantidadTiempo={data.totalTiempo}
                    tipoCobro={data.tipoCobro}
                    valorTotal={(data.capacidadReserva * data.precioEspacio * data.totalTiempo)}
                    solicitud={data}
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
                        No hay reservas activas
                    </Styles.Text>
                </Styles.Wrapper>
                    
            }
        </>
    )
}


export default ListaReservas;