// obtiene el elemento select y agrega un evento onchange
const select = document.querySelector('#producto');
select.addEventListener('change', mostrarOpciones);

// función que se ejecuta cuando se cambia el valor del select
function mostrarOpciones() {
  const opciones = document.querySelector('#opciones');
  opciones.innerHTML = '';

  // crea un conjunto de checkboxes para la opción seleccionada
  const opcionSeleccionada = select.value;
  const cantidadOpciones = 3; // por ejemplo, supongamos que cada producto tiene 3 opciones
  for (let i = 1; i <= cantidadOpciones; i++) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = `opcion-${i}`;
    checkbox.value = `Opción ${i}`;
    checkbox.id = `opcion-${i}`;

    const label = document.createElement('label');
    label.htmlFor = `opcion-${i}`;
    label.appendChild(document.createTextNode(`Opción ${i}`));

    opciones.appendChild(checkbox);
    opciones.appendChild(label);
  }
}

// agrega un evento onchange a cada checkbox para actualizar el presupuesto
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('change', calcularPresupuesto));

// función que se ejecuta cuando se cambia el valor de un checkbox
function calcularPresupuesto() {
  let presupuesto = 0;

  // suma el precio de cada producto seleccionado
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      presupuesto += 10; // por ejemplo, supongamos que cada opción cuesta $10
    }
  });

  // muestra el presupuesto en algún lugar de la página
  const presupuestoElemento = document.querySelector('#presupuesto');
  presupuestoElemento.textContent = `Presupuesto: $${presupuesto}`;

}