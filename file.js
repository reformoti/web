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

vClick.onclick = function () {
    if(pM == '-'){
        const sum =  Number(inVan.value) - Number(inTwo.value)
        tX.textContent = sum;
    }
    if(pM == '+'){
        const sum =  Number(inVan.value) + Number(inTwo.value)
        tX.textContent = sum;
    }
    if(pM == '/'){
        const sum =  Number(inVan.value) / Number(inTwo.value)
        tX.textContent = sum;
    }
    if(pM == '*'){
        const sum =  Number(inVan.value) * Number(inTwo.value)
        tX.textContent = sum;
    }
}