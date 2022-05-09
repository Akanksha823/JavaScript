const age = 65;
const vari=34;
const doesDrive = true;

if(age==19){
    console.log("Age is 190");
}
else if (age==65){
    console.log("Age is 65");
}
else{
    console.log("Age is not 19" );
}
if( typeof vari !=='undefined'){
    console.log('vari is defined');
}
else{
    console.log('vari is not defined');

}

if (doesDrive && age>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

console.log(age==45? 'Age is 45': 'Age is not 45');

//Switch case statement
switch(age){
    case 18:
        console.log("You are 18");
        break;

    case 28:
            console.log("You are 28");
            break; 
            
    case 38:
        console.log("You are 38");
        break;

        default:
            console.log("the data is not available");
            break;


}
