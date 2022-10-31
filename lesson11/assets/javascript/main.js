//DOM FIND ELEMENT

//find element by id

let secondChildElm = document.getElementById('second-child');
console.log('secondChildElm' ,secondChildElm);
//find by class
var childElm = document.getElementsByClassName('child')
console.log('childElm:', childElm[0]);

//find by tag
var pElm = document.getElementsByTagName('p')
console.log('pElm:', pElm[0]);

// query selector
var pElm = document.querySelector('p') // queryselectorall
console.log('pElm:', pElm[0]);

//--------dom edit element value (atribute,text,.........)
//edit text/inerhtml
secondChildElm.inerHTML = 'three child'
//edit attribute
secondChildElm.style = 'background-color'
//edit style
secondChildElm.style.backgroundColor = 'yellow'

//----------DOM Create or remove element
const todoList = ['homework', 'shopping', 'listening']; //API\
// create elememt
let ul = document.createElement('ul') // tag ul
for ( var i = 0; i < todoList.length; i++){
    let li = document.createElement('li') //<li>homework
    li.innerHTML = todoList[i]
// add element
ul.appendChild(li)
}

document.body.appendChild(ul)

//remove
ul.removeChild(document.getElementsByName('li'[1]))
