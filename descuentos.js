function calcDiscPrice(price, discount){
    return (price *(100 - discount) / 100);
}

 // Cupones
 const coupons = [
    {
        name: "Fer15",
        descuento: 15,
    },
    {
        name: "Fer30",
        descuento: 30,
    },
    {
        name: "Fer25",
        descuento: 25,
    },
];


function calcPrice(){
    const price = document.getElementById("precio");
    const pricev = price.value;
    //obtener el cupon ingresado
    const inputCoupon = document.getElementById("coupon");
    const couponValue = inputCoupon.value;


    //validacion del cupon
    const isCouponValid = function(coupon){
        return coupon.name === couponValue;
    };

    //Comparación del Cupón Ingresado con Existentes
    const userCoupon = coupons.find(isCouponValid);

    //Alerta de Cupón no Valido
    if (!userCoupon){
        alert("El cupón " + couponValue + " no es válido")
    } else{
        //calcular descuento
        const descuento = userCoupon.descuento;

        const precioDescontado = calcDiscPrice(pricev, descuento);
        
        //mostrar precio en pantalla
        const resultP = document.getElementById("resultP");
        resultP.innerText = "$" + precioDescontado;
    };

}


