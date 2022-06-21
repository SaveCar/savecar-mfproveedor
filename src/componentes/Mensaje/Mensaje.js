import styled from "styled-components";
import { rem } from "polished";
import * as singleSpa from "single-spa";
import img_exito from "./../../icon/exito.png";
import img_error from "./../../icon/error.png";
import img_sad from "./../../icon/sad.png";


const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const maxWidth = rem("1200px");

const Imagen = styled.img`
  display: block;
  height: 80px;
  width: 80px;
  margin-top: 20% !important;
  margin: auto;
  @media (min-width: ${minWidth1}) {
    height: 90px;
    width: 90px;
  }
  @media (min-width: ${minWidth2}) {
    height: 100px;
    width: 100px;
    margin-top: 13% !important;
  }
  @media (min-width: ${maxWidth}) {
    margin-top: 10% !important;
  }
`;

const Wrapper = styled.div`
    display: block;
`;

const Title = styled.h1`
  color: #304562;
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

const SubTitle = styled.h2`
  color: #304562;
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
  color: #304562;
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




const Mensaje = ({title, subtitle, text, tipo}) => {

  const unmountApplication = (toMf) => {
    localStorage.setItem("toMf", toMf);
    singleSpa.unregisterApplication("@savecar/mfproveedor").then(() => {
      console.log("redireccionando");
    });
  };

  const onContinue = () => {
    //setear localStorage
    
    unmountApplication("mfproveedor");
  }

  setTimeout(() => {
    onContinue()
  },4000)

  return (
    <Wrapper>
      {
          tipo === 'exito' ? 
              <Imagen src={img_exito}/>
          : 
            tipo === 'ocupado' ?
              <Imagen src={img_sad}/>
          : 
            <Imagen src={img_error}/>
      }
      <Title>
          {title}
      </Title>
      <SubTitle>
          {subtitle}
      </SubTitle>
      <Text>
          {text}
      </Text>
    </Wrapper>
  );
};

export default Mensaje;