import { Component, useEffect, useState } from "react";
import Welcome from "./../componentes/Bienvenida/Welcome";
import * as singleSpa from "single-spa";
import { rem } from "polished";
import Header from "../componentes/header/Header";
import styled from "styled-components";
import { ObtenerComunas, ObtenerEspacioByUsuarioAndEstado, ObtenerServicios, ObtenerTipoCobro, ObtenerTipoSuelo, ObtenerTipoVehiculo, ObtenerTodosEspaciosRegistrados, ObtenerVehiculo } from "../servicios/servicio";
import ListaEspacios from "../componentes/ListaEspacios/ListaEspacios";
import DetalleEspacio from "../componentes/DetalleEspacio/DetalleEspacio";
import ListaReservas from "./../componentes/ListaReservas/ListaReservas";
import ListaSolicitudes from "../componentes/ListaSolicitudes/ListaSolicitudes";
import CheckCarga from "./../componentes/CheckCarga/CheckCarga";
import DesactivarEspacio from "./../componentes/CheckCarga/DesactivarEspacio";
import ListaOpciones from "../componentes/listaOpciones/ListaOpciones";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("950px");
const maxWidth = rem("1200px");

export const WrapperHeader = styled.div`
  background: rgba(0, 0, 0, 1);
  padding: 0px 16px;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${minWidth1}) {
    padding: 0px 10%;
  }
  @media (min-width: ${minWidth2}) {
    padding: 0px 10%;
    height: 12vh;
  }
  @media (min-width: ${maxWidth}) {
    padding: 0px 15%;
  }
`;


const WrapperBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin:auto;
  flex-direction: column;
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

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #000000;
  font-weight: 600;
  font-family: rubik;
  margin-top: 10px;
  @media (min-width: ${minWidth1}) {
    font-size: 37px;
    margin-top: 15px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 43px;
  }
