const playerDetails = [
    {
        fname: "Lionel",
        lname: "Messi",
        img: "/images/messi.jpg"
    },
    {
        fname: "Neymar",
        lname: "Junior",
        img: "/images/neymar.jpg"
    },
    {
        fname: "Cristiano",
        lname: "Ronaldo",
        img: "/images/ronaldo.jpg"
    },
    {
        fname: "Jude",
        lname: "Bellingham",
        img: "/images/bellingham.jpg"
    },
    {
        fname: "Andres",
        lname: "Iniesta",
        img: "/images/iniesta.jpg"
    },
    {
        fname: "Wayne",
        lname: "Rooney",
        img: "/images/rooney.jpg"
    }
]

// Starting the game
const startBtn = document.getElementById("start-btn");

// Reseting the game
const resetBtn = document.getElementById("reset-btn");

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

// User answer value selector
let userAnswer = document.querySelector("#answer");

//Number of tries a user is allowed
let attempts = playerDetails.length;

// Button selector for submitting the answer
const submitBtn = document.getElementById("submit-btn");

// Player score
let playerScore = document.getElementById("player-score");
let userScore = 0;
playerScore.textContent = userScore + " ";

// Score in percentage display
let displayScore = document.querySelector(".score");
let result = document.getElementById("display-score");

// Overall Possible score
let overallScore = document.getElementById("total");
// Setting possible overall score
overallScore.textContent = playerDetails.length;

// Submit button functionality
submitBtn.addEventListener("click", (e) => {
    // Preventing the page from reloading
    e.preventDefault();


    if (
        userAnswer.value.toLowerCase() === playerFirstName.toLowerCase() ||
        userAnswer.value.toLowerCase() === playerLastName.toLowerCase() ||
        userAnswer.value.toLowerCase() === playerFirstName.toLowerCase() + " " + playerLastName.toLowerCase()
    ) {
        userScore++;
        playerScore.textContent = userScore + " ";

        let scoreInPercentage = (userScore / playerDetails.length) * 100;
        scoreInPercentage = Math.floor(scoreInPercentage);
        result.textContent = "Your score is " + scoreInPercentage + "%";

        if (scoreInPercentage >= 50) {
            result.style.color = "green";
        } else {
            result.style.color = "red";
        }
    }

    index++;

    if (index > playerDetails.length - 1) {
        index = 0;
    }

    playerFirstName = playerDetails[index].fname.toLowerCase();
    playerLastName = playerDetails[index].lname.toLowerCase();
    playerImage.src = playerDetails[index].img;

    attempts--;

    if (attempts < 1) {
        playerImage.style.display = "none";
        let form = document.getElementById("user-form");
        form.style.display = "none";

        displayScore.style.display = "flex";
    }

    userAnswer.value = "";

})


// Reset button functionality
resetBtn.addEventListener("click", () => {
    window.location.reload();
})
