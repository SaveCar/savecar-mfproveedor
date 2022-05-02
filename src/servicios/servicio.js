import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  CustomOrigin: "savecar",
  'Access-Control-Allow-Origin': '*'
};


export const Obtenerusuario = (correo, clave) => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/usuario/correo=${correo}clave=${clave}`, {
      headers,
    }
  )
}

export const ObtenerTipoVehiculo = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/tipo-vehiculo`, {
      headers,
    }
  )
}


export const ObtenerVehiculo = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/vehiculo`, {
      headers,
    }
  )
}

export const ObtenerServicios = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/servicio`, {
      headers,
    }
  )
}

export const ObtenerComunas = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/comuna`, {
      headers,
    }
  )
}

export const ObtenerTipoCobro = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/tipo-cobro`, {
      headers,
    }
  )
}

export const ObtenerTipoSuelo = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/tipo-suelo`, {
      headers,
    }
  )
}