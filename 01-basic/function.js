
function myname(){
    console.log("A");
    console.log("w");
    console.log("a");
    console.log("i");
    console.log("s");
    
    }
    // myname()
    
    // function addtwonumbers(num1, num2){
    //   console.log( num1 + num2);
         
    // }
    function addtwonumbers(num1, num2){
    //    let result = num1 + num2
    //    return result
         return num1 + num2
    }
     const result= addtwonumbers(3,7)
    //  console.log("result", result);
    
    
     function userlogin(username) {
    
        // if(username===undefined){
        // console.log("Enter your name");
        // return
        // }
        if(!username){
        console.log("Enter your name");
        return
        }
          return `${username} just loges in`
     }
    // console.log(userlogin("Awais"));
    console.log(userlogin());
    
    //this is rest operator in function ....
    
    function calculatecart(...num1){
        return num1
    }
    console.log(calculatecart(200,300,400));
    
    //objects in function
    
    const  user={
        username :"Awais",
        price: 200
    }
    function handelobject(anyobject){
      console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
      
    }
    handelobject(user)
    