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

export const ObtenerTipoVehiculo = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/tipo-vehiculo`, 
    {
      headers,
    }
  )
}


export const ObtenerVehiculo = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/vehiculo`, 
    {
      headers,
    }
  )
}

export const ObtenerServicios = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/servicio`, 
    {
      headers,
    }
  )
}

export const ObtenerComunas = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/comuna`, 
    {
      headers,
    }
  )
}

export const ObtenerTipoCobro = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/tipo-cobro`, 
    {
      headers,
    }
  )
}

export const ObtenerTipoSuelo = () => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/tipo-suelo`,
    {
      headers,
    }
  )
}


export const ObtenerTodosEspaciosRegistrados = (idUsuario) => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/espacios/${idUsuario}`, 
    {
      headers,
    }
  )
}


export const ObtenerTodasSolicitudesEspacio = (idEspacio) => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/solicitud-reserva/${idEspacio}`, 
    {
      headers,
    }
  )
} 


export const ObtenerTodasReservasAceptadasEspacio = (idEspacio) => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/reserva-espacio/${idEspacio}`, 
    {
      headers,
    }
  )
} 


export const DesactivarEspacioByIdEspacio = (idEspacio) => {
  return axios.put(
    `http://127.0.0.1:8000/api/actualizar/desactivar-espacio/${idEspacio}`, 
    {
      headers,
    }
  )
} 

export const ActualizarEspacioDisponibleEspacio = (idEspacio, numReserva) => {
  return axios.put(
    `http://127.0.0.1:8000/api/actualizar/datos-espacio/${idEspacio}/${numReserva}`, 
    {
      headers,
    }
  )
}

export const ActualizarEstadoSolicitud = (idSolicitud, idEstado) => {
  return axios.put(
    `http://127.0.0.1:8000/api/actualizar/solicitud-reserva/${idSolicitud}/${idEstado}`, 
    {
      headers,
    }
  )
}

export const ObtenerEspacioByUsuarioAndEstado = (idUsuario, idEstado) => {
  return axios.get(
    `http://127.0.0.1:8000/api/obtener/espacio/${idUsuario}/${idEstado}`, 
    {
      headers,
    }
  )
}

export const ValidarDisponibilidadByIdEspacioFInicioFTerminoCantidad = (idEspacio, fInicio, fTermino, cantidad) => {
  return axios.get(
    `http://127.0.0.1:8000/api/verificar/disponibilidad/${idEspacio}/${fInicio}/${fTermino}/${cantidad}`
  )
}