console.log("Ajax");

let Fetchbtn = document.getElementById('Fetchbtn');
Fetchbtn.addEventListener('click',buttonClickHandler)
function buttonClickHandler(){
    console.log('You have clicked a Fetchbtn');


    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();


    //open the object
    xhr.open('GET','Ajax.txt', true) //1 ARG. get request 
                                     //2 ARG. from where u will get the data
                                     //3 ARG. Synchronous or Asynchronous (False or TRue)

   //What to do on progress
   xhr.onprogress = function(){
       console.log("on progress");

   }
   xhr.onload = function(){

    if(this.status === 200){
        console.log(this.responseText)
    }
    else{
        console.log("some error occured");
    }
     
   }

   //send the request
   xhr.send();

  }