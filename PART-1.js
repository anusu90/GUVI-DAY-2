// ## HOW DO WE DO COPY BY VALUE

//COPY BY REFERENCE
let a = [1,2,3,4];
let b = a 

//COPY BY VALUE - METHOD #1 - USING SPREAD OPEATOR
let c = [...a];
c[1]=55;
console.log(a,b,c);
