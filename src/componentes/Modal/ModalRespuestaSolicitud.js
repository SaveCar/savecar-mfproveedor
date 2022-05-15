import React from "react";
import styled, {keyframes} from "styled-components";
import { rem } from "polished";
import icono_close from "./../../icon/close.svg";
import moment from "moment";
import { Button } from "../ListaSolicitudes/Styles";

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
    margin-top: -10%;
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


class ModalRespuestaSolicitud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          disponible: this.props,
          
        };
    }
    componentDidMount() {
        document.body.style.overflow = 'unset';
    }

    handleChangeStatus(info, solicitud) {
      const idSolicitud = solicitud.solicitud;
      var estadoRespuesta = null;
      //confirmar solicitud + cambiar nro espacios disponibles
      
      if (info === true){
        estadoRespuesta = 5;
      }
      //rechazar reserva
      if (info === false){
        estadoRespuesta = 6;
      }

      const respuesta = {
        'respuesta' : info,
        'idSolicitud': idSolicitud,
        'estado': estadoRespuesta
      }

      localStorage.setItem('guardarRespuestaSolicitud', JSON.stringify(respuesta))
      
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

                  <Title> {this.props.infoModal.title} </Title>

                  <WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                    <Text style={{'fontWeight':'600'}}>
                        Cliente: 
                    </Text>
                    <Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                        {this.props.cliente}
                    </Text>
                </WrapperInline>
                
                <WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                    <Text style={{'fontWeight':'600'}}>
                        Cantidad solicitada: 
                    </Text>
                    <Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                        {this.props.cantidadSolicitada}
                    </Text>
                </WrapperInline>
        
                <WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                    <Text style={{'fontWeight':'600'}}>
                        Fecha de inicio: 
                    </Text>
                    <Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                        {moment(this.props.fechaInicio).format("DD/MM/YYYY")}
                    </Text>
                </WrapperInline>
            
                <WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                    <Text style={{'fontWeight':'600'}}>
                        Cantidad de tiempo: 
                    </Text>
                    <Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'lowerCase'}}>
                        {this.props.cantidadTiempo} {this.props.tipoCobro}s
                    </Text>
                </WrapperInline>

                {
                    this.props.comentario !== null &&
                    <WrapperInline style={{'justifyContent': 'flex-start', 'marginBottom':'0px'}}>
                        <Text style={{'fontWeight':'600'}}>
                            Comentario: 
                        </Text>
                        <Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                            {this.props.comentario}
                        </Text>
                    </WrapperInline>
                }
                
            
                <LineSmall/>

                <WrapperInline style={{'justifyContent': 'space-around', 'marginTop':'0px'}}>
                    <Text style={{'fontWeight':'600'}}>
                        Valor total: 
                    </Text>
                    <Text style={{'fontWeight':'300', 'marginLeft':'2%', 'textTransform':'capitalize'}}>
                        ${this.props.valorTotal}
                    </Text>
                </WrapperInline>

                <WrapperInline style={{'justifyContent':'center', 'marginTop':'5%'}}>
                  <Button
                    onClick={() => this.handleChangeStatus(this.props.infoModal.confirm, this.props.solicitud)}
                  >
                    CONFIRMAR
                  </Button>
                </WrapperInline>
                
              </BackgroundWrapperModal>
          </BackgroundWrapper>
          
      )
    }
}
export default ModalRespuestaSolicitud;