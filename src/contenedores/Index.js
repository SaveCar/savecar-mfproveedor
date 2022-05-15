import { Component, useEffect, useState } from "react";
import Welcome from "./../componentes/Bienvenida/Welcome";
import * as singleSpa from "single-spa";
import { rem } from "polished";
import Header from "../componentes/header/Header";
import styled from "styled-components";
import { ObtenerComunas, ObtenerServicios, ObtenerTipoCobro, ObtenerTipoSuelo, ObtenerTipoVehiculo, ObtenerTodosEspaciosRegistrados, ObtenerVehiculo } from "../servicios/servicio";
import ListaEspacios from "../componentes/ListaEspacios/ListaEspacios";
import DetalleEspacio from "../componentes/DetalleEspacio/DetalleEspacio";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const minWidth3 = rem("950px");
const maxWidth = rem("1200px");

export const WrapperHeader = styled.div`
  padding: 0px 16px;
  background: #304562;
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

export const WrapperBody = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction:column;
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

const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 94.5%;
  @media (min-width: ${minWidth1}) {
    width: 89.5%;
  }
  @media (min-width: ${minWidth2}) {
    width: 84.5%;
  }
  @media (min-width: ${minWidth3}) {
    width: 79.5%;
  }
  @media (min-width: ${maxWidth}) {
    width: 74.5%;
  }
`;


const WrapperWhite = styled.div`
  background: white;
  height: 100vh;
  @media (min-width: ${minWidth1}) {
    height: 110vh;
  }
  @media (min-width: ${minWidth2}) {
    height: 120vh;
  }
  @media (min-width: ${maxWidth}) {
    height: 130vh;
  }
`;

const BIENVENIDA = "Welcome";
const ESPACIOS_REGISTRADOS = "ListaEspacios";
const DETALLE_ESPACIO = "DetalleEspacio";

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
  }

  configureViews = () => {
    if(!this.state.espaciosRegistrados){
      this.setState({VIEW: BIENVENIDA});
    }
    if (this.state.espaciosRegistrados){
      this.setState({VIEW: ESPACIOS_REGISTRADOS})
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
      case ESPACIOS_REGISTRADOS:
        return(
          <>
            <WrapperHeader>
              <Header menu/>
            </WrapperHeader>

            <WrapperBody>

              <WrapperButton>
                <Button onClick={() => this.handleNew()}>Nuevo espacio</Button>
              </WrapperButton>

             <ListaEspacios
              listaEspacios={this.state.listaEspaciosRegistrados}
              onContinue={() => this.changeView(DETALLE_ESPACIO)}
             />
            </WrapperBody>
          </>
        )
      case DETALLE_ESPACIO:
        return(
          <WrapperWhite>
            <WrapperHeader>
              <Header onBack={() => this.changeView(ESPACIOS_REGISTRADOS)}/>
            </WrapperHeader>
            <WrapperBody>
             <DetalleEspacio
              espacio={JSON.parse(localStorage.getItem('espacioSeleccionado'))} 
             />
            </WrapperBody>
          </WrapperWhite>
        )
          
        
      default:
        return '';
    }

}
}

export default Index;
 


