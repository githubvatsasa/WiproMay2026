const users = new Map();
async function getAllUsers(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let result = document.getElementById("result")
    let data = 0;
    const res = await fetch("http://localhost:3000/users").then(response => response.json());
    res.forEach(element => {
       if(element.name == username && element.password == password)
            data++;
    });
    if(data>0){
    result.innerHTML =`<h1>Success</h1>`;
    getMovies();
    }
}
async function getMovies(){
    let data = document.getElementById("movie");
    const res = await fetch("http://localhost:3000/movies").then(response => response.json());
     res.forEach(element => {
            data.innerHTML+= ` name = ${element.name} , image ${element.img} <button>AddtoCart</button><br>`
    });
    
}