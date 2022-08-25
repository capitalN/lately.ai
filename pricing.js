let flag = false;

let toggle = ()=>{
   let price1= document.getElementById("doll-1");
   let time1 = document.getElementById("time-1")
   let price2= document.getElementById("doll-2");
   let time2 = document.getElementById("time-2");
   let price3= document.getElementById("doll-3");
   let time3 = document.getElementById("time-3");
   let bill1 = document.getElementById("bill-1");
   let bill2 = document.getElementById("bill-2");
   let bill3 = document.getElementById("bill-3");
  // price1="";
   //console.log(price1)
  // flag=true;
   if(flag==true){
    price1.innerText="$19"
    price2.innerText="$49"
    price3.innerText="$129"
    time3.innerText="/user/mo"
    bill1.innerText= "Billed Monthly"
    bill2.innerText= "Billed Monthly"
    bill3.innerText= "Billed Monthly"
    flag=false;
    console.log(price1)
   }
   else{
    price1.innerText="$14"
    price2.innerText="$39"
    price3.innerText="$99"
    time3.innerText="/mo"
    bill1.innerText= "Billed Annually"
    bill2.innerText= "Billed Annually"
    bill3.innerText= "Billed Annually"
    flag=true;
    console.log(price1)
   }
}