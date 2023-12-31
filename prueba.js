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
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = Math.ceil(mantenimiento) + ' cc/hr ' + Math.ceil(manteniMasMedioMant) + ' m+m/2';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else if (DATO > 30) {
        let superficieCorpotal = ((DATO * 4) + 7) / (DATO + 90);
        FLU.innerHTML = superficieCorpotal * 1500 + ' cc/hr';
        MAN.innerHTML = superficieCorpotal * 2000 + ' cc/hr'; 
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











