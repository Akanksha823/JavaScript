// console.log("Looping statement")

// for(i=0;i<100;i++){
//     console.log(i);
// }

// let j =0;
// while(j<10){
//     console.log(j);
//     j+=1;
// }

let k = 0 ;
 do {
console.log(k+1);
if(k==5){
    break;
}
k+=1;
 }
 while(k<10);
 console.log('done');


 let obj = {
     Name: "Rohan Das",
     age :78,
     type :"Difficult",
     os:"ubuntu"
 }

 for(let key in obj)
 {
     console.log(obj[key])
 }
 console.log("done");
