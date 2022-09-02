let flag=false;
let signUp = ()=>{
    let x = document.getElementById('f-name').value;
    let y = document.getElementById('l-name').value;
    //console.log(x+y)

    let name = x+y;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let confirmPassword= document.getElementById("confirm-password").value;
    if(password==confirmPassword && password.length>=8 
        && email.includes("@")){
        flag=true;
    }
    if(flag==true){
        let obj={
            name: name,
            email: email,
            password: password,
        }
        localStorage.setItem("users", JSON.stringify(obj));
        window.location.href="aftersignup.html";
    }
    else{
        alert(`Please input details correctly`)
        document.getElementById('f-name').value="";
        document.getElementById('l-name').value="";
        document.getElementById('email').value="";
        document.getElementById('password').value="";
        document.getElementById('confirm-password').value="";
    }
}