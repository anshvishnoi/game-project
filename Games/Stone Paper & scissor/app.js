let yourscore=0;
let computerscore=0;

const selects = document.querySelectorAll(".select");
const msg=document.querySelector("#msg");

const yourscorepara=document.querySelector("#your-score");
const computerscorepara=document.querySelector("#computer-score");

const gencomputerselect =() =>{
    const options =["stone","paper","scissor"];
    const randomidx =Math.floor(Math.random()*3)
    return options[randomidx];
}

const drawgame=()=>{
    msg.innerText="Draw 😏";
    msg.style.backgroundColor = "rgb(144,25,47)";
}

const winner=(userwin)=>{
    if (userwin){
        yourscore++;
        yourscorepara.innerText=yourscore;
        msg.innerText="you win 😎";
        msg.style.backgroundColor="green";
    }else{
        computerscore++;
        computerscorepara.innerText=computerscore;
        msg.innerText="you lose 😒";
        msg.style.backgroundColor="red";
    }
}

const aaokhele = (youselect) =>{
    console.log("your choice=",youselect);
    const compselect=gencomputerselect();
    console.log("computer choice=",compselect);

    if (youselect===compselect){
        drawgame();
    }else{
        let userwin = true;
        if(youselect==="stone"){
            userwin=compselect==="paper"?false:true;
        }else if (youselect==="paper"){
            userwin=compselect==="scissor"?false:true;
        }else{
            userwin=compselect==="stone"?false:true;
        }
        winner(userwin);
    }
   
}
selects.forEach((select) => {
    select.addEventListener("click",() => {
        const selectId =select.getAttribute("id");
        aaokhele(selectId)
    });
});