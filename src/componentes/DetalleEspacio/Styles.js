import styled from "styled-components";
import { rem } from "polished";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("950px");
const maxWidth = rem("1200px");


export const WrapperInline = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 5%;
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperImage = styled.img`
  width: 200px;
  @media (min-width: ${minWidth1}) {
    width: 250px;
  }
`;

export const Text = styled.p`
  font-family: rubik;
  font-size: 10px;
  display: block;
  margin: 2px 0px;
  color: #000000;
  @media (min-width: ${minWidth1}) {
    font-size: 15px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 16px;
  }
`;

export const Title = styled.h1`
color: rgba(0, 0, 0, 1);
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  font-family: rubik;
  margin-top: 15px;
  @media (min-width: ${minWidth1}) {
    font-size: 21px;
    margin-top: 20px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 26px;
  }`;



export const WrapperTitle = styled.div`

  padding: 1%;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2% 0%;
`;


export const Banner = styled.div`
  background: #FFFFFF;
  height: 3%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3%;
  @media (min-width: ${minWidth1}) {
    
  }
`;

export const TextBanner = styled.p`
  font-family: rubik;
  font-size: 14px;
  display: block;
  color: #000000;
  font-weigth: 400;
  margin-left: 8% !important;
  @media (min-width: ${minWidth1}) {
    font-size: 16px;
    margin-left: 10% !important;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 18px;
  }
`;


export const Button = styled.button`
  border-radius: 100px;
  font-weight: 600;
  font-family: rubik;
  height: auto;
  font-size: 16px;
  width: auto;
  background: #F6EBCF;
  color: #304562;
  border: 1px solid #CBBBA1;
  cursor: pointer;
  padding: 2% 6%;
  margin-top: 16px;
  @media (min-width: ${minWidth1}) {
    font-size: 18px;
    height: auto;
    width: auto;
    padding: 2% 6%;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 20px;
    padding: 1.6% 6%;
  }
  @media (min-width: ${maxWidth}) {
    padding: 1.4% 6%;
  }
`;


export const WrapperDescription = styled.div`
  display:flex;
  width: 80%;
  margin-top: 3%;
  flex-direction: column;
  @media (min-width: ${minWidth1}) {
    width: 75%;
  }
  @media (min-width: ${maxWidth}) {
    width: 70%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
`;

export const LogoArrow = styled.img`
  width: 20px;
  cursor: pointer;
  @media (min-width: ${minWidth1}) {
    width: 25px;
  }
  @media (min-width: ${minWidth2}) {
    width: 30px;
  }
`;