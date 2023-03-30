const contenedorHTML = document.getElementById("contenedor")

fetch("./database.json")
    .then(Response => Response.json())
    .then(data =>{
        for(const servicio of data){
            contenedorHTML.innerHTML+=`
            <div class= "card">
                <h2>${servicio.name}</h2>
                <img src=${servicio.url}
                <h3>${servicio.servicio}
                <p>Costo: <strong>${servicio.costo}<strong></h4>
            </div>
            `
        }
})
