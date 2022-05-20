console.log("try...try...try!");

//object literals for creating objects

let car={
    name :'Maruti',
    topSpeed:'90',
    run:function(){
        console.log('Car is running');
    }
};

// creating constructors for car

function GeneralCar(givenName , givenSpeed){
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    };
    this.analyze = function(){
        console.log(`This car is slower by ${200 - this.Speed} km/H than Mercedes`);
    };
}
    car1 = new GeneralCar('Nissan',50);

    console.log(car1);



// let Hotel = {
//     name:'Pigment',
//     topDishes:45,
//     run:function(){
//         console.log("This is 5 star hotel");
//     }
// };

// function NormalHotels(givenName, GivenDishes){
//     this.name =givenName;
//     this.Dishes = givenDishes;
//     this.run = function(){
//         console.log(`$(this.name)this 3 star hotel`);

//     };
//     this.analyze = function(){
//         console.log(`This hotel is  ${200 - thisw.Dishes} less dishes than Asian hotel`);
//     ;
//  };
// }
// Hotel1 = new NormalHotel ("lapido, 76");
// console.log(Hotel);
