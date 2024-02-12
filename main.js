import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { getApi } from './js/api'

const cargarApi=async()=>{
    const imagenes = await getApi()
    console.log(imagenes);
};

cargarApi();