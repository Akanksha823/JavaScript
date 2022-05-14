console.log('events and event object');

document.getElementById('heading').addEventListener('click',function(e){
  let variable;
    console.log('You have clicked the heading');
variable = e.target;
variable = e.offsetX;//It will show the line number where we had clicked
variable = e.offsetY;
console.log(variable);
    // location.href='//www.google.com';
});