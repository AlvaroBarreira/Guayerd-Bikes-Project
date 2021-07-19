


setTimeout(doSomething, 1000);

function doSomething() {
   
    validacionNovedades();

}

function validacionNovedades(){

    let valor = '';
    valor = localStorage.getItem('notificaciones');
    if (valor === 'true') {

        if(confirm('Tenemos ofertas personalizadas\n¿Quiere conocerlas?')){

            window.location.replace("ofertasPersonalizadas.html");
        }else{
            return;
        }       
    }

}