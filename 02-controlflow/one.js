const tempratuire=45
if (tempratuire <45) {
    console.log("temprature is 45");
    
} else{
    console.log("temprature is greater than 45");
    
}


const userloggedin=true
const userlogged=true
const userloggrdfromgoogle=false
const userloggedfromemail=true

//and operator in js and check multiple comdintion
if (userloggedin && userlogged ) {
    console.log("user login true");
    
}
//or operator in  js check multiple condition in js
if (userloggrdfromgoogle|| userloggedfromemail) {
    console.log("user logggin from anyone");
    
}