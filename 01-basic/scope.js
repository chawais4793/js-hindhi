function one(){
    const username="Awais"

    function two(){
        const website="Youtube"
        console.log(username);
        
    }
    // console.log(website);
two()
    
}
one()

// scope ka anadr jo value hoge wohi print hoge 

if (true) {
    const username="Awais"
    if (username==="Awais") {
        const website=" youtube"
        console.log(username + website);
        
        
    }
    console.log(website);
    
}
console.log(username);

