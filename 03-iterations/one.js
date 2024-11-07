
//for loops


for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element <5) {
       //console.log("5 is done");
    
        
    }
    else{
        // console.log("5 is greater");
        
    }
    //console.log(element);
    
}
let myarray=  ["ironman",  "thor", "loki"] 

console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
    
}

//continue and break


// for (let i = 1; i <= 20 ; i++) {
//     if (i==5) {
//         console.log("5 detecdet");
//         break
        
//     }
//     console.log(`value of i ${i}`);
    
    
// }
for (let i = 1; i <= 20 ; i++) {
    if (i==5) {
        console.log("5 detecdet");
        continue
        
    }
    console.log(`value of i ${i}`);
    
    
}