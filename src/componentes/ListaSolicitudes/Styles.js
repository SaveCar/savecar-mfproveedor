import styled from "styled-components";
import { rem } from "polished";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("950px");
const maxWidth = rem("1200px");


export const WrapperInline = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin-top: 3%;
`;


export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;


export const WrapperImage = styled.img`
  width: 200px;
  @media (min-width: ${minWidth1}) {
    width: 250px;
  }
`;

export const Text = styled.p`
  font-family: rubik;
  font-size: 14px;
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
  background: #F8F5F0;
  padding: 1%;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2% 0%;
`;


export const Banner = styled.div`
  background: #F8F5F0;
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
  color: #304562;
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
  font-weight: 400;
  font-family: rubik;
  height: auto;
  font-size: 16px;
  width: auto;
  background: #F6EBCF;
  color: #304562;
  border: 1px solid;
  cursor: pointer;
  padding: 1.5% 6%;
  margin-top: 5px;
  margin-bottom: 10px;
  @media (min-width: ${minWidth1}) {
    font-size: 18px;
    height: auto;
    width: auto;
    padding: 1.5% 6%;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 20px;
    padding: 1.4% 6%;
  }
  @media (min-width: ${maxWidth}) {
    padding: 1.2% 6%;
  }
`;



export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  @media (min-width: ${minWidth1}) {
    width: 80%;
  }
  @media (min-width: ${minWidth2}) {
    width: 70%;
  }
  @media (min-width: ${minWidth3}) {
    width: 60%;
  }
  @media (min-width: ${maxWidth}) {
    width: 50%;
  }
`;


export const LineSmall = styled.hr`
  border: 1px solid rgba(203, 187, 161, 0.6);
  background: rgb(203 187 161 / 89%);
  width: 90%;
`;

export const LineBig = styled.hr`
  border: 3px solid rgba(203, 187, 161, 0.6);
  width: 90%;
  background: rgb(203 187 161 / 89%);
`;
