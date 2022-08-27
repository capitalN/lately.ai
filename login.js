let obj = JSON.parse(localStorage.getItem("users")) || []

let login=(event)=>{
    event.preventDefault();
    //console.log(obj)
    let uemail= document.getElementById("email").value;
    let upass = document.getElementById("password").value;

    let flag=false;
    for(let key in obj){
        if(uemail==obj.email && upass==obj.password){
            flag=true
            break;
        }
    }
    if(flag){
        window.location.href="index.html"
    }
    else{
      let x=  document.getElementById("danger")
      x.innerText="Sorry, we were unable to identify you with that info";
      x.style.color="red";
      document.getElementById("email").value=""
      document.getElementById("password").value=""
    }
}