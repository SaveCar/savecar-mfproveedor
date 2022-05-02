import {
  useEffect,
  useState
} from "react";
import Welcome from "./Welcome";
import * as singleSpa from "single-spa";
import { ObtenerComunas, ObtenerServicios, ObtenerTipoCobro, ObtenerTipoSuelo, ObtenerTipoVehiculo, ObtenerVehiculo } from "../servicios/servicio";


const Index = () => {

  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
  const [name, setName] = useState(userData.data.nombreUsuario.charAt(0) + userData.data.nombreUsuario.slice(1).toLowerCase());

  useEffect(() => {
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
  }, []);

  const unmountApplication = (toMf) => {
    localStorage.setItem("toMf", toMf);
    singleSpa.unregisterApplication("@savecar/mfproveedor").then(() => {
      console.log("redireccionando");
    });
  };

  const onContinue = () => {
    unmountApplication("mfregespacio");
  }


  return ( <
    Welcome name = {
      name
    }
    onContinue = {
      onContinue
    }
    />
  );
};

export default Index;