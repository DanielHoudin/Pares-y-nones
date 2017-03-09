


/*var jugador1;
var jugador2;
document.write('vamos a jugar a pares y nones')



var jugador1 = prompt('jugador 1, es pares introduce un numero del 1 al 5');
var jugador2 = prompt('jugador 2, es nones introduce un numero del 1 al 5');
var jugador1 = Number(jugador1);
var jugador2 = Number(jugador2);
var suma = jugador1 + jugador2;
document.write('suma');

if(suma % 2===0){
          document.write('ha ganado jugador 1');  
      }else{
          document.write('ha ganador jugador 2');
          
                        }*/

console.log ('vamos a jugar a pares y nones');
var jugador1 = prompt('jugador dinos un numero del 1 al 5');
console.log('el jugador 1 ha sacado' + jugador1);
var jugador2 = prompt('jugador dinos un numero del 1 al 5');
console.log('el jugador 2 ha sacado' + jugador2);
jugador1 = Number (jugador1);
jugador2 = Number (jugador2);
var suma = jugador1 + jugador2;

console.log ('la suma de las jugadas es = ' + suma);
if(suma % 2 === 0){
    console.log ('el jugador 2 ha ganado');
    
}else{
    console.log('el jugador 1 ha ganado')
}
