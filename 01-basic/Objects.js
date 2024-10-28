



const mysym=Symbol("key1")
const newuser={
     name :"Awais",
    age:22,
    Email: "cHAWAIS@.COM",
    Location:"haroon abad",
    [mysym]:"key1"
    


}
console.log(newuser["name"]);
console.log(newuser["age"]);
console.log(newuser.Email);

//symbol ko show krwany ka lia [inka use kry ga key value ma]
console.log(newuser[mysym]);
newuser.Email="chawais@678.com"
console.log(newuser);

// Object.freeze(newuser)
newuser.Email="awais@chatgpt.vom"
console.log(newuser);

//FuNCTION IN objects
newuser.greeting=function(){
    console.log("hello js ");
    
}
newuser.greetingtwo=function(){
    console.log(`hello js, ${this.name}`);
    
}
console.log(newuser.greeting());
console.log(newuser.greetingtwo());


