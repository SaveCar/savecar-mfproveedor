import axios from "axios";



const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    CustomOrigin: "savecar",
    'Access-Control-Allow-Origin': '*'
};

  
export const Obtenerusuario = (correo, clave) => {
    return axios.get(
      `http://127.0.0.1:8000/api/obtener/usuario/correo=${correo}clave=${clave}`,
      {
        headers,
      }
    )
}