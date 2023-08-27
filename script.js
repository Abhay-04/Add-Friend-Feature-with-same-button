const istatus = document.querySelector("h5");

const btn = document.querySelector("#add");

var check = 0;

btn.addEventListener("click" , function(){
   if(check == 0){
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    check = 1;
    btn.innerHTML = "Remove Friend";
    btn.style.backgroundColor = "red"

   } else{
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    check = 0;
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "cadetblue"

   }

})
