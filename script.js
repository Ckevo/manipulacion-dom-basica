const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/*function bntOneClick(){
    console.log(parseInt(input1.value) + parseInt(input2.value));
}
*/

form.addEventListener('submit', sumarImputsValues) //es un escuchador de eventos, escucha cada ves que funciona algun evento. Y cada ves que pase, ejecuta código js. Se le dan argumentos, el primero es el nombre del evento que queremos ejecutar y el segundo el código js que mandamos a llamar cuando sucede ese evento. 

function sumarImputsValues(event){ //addeventlistener al crear una f te da el parametro de event. Luego para que ese event no recargue (hablando del boton submit, que te hace recargar la página porque envia una información), te lo anula digamos, y podes visualizar luego ese dato que queres que vea el usuario. 
    event.preventDefault();
    const sumaImputs = input1.value + input2.value;
    pResult.innerText = 'El resultado es: ' + sumaImputs;
}