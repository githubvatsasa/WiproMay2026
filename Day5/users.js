const users = new Map();
async function getAllUsers(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let result = document.getElementById("result")
    let id = 0;
    const res = await fetch("http://localhost:3000/users").then(response => response.json());
    res.forEach(element => {
       if(element.name == username && element.password == password)
            id = element.id;
    });
    if(id>0){
    result.innerHTML =`<h1>Success</h1>`;
    getMovies(id);
    }
}
async function getMovies(id){
    let data = document.getElementById("movie");
    console.log("Id of the user",id);
    
    const res = await fetch("http://localhost:3000/movies").then(response => response.json());
     res.forEach(element => {
            data.innerHTML+= ` name = ${element.name} , image ${element.img} 
            <button onclick = addToWatchList(${element.id},${id})>AddtoWatchList</button><br>`
    });
    
}
async function addUser()
{
     let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let result = document.getElementById("result")
    let data = 0;
    const res = await fetch("http://localhost:3000/users",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:username,
            password:password
        })
    })
    data = await res.json();
    result.innerHTML =`<h1>Success</h1>`;
}
async function addToWatchList(movieid,userid){
    console.log("add to watchlist is called");
    console.log("movieid",movieid);
    console.log("user id",userid);
    const res = await fetch(`http://localhost:3000/users/${userid}`,{
        method:"Patch",
        mode:"cors",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            watchList:movieid
        })
    })
      data = await res.json();
      console.log(data);
      
    
}