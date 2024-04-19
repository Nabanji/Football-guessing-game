const playerDetails = [
    {
        fname: "Lionel",
        lname: "Messi",
        img: "images/messi.jpg"
    },
    {
        fname: "Neymar",
        lname: "Junior",
        img: "images/neymar.jpg"
    },
    {
        fname: "Cristiano",
        lname: "Ronaldo",
        img: "images/ronaldo.jpg"
    },
    {
        fname: "Jude",
        lname: "Bellingham",
        img: "images/bellingham.jpg"
    },
    {
        fname: "Andres",
        lname: "Iniesta",
        img: "images/iniesta.jpg"
    },
    {
        fname: "Wayne",
        lname: "Rooney",
        img: "images/rooney.jpg"
    },
    {
        fname: "Kevin",
        lname: "De Bruyne",
        img: "images/de bruyne.jpg"
    },
    {
        fname: "Ronaldinho",
        lname: "Ronaldinho",
        img: "images/gaucho.jpg"
    },
    {
        fname: "Isco",
        lname: "Alarcon",
        img: "images/isco.jpg"
    },
    {
        fname: "Diego",
        lname: "Maradona",
        img: "images/maradona.jpg"
    },
    {
        fname: "Kylian",
        lname: "Mbappe",
        img: "images/mbappe.jpg"
    },
    {
        fname: "Bryan",
        lname: "Mbeumo",
        img: "images/mbeumo.jpg"
    },
    {
        fname: "Ronaldo",
        lname: "Nazario",
        img: "images/nazario.jpg"
    },
    {
        fname: "Martin",
        lname: "Odegaard",
        img: "images/odegaard.jpg"
    },
    {
        fname: "Mesut",
        lname: "Ozil",
        img: "images/ozil.jpg"
    },
    {
        fname: "Bukayo",
        lname: "Saka",
        img: "images/saka.jpg"
    },
    {
        fname: "Virgil",
        lname: "Van Dijk",
        img: "images/van dijk.jpg"
    },
    {
        fname: "Nemanja",
        lname: "Vidic",
        img: "images/vidic.jpg"
    },
    {
        fname: "Vinicius",
        lname: "Souza",
        img: "images/vinicius souza.jpg"
    },
    {
        fname: "Mason",
        lname: "Greenwood",
        img: "images/greenwood.jpg"
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

    if (userAnswer.value === "") {
        alert("Enter a name");
        // userAnswer.style.outline = "1px solid red";
    } else {
        if (
            userAnswer.value.toLowerCase() === playerFirstName.toLowerCase() ||
            userAnswer.value.toLowerCase() === playerLastName.toLowerCase() ||
            userAnswer.value.toLowerCase() === playerFirstName.toLowerCase() + " " + playerLastName.toLowerCase()
        ) {
            userScore++;
            playerScore.textContent = userScore + " ";

            let scoreInPercentage = (userScore / playerDetails.length) * 100;
            scoreInPercentage = Math.floor(scoreInPercentage);
            result.textContent = `Your score is`;

            // Specific user score
            let personalScore = document.querySelector(".personal-score");
            personalScore.innerHTML = `${scoreInPercentage} %`;

            if (scoreInPercentage >= 50) {
                personalScore.style.color = "green";
            } else {
                personalScore.style.color = "red";
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
            let finalScore = document.querySelector(".user-score");
            finalScore.style.display = "none";

            displayScore.style.display = "flex";
        }

        userAnswer.value = "";
    }



})


// Reset button functionality
resetBtn.addEventListener("click", () => {
    window.location.reload();
    playerProfile.style.display = "none";
})
