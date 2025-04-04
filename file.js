const inVan = document.getElementById('in1');
const inTwo = document.getElementById('in2');
const vClick = document.getElementById('button');
const vMn = document.getElementById('mnButton');
const vP = document.getElementById('pButton');
const vD = document.getElementById('divButton');
const vMl = document.getElementById('mlButton');
const tX = document.getElementById('p');
let pM = '+';

vMn.onclick = function() {
    pM = '-';
}
vD.onclick = function() {
    pM = '/';
}
vP.onclick = function() {
    pM = '+';
}
vMl.onclick = function() {
    pM = '*';
}
function colEr(rul){
    if(rul > 0){
        tx.style.color='grean'
    } else if(rul < 0){
        tx.style.color='red'
    } 
}
function ff(inVan,inTwo, pM){
    const van =  Number(inVan.value)
    const two =  Number(inTwo.value)
    if(pM == '+'){
      return  van + two
    } else if( pM == '-'){
      return  van - two
    } else if( pM == '/'){
      return  van / two
    } else if( pM == '*'){
      return  van * two
    } 
}

vClick.onclick = function () {
   const sum = ff(inVan,inTwo, pM)
   tX.textContent = sum;
}