export const crearTarjetas=(imagenes)=>{
    imagenes.map((imagen)=>{
        const col = document.createElement('div');
        col.classList='col mb-3';
        col.innerHTML=cardApp(imagen);
        document.querySelector('#contenedor').append(col);
    });
};

