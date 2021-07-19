//---------------------TAREA 1------------

// (async () => {


    
//     let { value: name } = await Swal.fire({
//       title: 'Enter your name',
//       input: 'text',
//       inputLabel: 'Your name',
//       showCancelButton: true,
//       inputValidator: (value) => {
//         if (!value) {
//           return 'You need to write something!'
//         }
//       }
//     })
    
//     if (name) {
//      alertt(name)
//     }
    
//     })()





// function alertt(name){
//     alert(name);
// }















//Swal.fire(`Your name is ${name}`) parar mosttar alert conm mensaje
    

// (async () => {


    
//     const { value: ipAddress } = await Swal.fire({
//       title: 'Enter your name',
//       input: 'text',
//       inputLabel: 'Your name',
//       showCancelButton: true,
//       inputValidator: (value) => {
//         if (!value) {
//           return 'You need to write something!'
//         }
//       }
//     })
    
//     if (ipAddress) {
//       Swal.fire(`Your name is ${ipAddress}`)
//     }
    
//     })()





setTimeout(doSomething, 750);

function doSomething() {
   

  preguntarNombreEmail();
  notificaciones();
  validarNombre();
}


function preguntarNombreEmail() {

    let nombre1 = '';
    let mail1 = '';
    let valor = '';
    let flag = true;

    flag = validarPrimero(valor);   

    while (flag === true)  


        if (confirm("Quiere ingresar su Nombre y Email?")) {


            nombre1 = nombre();
            mail1 = mail();

            localStorage.setItem('valor', 'false');
            valor = localStorage.getItem("valor");
            localStorage.setItem('nombre', nombre1);
            localStorage.setItem('mail', mail1);

        

            flag = false;
            return;

        } else {
            localStorage.setItem('valor', 'false');
            valor1 = localStorage.getItem('valor');
            flag = false;
            return;
        }

}




function validarPrimero() {             
    let a = '';
    a = localStorage.getItem('valor');

    if (a === 'false') {
        return false;
    } else if (a === null) {
        return true;
    }
}


function validarDatos(dato, tipoDato) {

    if (dato === '') {
        while (dato === '') {
            dato = prompt('Parece que la información que ingresaste en el ' + tipoDato + ' no es correcta. Asegúrate de usar un ' + tipoDato + ' válido');
        }
        return dato;
    } else {
        return dato;
    }
}


function nombre() {
    let nombre2 = '';
    nombre2 = prompt('Nombre');
    nombre2 = validarDatos(nombre2, 'Nombre');
    return nombre2;
}


function mail() {
    let mail2 = '';
    mail2 = prompt('mail');
    mail2 = validarDatos(mail2, 'Mail');
    mail2 = validarMail(mail2);
    mail2 = validarDatos(mail2, 'Mail');
    return mail2;
}


function validarMail(mail){

if (mail.includes('.') && mail.includes('@')){

    return mail;
    
}else{
    return '';
}


}







//---------------------TAREA 2------------

function notificaciones(){

   
    let flag = true;

    flag = validarPrimeroNotificaciones();
  
    while (flag === true)


        if (confirm("¿Quiere recibir notificaciones a su correo electrónico?")) {



            localStorage.setItem('notificaciones', 'true');
            localStorage.setItem('flag', 'true');

            flag = false;
            return;

        } else {
            localStorage.setItem('notificaciones', 'false');
            localStorage.setItem('flag', 'true');
            flag = false;
            return;

        }

}





function validarPrimeroNotificaciones() {
    let a = '';
    a = localStorage.getItem('flag');
    if (a === 'true') {
        return false;
    } else if (a === null) {
        return true;
    }
}


//---------------------TAREA 3------------



function validarNombre(){
    let valorNombre = '';
    valorNombre  = localStorage.getItem('nombre');


    if (valorNombre=== null) {

        return;
        
    }else{ 
    return saludo(valorNombre);
}
}


function saludo(valorNombre){




    let flag = true;

    //flag = validarPrimeroNombre();
  
    //while (flag === true){  


    valorNombre = nombreUppercase(valorNombre);
    const fecha = new Date();
    const hora = fecha.getHours();
    
    console.log(hora);



    if (hora > 00 && hora <= 06) {
        alert('|'+ hora + 'hs |' + 'Buenas madrugadas,' + valorNombre);  
    }else if (hora > 6 && hora <= 12) {
        alert('|'+ hora + 'hs |' + 'Buen día,' + valorNombre);    
    }else if (hora > 12 && hora <= 19) {
        alert('|'+ hora + 'hs |' + 'Buenas tardes,' + valorNombre);  
    }else if (hora > 19 && hora <= 00) {
        alert('|'+ hora + 'hs |' + 'Buenas noches,' + valorNombre);  
        
    }
    localStorage.setItem('flag1', 'true');

    flag = false;
    return;
}
//}

function nombreUppercase(nombre){
    let nombreFinal = '';
    let letra = nombre.charAt(0);
    let textoFinal = nombre.slice(1);

    nombreFinal = letra.toLocaleUpperCase() + textoFinal;
    return nombreFinal;
}




function validarPrimeroNombre() {
    let a = '';
    a = localStorage.getItem('flag1');
    if (a === 'true') {
        return false;
    } else if (a === null) {
        return true;
    }
}





//---------------------TAREA 4------------