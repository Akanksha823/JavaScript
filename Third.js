console.log("It's third file........");

const Name= 'Harry';
const greet = 'Good morning';
console.log(greet + ' ' + Name);
 
// we can concat the elemnts by doing thse two methods...

//1
let html;
html = "<h1> this is a heading</h1>" + "<p>this is a paragraph </p>";

//2
html = html.concat('this', ' str2');
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());

console.log(html.length);
console.log(html.toUpperCase());

console.log(html.indexOf('<'));

console.log(html.lastIndexOf('>'));

console.log(html.charAt(5));

console.log(html.endsWith('str2'));

console.log(html.includes('is'));

console.log(html.substring(0,3));

console.log(html.indexOf('<'));

console.log(html.slice(-4));

console.log(html.slice(0,4));

console.log(html.split(' '));

console.log(html.replace('this', 'it'));

let Name1= 'harry';
let fruit1 = 'orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${Name1}
<h1>The fruit is tasty </h1>
<p>You like ${fruit1} and ${fruit2}</p>`;

document.body.innerHTML = myHtml;







