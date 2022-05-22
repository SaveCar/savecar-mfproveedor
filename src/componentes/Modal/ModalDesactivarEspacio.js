import React from "react";
import styled, {keyframes} from "styled-components";
import { rem } from "polished";
import icono_close from "./../../icon/close.svg";
import moment from "moment";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("900px");
const minWidth4 = rem("1000px");
const maxWidth = rem("1200px");

const keyFrameExampleOne = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

const BackgroundWrapper = styled.div`
    position: absolute;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgb(114 121 129 / 20%);
    border-radius: 10px;
    animation: ${keyFrameExampleOne} 0.3s ease-in-out 0s;
    margin: auto;
    width: 100%;
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

const BackgroundWrapperModal = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 5%;
    
`;

const CloseModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-end;
  margin: 16px 0px;
  margin-left: 90%;
  @media (min-width: ${minWidth1}) {
    margin: 24px 0px;
    margin-left: 90%;
  }
`;


const Icono = styled.img`
  width: 20px;
  @media (min-width: ${minWidth1}) {
    width: 25px;
  }
  @media (min-width: ${minWidth2}) {
    width: 30px;
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


export const WrapperInline = styled.div`
  justify-content: space-between;
  display:flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin-top: 3%;
  margin: auto;
`;


export const LineSmall = styled.hr`
  border: 1px solid rgba(203, 187, 161, 0.6);
  background: rgb(203 187 161 / 89%);
  width: 80%;
`;

export const Title = styled.h1`
  color: #304562;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  font-family: rubik;
  margin-bottom:5%;
  @media (min-width: ${minWidth1}) {
    font-size: 23px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 24px;
`;

export const WrapperDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const WrapperImage = styled.img`
  width: 100%;
  @media (min-width: ${minWidth1}) {
    width: 95%;
  }
  @media (min-width: ${minWidth2}) {
    width: 90%;
  }
  @media (min-width: ${maxWidth}) {
    width: 75%;
  }
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

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          disponible: this.props,
          
        };
    }
    componentDidMount() {
        document.body.style.overflow = 'unset';
    }
    handleDisabled(espacio){
      localStorage.setItem('espacioDesactivar',JSON.stringify(espacio));
      this.props.onContinue()
    }

    render() {

        if (this.props.isOpen === false){
            return null;
        }else{
            document.body.style.overflow = 'hidden';
        }

        if(this.props.onClose === true){
          console.log("hay que cerrar el modal!!");
        }else if (this.props.onClose === false){
          console.log("no hay que cerrar el modal");
        }
        
        const close = this.props.onClose;

      
        return (
        
            <BackgroundWrapper>
              <BackgroundWrapperModal>
                  <CloseModal>
                      <span onClick={()=>close()} style={{'cursor':'pointer'}}> 
                        <Icono src={icono_close}/>
                      </span>
                  </CloseModal>

                  <Title>¿DESEAS DESACTIVAR ESTE ESPACIO?</Title>
                  <WrapperInline>
                        <WrapperDiv style={{'alignItems':'center', 'width':'30%'}}>
                            <WrapperImage 
                                src={"http://127.0.0.1:8000" + this.props.imagen} alt={this.props.imagen}
                            />
                        </WrapperDiv>
                        <WrapperDiv style={{'alignItems':'center', 'width':'70%'}}>
                          <WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                            <Text style={{'fontWeight':'400', 'textTransform':'uppercase', 'width':'60%'}}>
                                {this.props.direccion}
                            </Text>
                          </WrapperInline>
                            <WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Text style={{'fontWeight':'400'}}>
                                    Precio: 
                                </Text>
                                <Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'lowerCase'}}>
                                    ${this.props.precioEspacio} por {this.props.tipoCobro}
                                </Text>
                            </WrapperInline>
                            
                            <WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Text style={{'fontWeight':'400'}}>
                                    Tipo: 
                                </Text>
                                <Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                                    {this.props.tipo}
                                </Text>
                            </WrapperInline>

                            <WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Text style={{'fontWeight':'400'}}>
                                    Capacidad: 
                                </Text>
                                <Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    {this.props.capacidad }                
                                </Text>
                            </WrapperInline>

                            <WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                                <Text style={{'fontWeight':'400'}}>
                                    Disponible: 
                                </Text>
                                <Text style={{'fontWeight':'300', 'marginLeft':'2%'}}>
                                    {this.props.disponible }                
                                </Text>
                            </WrapperInline>
                          
                        </WrapperDiv>
                    </WrapperInline>

                    <WrapperInline style={{'justifyContent':'center', 'marginTop':'5%'}}>
                      <ButtonBanner
                        onClick={() => this.handleDisabled(this.props.espacio)}
                      >
                        CONFIRMAR 
                      </ButtonBanner>
                    </WrapperInline>
                
              </BackgroundWrapperModal>
          </BackgroundWrapper>
          
      )
    }
}
export default Modal;