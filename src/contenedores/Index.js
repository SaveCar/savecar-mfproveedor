import { useState } from "react";
import Welcome from "./Welcome";
import * as singleSpa from "single-spa";


const Index = () => {

  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
  const [name, setName] = useState(userData.data.nombreUsuario.charAt(0) + userData.data.nombreUsuario.slice(1).toLowerCase());

  const unmountApplication = (toMf) => {
    localStorage.setItem("toMf", toMf);
    singleSpa.unregisterApplication("@savecar/mfproveedor").then(() => {
      console.log("redireccionando");
    });
  };

  const onContinue = () => {
    unmountApplication("mfregespacio");
  }


  return (
    <Welcome name={name} onContinue={onContinue}/>
  );
};

export default Index;