`;


const BIENVENIDA = "Welcome";
const ESPACIOS_REGISTRADOS = "ListaEspacios";
const DETALLE_ESPACIO = "DetalleEspacio";
const LISTA_RESERVAS = "ListaReservas";
const LISTA_SOLICITUDES = "ListaSolicitudes";
const GUARDAR_RESPUESTA = "CheckCarga";
const DESACTIVAR_ESPACIO = "DesactivarEspacio";
const LISTA_OPCIONES = "";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        VIEW: '',
        espaciosRegistrados: false,
        userData: JSON.parse(localStorage.getItem('userData')),
        nameUser: JSON.parse(localStorage.getItem('userData')).data.nombreUsuario.charAt(0) + JSON.parse(localStorage.getItem('userData')).data.nombreUsuario.slice(1).toLowerCase(),
        listaEspaciosRegistrados: []
      };
  }

  componentDidMount() { 

    ObtenerTipoVehiculo()
      .then((res) => {
        localStorage.setItem('ListaTipoVehiculos', JSON.stringify(res.data));
      }).catch((e) => {
        localStorage.removeItem('ListaTipoVehiculos');
      })
  
    ObtenerVehiculo()
      .then((res) => {
        localStorage.setItem('ListaVehiculos', JSON.stringify(res.data));
      }).catch((e) => {
        localStorage.removeItem('ListaVehiculo');
      })
  
    ObtenerServicios()
      .then((res) => {
        localStorage.setItem('ListaServicios', JSON.stringify(res.data));
      }).catch((e) => {
        localStorage.removeItem('ListaServicios');
      })

    ObtenerComunas()
      .then((res) => {
        localStorage.setItem('ListaComunas', JSON.stringify(res.data));
      }).catch((e) => {
        localStorage.removeItem('ListaComunas');
      })

    ObtenerTipoCobro()
      .then((res) => {
        localStorage.setItem('ListaTipoCobros', JSON.stringify(res.data));
      }).catch((e) => {
        localStorage.removeItem('ListaTipoCobros');
      })
    
    ObtenerTipoSuelo()
      .then((res) => {
        const arrayFiltrado = res.data.filter(suelo => suelo.idSuelo !== 0)
        localStorage.setItem('ListaTipoSuelos', JSON.stringify(arrayFiltrado));
      }).catch((e) => {
        localStorage.removeItem('ListaTipoSuelos');
      })
    
    //Obtener lista de espacios registrados
    ObtenerTodosEspaciosRegistrados(this.state.userData.data.idUsuario)
      .then((res) => {
        if(res.data.length > 0){
          this.setState({listaEspaciosRegistrados: res.data})
          this.setState({espaciosRegistrados: true})
          this.configureViews()
        }else{
          this.setState({espaciosRegistrados: false})
          this.configureViews()
        }
       
      })
      .catch((e) => {
        console.log(e)
        this.setState({espaciosRegistrados: false})
        this.configureViews()
      })


      //Obtener todos los espacio estado -> 8 esperando respuesta (solicitudes)
      ObtenerEspacioByUsuarioAndEstado(this.state.userData.data.idUsuario, 8)
        .then((res) => {
          if(res.data.length > 0){
            console.log(res.data)
            localStorage.setItem('listaSolicitudesProveedor', JSON.stringify(res.data))
            this.setState({espaciosRegistrados: true})
            this.configureViews()
          }else{
            localStorage.removeItem('listaSolicitudesProveedor')
            this.setState({espaciosRegistrados: false})
            this.configureViews()
          }
        })

      //Obtener todos los espacios estado -> 5 aceptado (reservas)
      ObtenerEspacioByUsuarioAndEstado(this.state.userData.data.idUsuario, 5)
      .then((res) => {
        if(res.data.length > 0){
          
          localStorage.setItem('listaReservasProveedor', JSON.stringify(res.data))
          this.setState({espaciosRegistrados: true})
          this.configureViews()
        }else{
          localStorage.removeItem('listaReservasProveedor')
          this.setState({espaciosRegistrados: false})
          this.configureViews()
        }
      })

  }

  configureViews = () => {
    if(!this.state.espaciosRegistrados){
      this.setState({VIEW: BIENVENIDA});
    }
    if (this.state.espaciosRegistrados){
      this.setState({VIEW: LISTA_OPCIONES})
    }
  };

  changeView = (VIEW) => {
      this.setState({
          VIEW: VIEW,
      });
  };

  unmountApplication = (toMf) => {
    localStorage.setItem("toMf", toMf);
    singleSpa.unregisterApplication("@savecar/mfproveedor").then(() => {
      console.log("redireccionando");
    });
  };
  
  handleOnBack = () => {
      this.unmountApplication("mfbienvenida");
  };

  handleContinue = () => {
    this.unmountApplication("mfregespacio");
  };

  handleNew = () => {
    this.unmountApplication("mfregespacio");
  }

  render() {
    const {VIEW} = this.state;
    
    switch (VIEW) {
      case BIENVENIDA:
        return(
          <>
            <WrapperHeader>
              <Header menu/>
            </WrapperHeader>
            <WrapperBody style={{'padding':'0px 16px'}}>
              <Welcome name={this.state.nameUser} onContinue={this.handleContinue}/>
            </WrapperBody>
          </>
        );
      case LISTA_OPCIONES:
        return(
          <>
            <WrapperHeader>
              <Header menu/>
            </WrapperHeader>
            <WrapperBody style={{'padding':'0px 16px'}}>
              <Title>¿Qué deseas hacer?</Title>
              <ListaOpciones 
                registrar={() => this.handleNew()}
                espacios={() => this.changeView(ESPACIOS_REGISTRADOS)}
                reservas={() => this.changeView(LISTA_RESERVAS)}
                solicitudes={() => this.changeView(LISTA_SOLICITUDES)}
              />
            </WrapperBody>
          </>
        );
      case ESPACIOS_REGISTRADOS:
        return(
          <>
            <WrapperHeader>
              <Header onBack={() => this.changeView(LISTA_OPCIONES)}/>
            </WrapperHeader>

            <WrapperBody>

            <Title style={{'marginBottom':'0px'}}>Espacios registrados</Title>

             <ListaEspacios
              listaEspacios={this.state.listaEspaciosRegistrados}
              onContinue={() => this.changeView(DETALLE_ESPACIO)}
              onReservas={() => this.changeView(LISTA_RESERVAS)}
              onSolicitudes={() => this.changeView(LISTA_SOLICITUDES)}
              onDisabled={() => this.changeView(DESACTIVAR_ESPACIO)}
             />
            </WrapperBody>
          </>
        )
      case DETALLE_ESPACIO:
        return(
          <>
            <WrapperHeader>
              <Header onBack={() => this.changeView(ESPACIOS_REGISTRADOS)}/>
            </WrapperHeader>
            <WrapperBody>
             <DetalleEspacio
              espacio={JSON.parse(localStorage.getItem('espacioSeleccionado'))} 
             />
            </WrapperBody>
          </>
        )
      case LISTA_RESERVAS:
        return(
          <>
            <WrapperHeader>
              <Header onBack={() => this.changeView(LISTA_OPCIONES)}/>
            </WrapperHeader>
            <WrapperBody>
              <Title style={{'marginBottom':'0px'}}>Reservas</Title>
             <ListaReservas
                espacio={JSON.parse(localStorage.getItem('listaReservasProveedor')) || null} 
             />
            </WrapperBody>
          </>
        )
      case LISTA_SOLICITUDES:
        return(
          <>
            <WrapperHeader>
              <Header onBack={() => this.changeView(LISTA_OPCIONES)}/>
            </WrapperHeader>
            <WrapperBody>
              <Title style={{'marginBottom':'0px'}}>Solicitudes </Title>
             <ListaSolicitudes
                espacio={JSON.parse(localStorage.getItem('listaSolicitudesProveedor')) || null} 
                onContinue={() => this.changeView(GUARDAR_RESPUESTA)}
             />
            </WrapperBody>
          </>
        )
      case GUARDAR_RESPUESTA:
        return(
          <>
            <WrapperHeader>
              <Header menu/>
            </WrapperHeader>

            <WrapperBody>

              <CheckCarga/>
            
            </WrapperBody>
          </>
        )
      
      default:
        return '';
    }

}
}

export default Index;
 


