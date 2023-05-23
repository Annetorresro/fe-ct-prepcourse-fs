/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
    return Math.pow (num, 2); //se coloca el numero recibido por parametro , y el numero al cual se va a elevar.
   
}

function elevarAlCubo(num) {
  return Math.pow (num,3);
 
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   return Math.pow (num, exponent);
}

function redondearNumero(num) {
 return Math.round(num)
 
}

function redondearHaciaArriba(num) {
    return Math.ceil (num);
   // 1
}

function numeroRandom() {
    return Math.random (1)
   }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
