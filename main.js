import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './css/style.css'

import { getApi } from './js/api'

import { crearTarjetas } from './js/funciones';

const cargarApi=async()=>{
    const imagenes = await getApi()
    crearTarjetas(imagenes)
};

cargarApi();