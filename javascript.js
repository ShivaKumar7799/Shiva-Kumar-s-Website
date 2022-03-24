function login(){
        console.log("login successful");
       let userName = document.getElementById("userName").value;
       let password = document.getElementById('password').value;

        if(userName == "Shivakumar" && password == "Shiva123"){
                window.location.href = "shiva.html"
        }else{
                document.getElementById("wrongDetails").innerHTML = "UserName or Password is wrong";
        }
}
function preventBack(){
        window.history.forward();
}
setTimeout(preventBack(),0)
