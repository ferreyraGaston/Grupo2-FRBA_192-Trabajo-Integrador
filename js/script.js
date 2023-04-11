/* window.onload = ocultarFormulario;

function ocultarFormulario() {
      var formulario = document.getElementById("miFormulario-1");
      var btnOcultar = document.getElementById("btn-2-ocultar");
      var btnMostrar = document.getElementById("btn-2-mostrar");
      formulario.style.display = "none";
      btnOcultar.style.display = "none";
      btnMostrar.style.display = "initial";
}


function mostrarFormulario() {
      var formulario = document.getElementById("miFormulario-1");
      var btnOcultar = document.getElementById("btn-2-ocultar");
      var btnMostrar = document.getElementById("btn-2-mostrar");

      formulario.style.display = "initial";
      btnOcultar.style.display = "initial";
      btnMostrar.style.display = "none";
} */


const formularioUsuarios = document.querySelector(".formularioUsuarios")

const usuarios = []

formularioUsuarios.addEventListener("submit", (event) =>{
      event.preventDeFault()  
      console.log(formularioUsuarios.formularioUsuarios)

} )

      usuarios.push({
            nombre: formularioUsuarios.nombre.value,
            apellido: formularioUsuarios.apellido.value,
            email: formularioUsuarios.email.value,
            telefono: formularioUsuarios.telefono.value
      })
