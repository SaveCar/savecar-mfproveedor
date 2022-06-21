import styled from "styled-components";
import { rem } from "polished";
import icon_menu from "./../../icon/exit.png";
import icon_save_car from "./../../icon/logo.svg";
import icon_back from "./../../icon/back.svg";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const maxWidth = rem("1200px");

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  @media (min-width: ${minWidth1}) {
    width: 100%;
  }
  @media (min-width: ${maxWidth}) {
    width: 100%;
  }
`;

const LogoMenu = styled.img`
  width: 20px;
  cursor: pointer;
  @media (min-width: ${minWidth1}) {
    width: 25px;
  }
  @media (min-width: ${minWidth2}) {
    width: 30px;
  }
`;


const LogoSaveCar = styled.img`
background:rgba(255, 255, 255, 1);
border-radius: 100%;
padding: 5px;
width: 20px;
@media (min-width: ${minWidth1}) {
  width: 25px;
}
@media (min-width: ${minWidth2}) {
  width: 30px;
}
`;

const Title = styled.h1`
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  font-family: rubik;
  margin-left: 5px;
  @media (min-width: ${minWidth1}) {
    font-size: 25px;
    margin-left: 6px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 30px;
    margin-left: 11px;
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



const Header = ({menu, onBack}) => {
  return (
    <>
      <Wrapper>
        {
          menu &&
          <LogoMenu src={icon_menu} onClick={menu}></LogoMenu>  
        }
        
        {
          onBack &&
          <LogoMenu src={icon_back} onClick={onBack}></LogoMenu> 
        }
        
        <WrapperTitle>
          <LogoSaveCar src={icon_save_car}/>
          <Title>SaveCar</Title>
        </WrapperTitle>
      </Wrapper>
    </>
  );
};

export default Header;
