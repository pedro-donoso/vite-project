import cardImagen from "../components/cardApp";

export const crearTarjetas=(imagenes)=>{
    imagenes.map((imagen)=>{
        const col = document.createElement('div');
        col.classList='col mb-3';
        col.innerHTML=cardImagen(imagen);
        document.querySelector('#contenedor').append(col);
    });
};

