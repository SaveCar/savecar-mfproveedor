import styled from "styled-components";
import { rem } from "polished";
import Header from "../componentes/header/Header.js";
import create from "../icon/create.png";

const minWidth = rem("640px");
const maxWidth = rem("1200px");

export const WrapperHeader = styled.div`
  padding: 16px;
  background: #304562;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${minWidth}) {
    padding: 0px 10%;
    height: 15vh;
  }
  @media (min-width: ${maxWidth}) {
    padding: 0px 15%;
    height: 20vh;
  }
`;

export const WrapperBody = styled.div`
  padding: 16px;
  background: #C4D7F1;
  height: 81.3vh;
  display: flex;
  flex-direction: column;
  @media (min-width: ${minWidth}) {
    padding: 16px 10%;
    height: 81.2vh;
  }
  @media (min-width: ${maxWidth}) {
    padding: 16px 15%;
    height: 76.2vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #304562;
  font-weight: 600;
  font-family: rubik;
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

const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 64px;
  margin-bottom: 24px;
  @media (min-width: ${minWidth}) {
    width: 130px;
    margin-top: 60px;
  }
`;

const SubTitle = styled.h2`
  font-size: 22px;
  text-align: center;
  color: #304562;
  font-weight: 500;
  font-family: rubik;
  margin: 0px;
  padding-top: 15px;
  @media (min-width: ${minWidth}) {
    font-size: 30px;
    padding-top: 9px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 38px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  color: #304562;
  font-weight: 300;
  font-family: rubik;
  margin: 0px;
  padding-top: 5px;
  @media (min-width: ${minWidth}) {
    font-size: 20px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 25px;
  }
`;


const Button = styled.button`
  border-radius: 100px;
  font-weight: 600;
  font-family: rubik;
  border:none;
  height: 50px;
  font-size: 18px;
  width: 70%;
  background: #F6EBCF;
  color: #304562;
  border: 1px solid #CBBBA1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  cursor: pointer;
  @media (min-width: ${minWidth}) {
    font-size: 25px;
    height: 60px;
    margin-top: 15%;
    padding: 4%;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 30px;
    height: 68px;
    margin-top: 8%;
  }
`;


const Welcome = ({name}) => {
  return (
    <>
      <WrapperHeader>
        <Header/>
      </WrapperHeader>
      <WrapperBody>
        <WrapperImage>
          <Image src={create}/>
        </WrapperImage>
        <Wrapper>
          <Title>
            ¡Bienvenido/a {name}!
          </Title>
          <SubTitle>
            No tienes registros
          </SubTitle>
          <Text>
          Esperamos poder ayudarte a darle uso a tus espacios
          </Text>
          <Button>
            REGISTRAR
          </Button>
        </Wrapper>
      </WrapperBody>
    </>
  );
};

export default Welcome;
