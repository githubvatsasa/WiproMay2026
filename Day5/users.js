const users = new Map();
async function getAllUsers(){
    let htmlElement = document.getElementById("users");
    const res = await fetch("http://localhost:3000/users").then(response => response.json());
    res.forEach(element => {
        htmlElement.innerHTML += `<p>
            Id: ${element.id} <br>
            Name: ${element.name} <br>
            Email: ${element.password} <br>
        </p>`  
    });
   
    
}

getAllUsers()