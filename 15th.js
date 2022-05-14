console.log("try!");
localStorage.setItem('Name','Radha');
localStorage.setItem('Name2','Simo');
// localStorage.clear();
let Name3 = localStorage.getItem('Name7');
console.log(Name);

let impArray= ['adrak','pyaz','vege'];
localStorage.setItem('Sabsi',JSON.stringify(impArray));

let Name = localStorage.getItem('Name');
Name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(Name);