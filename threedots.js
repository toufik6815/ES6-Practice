const ages1 = [12, 45, 78 , 50];
const ages2 = [1, 44, 58 , 40];
const ages3 = [10, 4, 5 , 4];
const allAges1 = ages1.concat(ages2).concat([500]).concat(ages3);
console.log(allAges1);

const allAges2 = [...ages3, ...ages1, 1000];
console.log(allAges2);



