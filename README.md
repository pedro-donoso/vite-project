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

