
function logOut() {
    window.location.replace("./projetinho.html");
}
function logar() {

       var email = document.getElementById("email").value;
       var password = document.getElementById("password").value;

    if (email == "joabe.fbb@gmail.com" && password == "12345") {
        console.log("cheguei")
        window.location.replace("./loged.html");
        } else {
            alert("Usuario ou senha incorretos")
        
        }
    
    }


console.log('------------')

const email = "joabe.fbb@gmail.com"
const password = "12345"
