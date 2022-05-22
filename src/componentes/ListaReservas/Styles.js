import styled from "styled-components";
import { rem } from "polished";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("950px");
const maxWidth = rem("1200px");


export const Card = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin-top: 7%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: ${minWidth2}) {
    margin-top: 5%;
  }
  @media (min-width: ${minWidth3}) {
    padding: 0.5% 4%;
  }
`;


export const Title = styled.h1`
  color: #304562;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  font-family: rubik;
  @media (min-width: ${minWidth1}) {
    font-size: 19px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 20px;
`;


export const WrapperTitle = styled.div`

  padding: 1%;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2% 0%;
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



export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
`;



export const LineSmall = styled.hr`
  border: 1px solid #000000;
  background: #000000;
  width: 100%;
`;

export const LineBig = styled.hr`
  border: 3px solid rgba(203, 187, 161, 0.6);
  width: 90%;
  background: rgb(203 187 161 / 89%);
`;


export const WrapperContent = styled.div`
  display: block;
  padding: 4% 8%;
`;


export const WrapperInline = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperImage = styled.img`
  width: 90%;
  
`;

export const Text = styled.p`
  font-family: rubik;
  font-size: 10px;
  display: block;
  margin: 2px 0px;
  color: #304562;
  @media (min-width: ${minWidth1}) {
    font-size: 15px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 16px;
  }
`;

export const Message = styled.p`
  font-family: rubik;
  font-size: 14px;
  display: block;
  margin: 2px 0px;
  color: #304562;
  @media (min-width: ${minWidth1}) {
    font-size: 19px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 20px;
  }
`;

export const Banner = styled.div`
  width: 99.8%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5vh;
  border-radius: 0px 0px 20px 20px;
  flex-direction: row;
  padding-bottom: 5%;
  @media (min-width: ${minWidth1}) {
    height: 10vh;
    padding-bottom: 3%;
  }
`;


export const DivBanner = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonBanner = styled.button`
  border-radius: 100px;
  font-weight: 400;
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
