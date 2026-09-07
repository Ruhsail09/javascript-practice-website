    let form = document.getElementById("login-form");
    let logmessage = document.getElementById("Login-message");

    form.addEventListener("submit" , function (event){
        event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if (email === "" || password === ""){
        logmessage.textContent = "Please fill all fields";
        return;
    }
    logmessage.textContent = "Login recieved";

    let saveduser = localStorage.getItem("user");

    if(saveduser === null){

        logmessage.textContent = "No account found. Please register first.";
        return;
    }
    let user = JSON.parse(saveduser);

    if(email === user.email && password === user.password){

        logmessage.textContent = "Login Successfully";
    
    setTimeout(() => {
       window.location.href="shop.html"; 
    }, 1000);
    }
    else {

        logmessage.textContent = "Incorrect emial and Password";
    }

    });