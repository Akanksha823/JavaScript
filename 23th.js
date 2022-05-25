console.log("This is a trial!")

//  This is synchronous type
for (let index = 0; index < 45; index++) {
    const element = index;
    console.log("The index element is " + index);
    
}
console.log("The function ends here");


//This is Asynchronous type
setTimeout(() => {

    for (let index = 0; index < 45; index++) {
        const element = index;
        console.log("The index element is " + index);
        
    }

}, 100);


console.log("The function ends here");