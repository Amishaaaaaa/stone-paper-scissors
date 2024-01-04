let userScore = 0;
let pcScore = 0;
let playMove = document.querySelector(".chance");
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
const pcPoints = document.querySelector("#pc-score");
const userPoints = document.querySelector("#user-score");
let result = document.querySelector(".result");

const compChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const num = Math.floor(Math.random () * 3); 
    console.log("comp choice is ", options[num]);
    return options[num];
}

const drawMatch = () => {
    msg.classList.remove("hide");
    console.log("Match is draw");
    msg.innerText = "Match Draw"; 
    msg.style.backgroundColor = "#ffffff";
    result.innerText = "Try again!"
}

const showWinner = (userWin, choiceName, pcChoice) => {
    if (userWin) {
        console.log("You Won");
        msg.innerText = `You win!`;
        msg.style.backgroundColor = "lightgreen";
        userPoints.innerText = userScore;
        result.innerText = `Your  ${choiceName} beats ${pcChoice}`;
    } else {
        console.log("You lost")
        msg.innerText = `You lose!`; 
        msg.style.backgroundColor = "red"; 
        pcPoints.innerText = pcScore;  
        result.innerText = `${pcChoice} beats your ${choiceName}`;
        }
    }

const algo = (choiceName) => {  
    console.log("user choice =", choiceName);
    const pcChoice = compChoice();
    if (pcChoice === choiceName) {
        //draw
        drawMatch();
    } else{
        let userWin = true;
        if ((pcChoice === "stone" && choiceName === "paper") || (pcChoice === "scissors" &&choiceName ==="stone") || (pcChoice === "paper" && choiceName === "scissors")) {
            userScore++;
            userWin = true;
            console.log("userScore is ", userScore);
            console.log("pcScore is ", pcScore);
            showWinner(userWin, choiceName, pcChoice);
            
        } else if ((choiceName === "stone" && pcChoice === "paper") || (choiceName === "scissors" && pcChoice ==="stone") || (choiceName === "paper" && pcChoice === "scissors")) {
            pcScore++;
            userWin = false;
            console.log("userScore is ", userScore);
            console.log("pcScore is ", pcScore);
            showWinner(userWin, choiceName, pcChoice);
        }
}
    
}



choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const choiceName = choice.getAttribute("id");
        algo(choiceName);
        
    })
})
