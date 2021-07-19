setTimeout(doSomething, 1000);

function doSomething() {

    validacionNombre();

}

function validacionNombre() {

    let valor = '';
    valor = localStorage.getItem('nombre');
    if (valor !== null) {
        let PROMO = '';
        PROMO = calcularPromo();
        
        alert('Estimado/a ' + valor + '.Gracias por elegirnos! Le obsequiamos el código ' + PROMO + ' de su compra');

    } else {
        return;
    }
}

function calcularPromo() {
    let num = 0;
    let promo = '';
    num = Math.floor(Math.random() * 5) + 1;
    switch (num) {
        case 1:
            promo = '5HOTSALE para obtener un 5% de descuento'
            break;
        case 2:
            promo = '10HOTSALE para obtener un 10% de descuento'
            break;
        case 3:
            promo = '15HOTSALE para obtener un 15% de descuento'
            break;
        case 4:
            promo = '20HOTSALE para obtener un 20% de descuento'
            break;
        case 5:
            promo = '25HOTSALE para obtener un 25% de descuento'
            break;
        default:
            promo = 'HOLA';
            break;
    }
    return promo;
}




// 1) "5HOTSALE para obtener un 5% de descuento"
// 2) "10HOTSALE para obtener un 10% de descuento"
// 3) "15HOTSALE para obtener un 15% de descuento"
// 4) "20HOTSALE para obtener un 20% de descuento"
// 5) "25HOTSALE para obtener un 25% de descuento"