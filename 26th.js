console.log('hello world');

//Arror functions

//1. creating a regular function

const name = function(){
    console.log("This is the best person of the company");
}
name();

//2 creating functipns using arrow function

 const name1 = ()=>{
     console.log("This is the best person ever");
 }

 name1();

 //3. function returning something

 const greet = function(){
     return "good morning";
 }

 //4.one line will not need any braces/return it will run automatically
 const greet1=()=>"good morning and wake up";


 const greet3 = ()=>({name: " Radha"});

 const greet4 = (name , ending) => "Good morning" +  name + ending

 console.log(greet(' name'));
 console.log(greet1(' name'));
 console.log(greet3(' Radha'));
 console.log(greet4(' Radha ','bye'));



 