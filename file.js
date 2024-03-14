function f1() {
    var box;
box = document.getElementById('inp');

if (box.checked) {
    alert("+");
}
else{
    alert("-");
}
}
function r1() {
    var ra = document.getElementsByName('r');
    for ( var i = 0; i < ra.lenght; i++){
        if (ra[i].checked) {
            alert("check" + i); 
        }
    }
}