import { useEffect, useState } from "react";
import styled from "styled-components";
import * as Styled from "./Styles.js";
import arrow_rigth from "../../icon/arrow_rigth.png";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ListaOpciones = ({registrar, espacios, reservas, solicitudes, rechazadas}) => {

    return(
        <>
            <Styled.Card  onClick={() => registrar()}>
                <Styled.WrapperInline>
                    <Styled.SubTitle> Registrar espacio </Styled.SubTitle>
                    <Styled.LogoArrow src={arrow_rigth} />
                </Styled.WrapperInline>
            </Styled.Card>
            
            <Styled.Card onClick={() => espacios()}>
                <Styled.WrapperInline>
                    <Styled.SubTitle> Ver espacios registrados </Styled.SubTitle>
                    <Styled.LogoArrow src={arrow_rigth} />
                </Styled.WrapperInline>
            </Styled.Card>

            <Styled.Card onClick={() => reservas()}>
                <Styled.WrapperInline>
                    <Styled.SubTitle> Ver reservas activas </Styled.SubTitle>
                    <Styled.LogoArrow src={arrow_rigth} />
                </Styled.WrapperInline>
            </Styled.Card>

            <Styled.Card onClick={() => solicitudes()}>
                <Styled.WrapperInline>
                    <Styled.SubTitle> Ver solicitudes activas </Styled.SubTitle>
                    <Styled.LogoArrow src={arrow_rigth} />
                </Styled.WrapperInline>
            </Styled.Card>
            
        </>
    )
}


export default ListaOpciones;