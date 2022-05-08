//Type converion 

 let myvar;
 myvar = String(34);
 console.log(myvar, (typeof myvar));

 let booleanvar = String(true);
 console.log(booleanvar,(typeof booleanvar));
 
 let date = String(new Date());
 console.log(date, (typeof date));

 let arr = ([1,2,3,4,5]);
 console.log(arr, (typeof arr));

 let arr1 = ([1,2,3,4,5]);
 console.log(arr1.length, (typeof arr1));

 let arr2 = String([1,2,3,4,5]);
 console.log(arr2.length, (typeof arr2));

 let i = 8;
 console.log(i.toString());
 let b = false;
 console.log(b.toString());

 let number0 = 34;
 console.log(number0, (typeof number0));

 let number = '34';
 console.log(number, (typeof number));

 let number1 = parseInt('34');
 console.log(number1, (typeof number1));

 let number2 = Number('343');
 console.log(number2, (typeof number2));

 let number3 = parseFloat('34.9865');
 console.log(number3, (typeof number3));

 let number4 = parseFloat('34.9865');
 console.log(number4.toFixed(3), (typeof number4)); // It will give only 3 number after point....

 //Type coercion
 let mystr = "675";
 let mynum = 42;

 console.log(mystr + mynum);

 let mystr1 = Number("675");
 let mynum1= 42;

 console.log(mystr1 + mynum1);

