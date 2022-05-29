console.log("Trial");

const students =[
    {name:"Kajal", subject:"ML"},
    {name:"Pooja",subject: "JS"}
]

function enrollStudent(student){
    setTimeout(function(){
        students.push(student);
        console.log("students have been enrolled")
    },3000);
}
function getStudents(){
    setTimeout(function(){
        let str ="";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
         console.log("students have been fetched");
    },1000);
}

let newStudent = {name:"sunny", subject:"python"}
enrollStudent(newStudent,getStudents);
