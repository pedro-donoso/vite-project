const cardImagen=(imagen)=>{

    return `<div class="card">
    <img src="${imagen.url}" class="card-img-top" alt="${imagen.name}">
        <div class="card-body">
            <h5 class="class-title">${imagen.name}</h5>
        </div>
    </div>
    `
}

export default cardImagen;