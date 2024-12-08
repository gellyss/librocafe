
        let secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const userGuess = document.getElementById("guessInput").value;
            const feedback = document.getElementById("feedback");
            const gameOver = document.getElementById("gameOver");
            attempts++;

            if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
                feedback.textContent = "Please enter a number between 1 and 100.";
                feedback.style.color = "red";
            } else if (userGuess < secretNumber) {
                feedback.textContent = "Too low! Try again.";
                feedback.style.color = "blue";
            } else if (userGuess > secretNumber) {
                feedback.textContent = "Too high! Try again.";
                feedback.style.color = "blue";
            } else {
                gameOver.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
                feedback.textContent = "";
                gameOver.style.color = "green";
                document.querySelector("button").disabled = true; // Disable the button when game is over
            }
        }