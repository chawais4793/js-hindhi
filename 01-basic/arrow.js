const user={
    username : "Awais",
    price:200,

    mymessage :function(){
        console.log(`${this.username} , wellcome to website`);
        console.log(this);
        
        
    }
}
// user.mymessage()
// user.username ="ALi"
// user.mymessage()

const chai=  ()=>{
    let username="Awais"
    console.log(this);
    

}
chai()

//explicity return value 
const addtwo=(num1,num2) =>{
    return num1+num2
}
// console.log(addtwo(3,5));

//implicity return value in this we dont use saqure bracket we use paranthesis ()



// const add=(num1,num2)=> (num1+num2)  //
const add=(num1,num2)=> ({username :"awais"}) //
console.log(add(3,5));






