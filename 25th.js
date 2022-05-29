let p = new Promise((resolve, reject)=>{
    let a =1+2
    if(a==3){
        resolve('success')
       }
       else{
           reject('Failure')
       }
})

p.then((message)=>{
    console.log('This is in the then ' + message)
}).catch((message)=>{
    console.log('This is in the catch ' + message)
})