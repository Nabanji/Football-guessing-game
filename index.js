const playerDetails = [
    {
        fname: "Lionel",
        lname: "Messi",
        img: "/Football-guessing-game/images/messi.jpg"
    },
    {
        fname: "Neymar",
        lname: "Junior",
        img: "/Football-guessing-game/images/neymar.jpg"
    },
    {
        fname: "Cristiano",
        lname: "Ronaldo",
        img: "/Football-guessing-game/images/ronaldo.jpg"
    },
    {
        fname: "Jude",
        lname: "Bellingham",
        img: "/Football-guessing-game/images/bellingham.jpg"
    },
    {
        fname: "Andres",
        lname: "Iniesta",
        img: "/Football-guessing-game/images/iniesta.jpg"
    },
    {
        fname: "Wayne",
        lname: "Rooney",
        img: "/Football-guessing-game/images/rooney.jpg"
    }
]

// Starting the game
const startBtn = document.getElementById("start-btn");

// PLayer Details
const playerProfile = document.querySelector(".player-profile");
const playerImage = document.getElementById("player-image");

let index = Math.floor(Math.random() * playerDetails.length);
let playerFirstName = playerDetails[index].fname;
let playerLastName = playerDetails[index].lname;

startBtn.addEventListener("click", () => {
    playerProfile.style.display = "flex";
    playerImage.src = playerDetails[index].img;
})

// User answer selector
let userAnswer = document.querySelector("#answer");

// Button selector for submitting the answer
const submitBtn = document.getElementById("submit-btn");

// Submit button functionality
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(userAnswer.value);
    if (userAnswer.value == playerFirstName.toLowerCase() || userAnswer == playerLastName.toLowerCase()) {
        alert("You win!!")
    } else {
        alert("You lose");
    }
    console.log(playerFirstName);
    console.log(playerLastName);
    /*
    if (userAnswer == playerFirstName.toLowerCase() || userAnswer == playerLastName.toLowerCase()) {
        e.preventDefault();
        alert("You win");
    } else {
        alert("You lose");
    }
    */
})