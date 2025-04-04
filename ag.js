const bt1 = document.getElementById('b1');
const sP = document.getElementById('span');
const inp1 = document.getElementById('i1');

const doc = [
    {
        title:'BIG',
        completed:false,
    }
    {
        title:'BOB',
        completed:true,
    }
]

function fun {} {
    listElement.innerHTML=''
    for(let i=0; i<notes.length; i++){
        listElement.insertAdjancentHTML(
            'beforeend',
            getNoteTemplate(notes[i], i)
.        )
    }
}