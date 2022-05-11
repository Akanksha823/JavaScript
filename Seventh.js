console.log('Functions!');

// function greet(name, thank){
//     console.log(`Happy birthday ${Name2}, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday! ${thank}`);
// }
// let Name= 'Amit';
// let Name2 = 'Savit';

// let i = 234;
// {
//     console.log(i);
// }
// greet(Name,'Thanks alot' );

// console.log(i);
// function ui(Name)
// {
//     let i  = 9 ;
//     console.log(i);
//     return `This is a ${Name} ui`;
// }
// console.log(ui("Raj"), i );

// const obj = {
//     Name:"Sham",
//     game:function(){
//        return "GTA"; 
//     }
// }
// console.log(obj.game())

// arr = ['fruits','vegetable','furniture'];

// arr.forEach(function(element, index, array){
//     console.log(element,index)
// });

console.log("scopes");

if(1){
var i =234;
console.log(i);
}
console.log(i);

function ui(Name){
    let i =9;
    console.log(i);
    return `This is a ${Name} ui`;
    
}
console.log(ui("Radha"), i );