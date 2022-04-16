import styled from "styled-components";
import { rem } from "polished";
import Header from "./../componentes/header/Header.js";
import LoginForm from "./../componentes/form/Form.js";

const minWidth = rem("640px");
const maxWidth = rem("1200px");

export const WrapperHeader = styled.div`
  padding: 16px;
  background: #304562;
  height: 25vh;
  @media (min-width: ${minWidth}) {
    padding: 0px 10%;
    height: 35vh;
  }
  @media (min-width: ${maxWidth}) {
    padding: 0px 15%;
    height: 35vh;
  }
`;

export const WrapperBody = styled.div`
  padding: 16px;
  background: #C4D7F1;
  height: 75vh;
  @media (min-width: ${minWidth}) {
    padding: 16px 10%;
    height: 61.2vh;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
  }
  @media (min-width: ${maxWidth}) {
    padding: 16px 15%;
  }
`;

const WrapperTitle = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const Title = styled.h1`
  font-size: 35px;
  color: #FFF9D5;
  font-weight: 700;
  font-family: rubik;
  margin-left: 7px;
  margin-top: 14px;
  @media (min-width: ${minWidth}) {
    font-size: 45px;
    margin-left: 10px;
    margin-top: 24px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 53px;
    margin-left: 14px;
    margin-top: 10px;
  }
`;


const Card = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  margin-top: -60px;
  @media (min-width: ${minWidth}) {
    width: 80%;
    margin-top: -80px;
  }
`;




const Iniciosesion = () => {
  return (
    <>
      <WrapperHeader>
        <Header/>
        <WrapperTitle>
          <Title> Iniciar Sesión </Title>
        </WrapperTitle>
      </WrapperHeader>
      <WrapperBody>
        <Card>
          <LoginForm/>
        </Card>
      </WrapperBody>
    </>
  );
};

export default Iniciosesion;
