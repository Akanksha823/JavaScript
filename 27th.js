console.log("This is just a trial!");

// button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");


// function getData(){
//     console.log("Started getData")
//     url = "Ajax.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//        return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//   console.log(data);
//     })
// }

function getData(){
    console.log("Started getData")
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then")
       return response.json();
    }).then((data)=>{
        console.log("Inside second then")
  console.log(data);
    })
}

console.log("Before running getData ")
getData();
console.log("After running getData ")
