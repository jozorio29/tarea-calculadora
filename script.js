const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0 && DATO <= 30){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo/24;
        let manteniMasMedioMant = mantenimiento + (mantenimiento / 2);
        FLU.innerHTML = flujo.toFixed(2) + ' cc/hr';
        MAN.innerHTML = mantenimiento.toFixed(2) + ' cc/hr ' + manteniMasMedioMant.toFixed(2) + ' m+m/2';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else if (DATO > 30) {
        let superficieCorpotal = ((DATO * 4) + 7) / (DATO + 90);
        let vol1500 = superficieCorpotal * 1500;
        let vol2000 = superficieCorpotal * 2000;

        FLU.innerHTML = vol1500.toFixed(2) + ' cc/hr';
        MAN.innerHTML = vol2000.toFixed(2) + ' cc/hr'; 
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
      else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})



function calcFlujo(peso){
  let resto = peso;
  let flujo = 0;
  let manteniMasMedioMant = 0;
  if (resto>20){
      let aux = resto-20;
      flujo += aux*20;
      resto -= aux;
  } 
  if (resto>10){
      let aux = resto-10;
      flujo += aux*50;
      resto -= aux;
  }
  flujo += resto*100;
  return flujo;
}











