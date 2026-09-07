let registerform = document.getElementById("Register-form");
let regmessage = document.getElementById("register-message");

registerform.addEventListener("submit", function(event){
    event.preventDefault();

    let regemail = document.getElementById("register-email").value;
    let regname = document.getElementById("register-name").value;
    let regpass = document.getElementById("register-password").value;
    let conpass = document.getElementById("confirm-password").value;

    if(regemail === "" || regpass === "" || conpass === "" || regname === ""){
        regmessage.textContent = "Please fill all fields";
        return;
    }
    if(regpass !== conpass){
        regmessage.textContent = "Please Enter same password in both fields";   
        return;
    }
    
    let user = { name: name, email: regemail, password: regpass };

    localStorage.setItem("user", JSON.stringify(user));
    regmessage.textContent = "Registrated Successfully";

    setTimeout(() => {
        window.location.href ="index.html";
    }, 1500);

});