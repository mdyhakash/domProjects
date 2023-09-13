

var btn = document.querySelector("#btn")
var istatus = document.querySelector("h5")
var flag=0


btn.addEventListener("click", function(){
    if(flag==0){
        istatus.innerHTML = "Friend request sent"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag+=1
    }
    else{
        istatus.innerHTML = "Suggestion";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend"
        flag=0;
    }
})