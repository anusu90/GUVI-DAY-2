// ## HOW DO WE DO COPY BY VALUE

//COPY BY REFERENCE
let a = [1,2,3,4];
let b = a;
b[1] = 45;
console.log(a,b);

//COPY BY VALUE - METHOD #1 - Using Spread operator
let c = [...a];
c[1]=55;
console.log(a,c);

//COPY BY VALUE - METHOD #2 - Using Object.assign
let d =[]
Object.assign(d,a);
d[1] = 65;
console.log(a,d)

//COPY BY VALUE - METHOD #3 - Using map
let e = a.map(v=>v)
e[1] = 75;
console.log(a,e);


//COPY BY VALUE - METHOD #4 - Using for loop
let f = [];
for (var [index,value] of a.entries()){
    f[index] = value;
}
f[1] = 85
console.log(a,f);

/* THE OUTPUT IS AS FOLLOWING

[ 1, 45, 3, 4 ] [ 1, 45, 3, 4 ]
[ 1, 45, 3, 4 ] [ 1, 55, 3, 4 ]
[ 1, 45, 3, 4 ] [ 1, 65, 3, 4 ]
[ 1, 45, 3, 4 ] [ 1, 75, 3, 4 ]
[ 1, 45, 3, 4 ] [ 1, 85, 3, 4 ]

*/

