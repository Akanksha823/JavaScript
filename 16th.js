console.log("try!");
// const body = document.body;
// const heading = document.createElement("h1");
// heading.innerText = "Welcome to my Code World!";
// body.append(heading);

// const div = document.createElement("div");
// div.innerText = "This is an editable div";
// div.id = "edit";
// body.append(div);

// document.getElementById("edit").addEventListener("click", () => {
//     div.contentEditable = "true"; // It will make the content inside the div editable
// });

// document.getElementById("edit").addEventListener("blur", () => {
//     localStorage.setItem("editable-div", document.getElementById("edit").innerText); // Saving the content inside local storage
// });


const body=document.body;
const heading = document.createElement("h1");
heading.innerText = "Welcome to my code word";
body.append(heading);

const div = document.createElement("div");
div.innerText = "This is an editable div";
div.id = "edit";
body.append(div);

document.getElementById("edit").addEventListener("click",()=>{
    div.contentEditable = "true";
});

document.getElementById("edit").addEventListener("blur",()=>{
    localStorage.setItem("editable.div",document.getElementById("edit").innerText);
});

