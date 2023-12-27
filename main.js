// function ejemplo(event){
//     event.preventDefault();




// }

let currentStep = 1;
let nombre;
let email;
let mensaje;

function showProcess() {
    let proceso = document.getElementById('process-container');
    proceso.style.display = "block";
}

function showStep(step) {
   let paso = document.getElementById('step'+step); // 'step'+step === step1 || step2 || step3 || stepn
    paso.style.display = 'block';
}

function hideStep(step) {
    document.getElementById('step'+step).style.display = 'none';
}

function nextStep(step) {
    hideStep(currentStep);
    currentStep = step + 1;
    showStep(currentStep);
}

function prevStep(step) {
    hideStep(currentStep);
    currentStep = step - 1;
    showStep(currentStep);
}

function send(event) {

    event.preventDefault();

    nombre = document.getElementById('nombre').value;
    email = document.getElementById('email').value;
    mensaje = document.getElementById('mensaje').value;
    alert('Formulario Enviado');
    console.log(nombre, email, mensaje);

    let datos = document.getElementById('user-data');
    datos.innerHTML = `
    <p>Nombre: ${nombre}</p>
    <p>Email: ${email}</p>
    <p>Mensaje: ${mensaje}</p>`

    document.getElementById('process-container').style.display = 'none';
}

showStep(currentStep);
