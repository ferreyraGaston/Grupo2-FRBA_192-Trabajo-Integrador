const contenedorHTML = document.getElementById("contenedor")

fetch("./database.json")
    .then(Response => Response.json())
    .then(data =>{
        for(const servicio of data){
            contenedorHTML.innerHTML+=`
            <div class="info-service">
           
                    <h2>${servicio.name}</h2>
            
                    <img src=${servicio.url}
            
                <br>

                    <h3>${servicio.servicio}
                    <br>
                    <p>Costo: <strong>${servicio.costo}<strong></h4>
            </div>
            `
        }
})

const servicios = document.querySelector(".servicios")

servicios.addEventListener("submit", (event) =>{
    event.preventDeFault()
    console.log(servicios.servicio.value)
})


