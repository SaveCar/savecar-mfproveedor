import styled from "styled-components";
import { rem } from "polished";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("950px");
const maxWidth = rem("1200px");

export const Card = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-content: center;
  flex-direction: column;
  margin-top: 7%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1% 4%;
  cursor: pointer;
  @media (min-width: ${minWidth2}) {
    margin-top: 5%;
  }
  @media (min-width: ${minWidth3}) {
    padding: 0.5% 4%;
  }
`;

export const WrapperContent = styled.div`
  display: block;
  padding: 4% 8%;
  width: 90%;
`;


export const WrapperInline = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SubTitle = styled.h2`
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
`;


export const LogoArrow = styled.img`
  width: 20px;
  @media (min-width: ${minWidth1}) {
    width: 25px;
  }
  @media (min-width: ${minWidth2}) {
    width: 30px;
  }
`;
