let userscore = 0;
let compuser = 0;
const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user=choice.getAttribute("id")
        console.log("choice was clicked",user);
        

    });
});