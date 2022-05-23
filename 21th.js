console.log("HTML file is same in every code just access the HtML file from the previous one");

// const proto = {
//     slogan: function(){
//     return `This is good company`;

// },
//  changeName : function(newName){
//      this.name = newName
//  }
// }

// const Akanksha =  object.create(proto);
// Akanksha.name = "Akanksha"
// console.log(Akanksha)

class Employee{
    constructor(givenName, givenExperience, givenNumber){
        this.name = givenName;
        this.Experience = givenExperience;
        this.Number = givenNumber;
    }


slogan(){
    return `I am ${this.name} and this company is best!`;
}
  Joiningyear(){
      return 2020 - this.Experience;
  }
}
  class Programmer extends Employee{
    constructor(givenName, givenExperience, givenNumber,givenLanguage,givenGithub){
    super(givenName, givenExperience, givenNumber);
    this.Language = givenLanguage;
    this.Github = givenGithub;
  }

  favouriteLanguage(){
      if(this.language =='python'){
          return 'Python';
      }
      else {
          return 'Javascript';
      }
  }
  }
//   harry = new Employee ('Akanksha', '23', 'A+');
//   console.log(harry);
//   console.log(harry.Joiningyear())


Shivam = new Programmer ('Adil', '56','12', 'GO', 'Adil234')
console.log(Shivam);
console.log(Shivam.favouriteLanguage());