import styled from "styled-components";
import { rem } from "polished";

const minWidth = rem("640px");
const maxWidth = rem("1200px");

export const Wrapper = styled.div`
  display: block;
  padding: 4% 8%;
`;

export const WrapperInput = styled.div`
  margin-bottom: 10%;
  @media (min-width: ${minWidth}) {
    margin-bottom: 5%;
  }
`;

export const Label = styled.label`
  font-family: rubik;
  font-size: 14px;
  display: block;
  font-weight: 400;
  margin-bottom: 5px;
  @media (min-width: ${minWidth}) {
    font-size: 18px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 98%;
  padding-left: 3%;
  height: 30px;
  border-radius: 10px;
  color: #304562;
  font-family: rubik;
  font-size: 14px;
  font-weight: 300;
  @media (min-width: ${minWidth}) {
    height: 40px;
    font-size: 18px;
    padding-left: 2%;
  }
  @media (min-width: ${maxWidth}) {
    height: 45px;
    font-size: 20px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  border-radius: 100px;
  font-weight: 600;
  font-family: rubik;
  border:none;
  height: 50px;
  width: 80%;
  @media (min-width: ${minWidth}) {
    font-size: 18px;
    height: 60px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 20px;
    height: 68px;
  }
`;


export const Error = styled.small`
  color: #9E2C2C;
  font-weight: 300;
  font-family: Rubik;
  font-size: 12px;
  display: block;
  margin-left: 1%;
  @media (min-width: ${minWidth}) {
    font-size: 16px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 18px;
  }
`;


export const ErrorMessage = styled.div`
    background: rgba(232, 203, 203, 0.33);
    border: 1px solid #E8CBCB;
    border-radius: 5px;
    margin-bottom: 4%;
    padding: 4% 2%;
    text-align: center;
    color: #9E2C2C;
    font-family: Rubik;
    font-weight: 300;
    font-size: 12px;
    line-height: 23px; 
    transition: all 0.3s ease;
    @media (min-width: ${minWidth}) {
      font-size: 17px;
      padding: 4% 3%;
      line-height: 28px; 
    }
    @media (min-width: ${maxWidth}) {
      font-size: 19px;
      line-height: 30px; 
    }
`;

export const DisabledErrorMessage= styled.div`
    margin-bottom: 4%;
    padding: 4% 2%;
    font-size: 12px;
    line-height: 23px; 
    transition: all 0.3s ease;
    @media (min-width: ${minWidth}) {
      font-size: 17px;
      padding: 4% 3%;
      line-height: 28px; 
    }
    @media (min-width: ${maxWidth}) {
      font-size: 19px;
      line-height: 30px; 
    }
`;