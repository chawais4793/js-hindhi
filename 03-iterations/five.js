//for each loop

const coding=["javascript","Html", "css","python","Java","Csharp" ]
coding.forEach( function (value) {
    //console.log(value);

    //arrow function use for each loop without function name declared
    
}  )
coding.forEach( (item ) =>{
  // console.log(item);
   
} )
  //for each give the index num and array list 
coding.forEach( (item, index, array)=>{
 //console.log(item, index, array);
  
} )

//array ka andr objects ki value access krny ka lia for each loop  use hoty for easily 

const mycode=[
    {
        language:"javascript",
        file:"js"
    },
    {
        language:"java",
        file:"java"
    },
    {
        language:"python",
        file:"py"
    },
]
mycode.forEach((item)=>{
  console.log(item);
  
} )
