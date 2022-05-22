import { useEffect, useState } from "react";
import styled from "styled-components";
import Espacio from "./Espacio";
import * as Styled from "./Styles.js";


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5%;
    width: 100%;
`;

export const ListaEspacios = ({listaEspacios, onContinue, onReservas, onSolicitudes, onDisabled}) => {

    const [espacios, setEspacios] = useState(listaEspacios);
    var listaEspaciosDisponibles = []
    
    if (espacios !== null) {
        espacios.map((data, key) => {
            
            listaEspaciosDisponibles.push(
                <Espacio 
                    direccion={data.direccion}
                    capacidad={data.capacidad}
                    tipo={data.vehiculo}
                    tipoCobro={data.tipoCobro}
                    idEspacio={data.idEspacio}
                    precioEspacio={data.precio}
                    imagen={data.imagenEspacio}
                    espacio={data}
                    disponible={data.disponible}
                    key={key}
                    onContinue={onContinue}
                    onReservas={onReservas}
                    onSolicitudes={onSolicitudes}
                    onDisabled={onDisabled}
                />
            )
        })
    }

    return(
        <>
            { 
                espacios !== null ?
                    <Wrapper style={{'marginBottom':'2%'}}>
                        {listaEspaciosDisponibles}
                    </Wrapper>
                : 
                    <Styled.Message style={{'marginTop': '5%', 'textAlign':'center', 'color':'#00000040'}}>
                        No hay registros
                    </Styled.Message>
            }
        </>
    )
}


export default ListaEspacios;