#### 1.Creo proyecto npm con vite:

```
npm create vite

```

1.1. Nombre del proyecto, Opción: vanilla js y entrar a la carpeta del proyecto

#### 2. Instalar npm:

```
npm install
```

#### 3. Agrego script js de tipo MODULO al archivo index.html:

```
<script type="module" src="/main.js"></script>

```

#### 4. Instalo bootstrap por npm:
   
```
npm install bootstrap
```

#### 5. En el archivo main.js importo las librerias de bootstrap:

```
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

```

#### 6. En el archivo index.html agrego link css:

```
 <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
```

#### 7. Ejecuto servidor de vite:

```
npm run dev

```

#### 8. Creo carpeta js y archivo api.js en raíz del proyecto

```
js
    api.js
```

8.1. Creo conexión a la API, en el archivo api.js y la exporto:

```
let url = 'https://api.imgflip.com/get_memes'

export const getApi= async()=>{

    const resp=await fetch(url)
    const {data}=await resp.json()

    return data.memes 
}
```

8.2. En el archivo main.js importo la respuesta de la API:

```
import { getApi } from './js/api'

const cargarApi=async()=>{
    const imagenes = await getApi()
    console.log(imagenes);
};

cargarApi();
```

8.3. Reviso por consola los resultados de la API:

![pantalla](https://github.com/pedro-donoso/vite-project/assets/68760595/a6bf0499-8a69-4d7a-abe8-547156ec5db9)

#### 9. En index.html creo contenedor que cargará las tarjetas dinámicamente:
```
 <div class="container">
      <div class="row">
        <div class="col">
          <h1>Galería</h1>
        </div>
      </div>
     <div id="contenedor" class="row row-cols-1 row-cols-md-3 g-4">
      <!-- tarjetas -->
     </div>
    </div>
```

<<<<<<< HEAD
<<<<<<< HEAD
#### 10. En carpeta js creo archivo modular funciones.js para recorrer arreglo de imágenes:

```
export const crearTarjetas=(imagenes)=>{
    imagenes.map((imagen)=>{
        const col = document.createElement('div');
        col.classList='col mb-3';
        col.innerHTML=cardApp(imagen);
        document.querySelector('#contenedor').append(col);
    });
};
```
<<<<<<< HEAD

=======
#### 10. En carpeta js creo archivo modular funciones.js:
>>>>>>> 5c5194e (modifico index.html)
=======
#### 10. En carpeta js creo archivo modular funciones.js para recorrer arreglo de imágenes:
>>>>>>> 2ac17cd (actualizo pasos documentacion)

```
export const crearTarjetas=(imagenes)=>{
    imagenes.map((imagen)=>{
        const col = document.createElement('div');
        col.classList='col mb-3';
        col.innerHTML=cardApp(imagen);
        document.querySelector('#contenedor').append(col);
    });
};
```
=======
>>>>>>> 3d4cbc9 (agrego imagen consola)
