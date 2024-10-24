const marvelheros=["spiderman,ironman,loki"]
const dcheros=["batman,doctorstrange,hulk"]

marvelheros.push(dcheros)
console.log(marvelheros);

//this is concat for use 2 array combine and givs us new array 

const allheros=marvelheros.concat(dcheros)
console.log(allheros);


//this is spread operator for use 2 array ko akhta dikhana 

const allnewheros=[...marvelheros,...dcheros]
console.log(allnewheros);

//internal array ko ak array dikhany ka lia use hota haa
const mynumber=[1,2,3,[4,5,6],7,[8,9],10]
console.log(mynumber.flat(Infinity));

const mystring=("1,2,3,4,45,5,6,6,7,77,")
console.log(Array.from("1,2,3,4,45,5,6,6,7,77"));

//+++++++++++++++++++methods+++++++++++++

let num=[1,3,4,5,5,6]
console.log( typeof num.join("or"));  //joim kisy bi array ka sath kuch or jorna ho

let newnum=[1,3,4,5,6,7]
newnum.pop()  //pop array ma kisy ko remove krna ka lia use hota ha
console.log(newnum);
let newnum2=[1,3,4,5,6,7]
newnum2.push(56)  //push new valyue ko add krny ka lia use hota ha
console.log(newnum2);


//value ko nikal ka onki jaga new value add kr deta ha or delete values ko bi print krta ha
const pen=[11,12,13,14,15,16,17,11,8]
pen.splice(2,4,1123,1111,1212,1313)
console.log(pen);






