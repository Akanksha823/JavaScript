console.log("Single element selector");

let element = document.getElementById('myfirst');
// element =element.className;
// element = element.childNodes;
// element = element.parentNode;

element.style.color="red";
element.innerText="She is a good girl";
element.innerHTML = '<b>She is very nice</b>';
console.log(element.innerHTML);

let sel = document .querySelector('#myfirst');
sel = document.querySelector('.child');
console.log(sel)

//Multiple selector

let elements = document.getElementsByClassName('child');
elements= document.getElementsByClassName('container');
console.log(elements[2]);

Array.from(elements).forEach(element=>{
console.log(element);
element.style.color='blue';
});

