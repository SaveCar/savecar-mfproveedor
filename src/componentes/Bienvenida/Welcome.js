import styled from "styled-components";
import { rem } from "polished";
import create from "../../icon/save.png";


const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("950px");
const maxWidth = rem("1200px");

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
  color: rgba(0, 0, 0, 1);
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  font-family: rubik;
  margin-top: 30px;
  @media (min-width: ${minWidth1}) {
    font-size: 35px;
    margin-top: 35px;
  }
  @media (min-width: ${minWidth2}) {
    margin-top: 30px;
    font-size: 41px;
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
  width: 70px;
  @media (min-width: ${minWidth1}) {
    width: 90px;
    margin-top: 60px;
  }
  @media (min-width: ${minWidth2}) {
    width: 95px;
    margin-top: 60px;
  }
`;

const SubTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  font-size: 22px;
  text-align: center;
  font-weight: 500;
  font-family: rubik;
  margin-top: 15px;
  @media (min-width: ${minWidth1}) {
    font-size: 25px;
    margin-top: 20px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 30px;
`;

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  color: rgba(0, 0, 0, 1);
  font-weight: 300;
  font-family: rubik;
  margin: 0px;
  padding-top: 0px;
  @media (min-width: ${minWidth1}) {
    font-size: 18px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  border-radius: 100px;
  font-weight: 600;
  font-family: rubik;
  height: auto;
  font-size: 16px;
  width: auto;
  background: rgba(0, 0, 0, 1);
  color: white;
  border: 1px solid rgba(0, 0, 0, 1);
  cursor: pointer;
  padding: 3% 10%;
  margin-top:8%;
  @media (min-width: ${minWidth1}) {
    font-size: 18px;
    height: auto;
    width: auto;
    margin-top:5%;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 20px;
    padding: 2.5% 10%;
  }
  @media (min-width: ${maxWidth}) {
    padding: 2% 10%;
  }
`;


const Welcome = ({name, onContinue}) => {
  return (
    <>
     
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
        <Button
          onClick={() => onContinue()}
        >
          REGISTRAR
        </Button>
      </Wrapper>
    </>
  );
};

export default Welcome;
