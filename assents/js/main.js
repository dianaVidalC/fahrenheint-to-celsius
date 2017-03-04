function convertirCelsius(){

  var celsius=document.getElementById("valor1").value;

  var calculo=Math.ceil(((celsius-32)*5)/9);

  document.getElementById("valor2").value=calculo;

}
function convertirFahrenheit(){

  var fahren=document.getElementById("valor2").value;

  var calculo2=Math.ceil((fahren * 1.8)+32);

  document.getElementById("valor1").value=calculo2;

}
