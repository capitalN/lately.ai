let obj = JSON.parse(localStorage.getItem("users")) || []

let myFunc=(event)=>{
    event.preventDefault();
    //console.log(obj)
    let uemail= document.getElementById("email").value;

    let flag=false;
    for(let key in obj){
        if(uemail==obj.email){
            flag=true
            break;
        }
    }
    if(flag){
        window.location.href="index.html"
    }
    else{
      let x=  document.getElementById("sorry")
      x.innerText="Sorry,Please Try Again.";
      x.style.backgroundColor="red";
      document.getElementById("email").value=""
    }
}