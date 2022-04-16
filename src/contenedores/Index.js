import { useState } from "react";
import Welcome from "./Welcome";



const Index = () => {

  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
  const [name, setName] = useState(userData.data.nombreUsuario.charAt(0) + userData.data.nombreUsuario.slice(1).toLowerCase());

  return (
    <Welcome name={name}/>
  );
};

export default Index;
