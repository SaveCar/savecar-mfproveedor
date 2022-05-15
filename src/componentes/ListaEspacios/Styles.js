import styled from "styled-components";
import { rem } from "polished";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("950px");
const maxWidth = rem("1200px");

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;


export const Card = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin: 2% 0%;
  @media (min-width: ${minWidth1}) {
    width: 80%;
    margin-bottom: 24px;
  }
  @media (min-width: ${minWidth2}) {
    width: 70%;
    margin-bottom: 24px;
  }
  @media (min-width: ${minWidth3}) {
    width: 60%;
    margin-bottom: 24px;
  }
  @media (min-width: ${maxWidth}) {
    width: 50%;
  }
`;

export const WrapperContent = styled.div`
  display: block;
  padding: 4% 8%;
  padding-bottom: 1%;
`;


export const WrapperInline = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const WrapperDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${minWidth1}) {
    
  }
  @media (min-width: ${maxWidth}) {
    
  }
`;

export const WrapperImage = styled.img`
  width: 60%;
  @media (min-width: ${minWidth1}) {
    width: 65%;
  }
  @media (min-width: ${minWidth2}) {
    width: 70%;
  }
  @media (min-width: ${maxWidth}) {
    width: 55%;
  }
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