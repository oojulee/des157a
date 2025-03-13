(function(){
    "use strict";
    
    const gameData = {
        dice: ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 
               'images/dice4.png', 'images/dice5.png', 'images/dice6.png'],
        players: ['Pig 1', 'Pig 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29,
        rounds: [3, 3],
        mustPass: false
    };


    const turnArea = document.querySelector('.turn');
    const player1Turn = document.querySelector('.player1');
    const player1TurnText = document.querySelector('.player1 p');
    const player1TurnImg = document.querySelector('.player1 img');
    const player2Turn = document.querySelector('.player2');
    const pig1Score = document.querySelector('.pig1 .score');
    const pig2Score = document.querySelector('.pig2 .score');
    const pig1Try = document.querySelector('.pig1 .try');
    const pig2Try = document.querySelector('.pig2 .try');
    const pig1Img = document.querySelector('.pig1 img');
    const pig2Img = document.querySelector('.pig2 img');
    const backgroundArea = document.querySelector('.background');
    const passButton = document.querySelector('.pass');
    const rollButton = document.querySelector('.roll');
    const quitButton = document.querySelector('.quit');
    const ruleButton = document.querySelector('.rule');

    function init() {
        pig1Try.innerHTML = '';
        pig2Try.innerHTML = '';
        createHeartsAndScores();
        player2Turn.style.display = 'none';
        gameData.index = Math.round(Math.random());
        gameData.rounds = [3, 3];
        gameData.mustPass = false;
        setupTurnIndicator();

        quitButton.addEventListener('click', () => location.reload());
        

        ruleButton.addEventListener('click', showRulesOverlay);
        
        rollButton.addEventListener('click', throwDice);
        passButton.addEventListener('click', passTurn);
    }


    function showRulesOverlay() {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.zIndex = '1000';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.cursor = 'pointer';

        const rulesImg = document.createElement('img');
        rulesImg.src = 'images/rules.png';
        rulesImg.style.maxWidth = '80%';
        rulesImg.style.maxHeight = '80%';
        rulesImg.style.objectFit = 'contain';
        rulesImg.style.animation = 'rulesEntrance 0.3s ease-out';

        overlay.appendChild(rulesImg);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    }
    
    //hearts and scores on the pig images
    function createHeartsAndScores() {
        //heart containers for pig1
        const heartsContainer1 = document.createElement('div');
        heartsContainer1.className = 'hearts pig1-hearts';
        heartsContainer1.style.position = 'absolute';
        heartsContainer1.style.display = 'flex';
        heartsContainer1.style.justifyContent = 'center';
        heartsContainer1.style.gap = '5px';
        heartsContainer1.style.top = '280px'; 
        heartsContainer1.style.left = '50%';
        heartsContainer1.style.transform = 'translateX(-50%)';
        heartsContainer1.style.zIndex = '5';
        
        //heart containers for pig2
        const heartsContainer2 = document.createElement('div');
        heartsContainer2.className = 'hearts pig2-hearts';
        heartsContainer2.style.position = 'absolute';
        heartsContainer2.style.display = 'flex';
        heartsContainer2.style.justifyContent = 'center';
        heartsContainer2.style.gap = '5px';
        heartsContainer2.style.top = '340px'; 
        heartsContainer2.style.left = '50%';
        heartsContainer2.style.transform = 'translateX(-50%)';
        heartsContainer2.style.zIndex = '5';
        
        //container for pig1 to position hearts and score
        const pig1Container = document.createElement('div');
        pig1Container.className = 'pig1-container';
        pig1Container.style.position = 'relative';
        pig1Container.appendChild(pig1Img.cloneNode(true));
        pig1Img.parentNode.replaceChild(pig1Container, pig1Img);
        
        //container for pig2 to position hearts and score
        const pig2Container = document.createElement('div');
        pig2Container.className = 'pig2-container';
        pig2Container.style.position = 'relative';
        pig2Container.appendChild(pig2Img.cloneNode(true));
        pig2Img.parentNode.replaceChild(pig2Container, pig2Img);
        
        //score displays on pig images
        const scoreDisplay1 = document.createElement('div');
        scoreDisplay1.className = 'pig1-score-display';
        scoreDisplay1.style.position = 'absolute';
        scoreDisplay1.style.top = '210px';  // Position above hearts
        scoreDisplay1.style.left = '50%';
        scoreDisplay1.style.transform = 'translateX(-50%)';
        scoreDisplay1.style.zIndex = '6';
        scoreDisplay1.style.fontSize = '2.5rem';
        scoreDisplay1.style.fontWeight = 'bold';
        scoreDisplay1.style.fontFamily = 'Barriecito, sans-serif';
        scoreDisplay1.style.color = '#000000';  // Start both with black color
        scoreDisplay1.textContent = '0';
        
        const scoreDisplay2 = document.createElement('div');
        scoreDisplay2.className = 'pig2-score-display';
        scoreDisplay2.style.position = 'absolute';
        scoreDisplay2.style.top = '270px';  // Position above hearts
        scoreDisplay2.style.left = '50%';
        scoreDisplay2.style.transform = 'translateX(-50%)';
        scoreDisplay2.style.zIndex = '6';
        scoreDisplay2.style.fontSize = '2.5rem';
        scoreDisplay2.style.fontWeight = 'bold';
        scoreDisplay2.style.fontFamily = 'Barriecito, sans-serif';
        scoreDisplay2.style.color = '#000000';  // Start both with black color
        scoreDisplay2.textContent = '0';
        
        //hearts to each pig
        for (let i = 0; i < 3; i++) {
            const heart1 = document.createElement('img');
            heart1.src = 'images/heart.png';
            heart1.alt = 'heart';
            heart1.className = 'heart';
            heart1.style.width = '30px';
            heart1.style.height = '30px';
            heartsContainer1.appendChild(heart1);
            
            const heart2 = document.createElement('img');
            heart2.src = 'images/heart.png';
            heart2.alt = 'heart';
            heart2.className = 'heart';
            heart2.style.width = '30px';
            heart2.style.height = '30px';
            heartsContainer2.appendChild(heart2);
        }
        
        //score displays to pig containers
        document.querySelector('.pig1-container').appendChild(scoreDisplay1);
        document.querySelector('.pig2-container').appendChild(scoreDisplay2);
        
        //heart containers to pig image containers
        document.querySelector('.pig1-container').appendChild(heartsContainer1);
        document.querySelector('.pig2-container').appendChild(heartsContainer2);
    }
    
    //turn indicator to show which player's turn it is
    function setupTurnIndicator() {
        // If current player has no rounds left, automatically switch to other player
        if (gameData.rounds[gameData.index] <= 0) {
            gameData.index = gameData.index === 0 ? 1 : 0;
            
            // If both players have no rounds left, end the game
            if (gameData.rounds[0] <= 0 && gameData.rounds[1] <= 0) {
                endGame();
                return;
            }
            
            // Check again if the switched player has rounds left
            if (gameData.rounds[gameData.index] <= 0) {
                endGame();
                return;
            }
        }
        
        // Reset mustPass flag
        gameData.mustPass = false;
        
        // Enable roll button
        enableRollButton();
        
        if (gameData.index === 0) {
            // Display player 1 turn
            player1Turn.style.display = 'block';
            player2Turn.style.display = 'none';
            player1TurnText.textContent = "Pig 1's turn!";
            
            // Position player1 turn indicator over the pig1
            player1TurnImg.style.position = "absolute";
            player1TurnImg.style.left = "-10px";
            player1TurnImg.style.top = "-10px";
        } else {
            // Display player 2 turn
            player1Turn.style.display = 'none';
            player2Turn.style.display = 'block';
            
            // Position player2 turn indicator over the pig2
            const player2TurnImg = player2Turn.querySelector('img');
            const player2TurnText = player2Turn.querySelector('p');
            
            player2TurnImg.style.position = "absolute";
            player2TurnImg.style.right = "-10px";
            player2TurnImg.style.top = "-10px";
            player2TurnImg.style.left = "auto";
            
            player2TurnText.style.position = "absolute";
            player2TurnText.style.left = "50%";
            player2TurnText.style.transform = "translateX(-50%)";
            player2TurnText.style.top = "-20px";
            player2TurnText.style.color = "#FF5252";
            player2TurnText.style.fontFamily = "Carlito, sans-serif";
            player2TurnText.style.fontSize = "1.5rem";
            player2TurnText.style.width = "100%";
            player2TurnText.style.textAlign = "center";
            player2TurnText.textContent = "Pig 2's turn!";
        }
    }
    
    // Enable roll button
    function enableRollButton() {
        rollButton.style.opacity = '1';
        rollButton.style.cursor = 'pointer';
    }
    
    // Disable roll button
    function disableRollButton() {
        rollButton.style.opacity = '0.5';
        rollButton.style.cursor = 'not-allowed';
    }
    
    // Highlight pass button
    function highlightPassButton() {
        passButton.style.backgroundColor = '#FFD4D4';
        passButton.style.boxShadow = '0 0 10px rgba(255, 82, 82, 0.5)';
        
        // Remove highlight after a short delay
        setTimeout(function() {
            passButton.style.backgroundColor = '#D4EAFF';
            passButton.style.boxShadow = 'none';
        }, 1500);
    }
    
    // Roll the dice
    function throwDice() {
        // Check if player must pass (rolled a 1)
        if (gameData.mustPass) {
            alert('You rolled a 1! You must pass your turn.');
            return;
        }
        
        // Check if player has rounds left
        if (gameData.rounds[gameData.index] <= 0) {
            alert('No more rounds left! You must pass.');
            return;
        }
        
        // Use up a round (heart)
        useRound();
        
        // Roll random numbers
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        
        // Display the dice
        backgroundArea.innerHTML = `
            <img src="images/background.png" alt="background">
            <div class="dice">
                <img src="${gameData.dice[gameData.roll1-1]}" alt="${gameData.roll1}" class="die">
                <img src="${gameData.dice[gameData.roll2-1]}" alt="${gameData.roll2}" class="die">
            </div>
        `;
        
        // Style the dice
        const diceContainer = document.querySelector('.dice');
        diceContainer.style.position = 'absolute';
        diceContainer.style.top = '50%';
        diceContainer.style.left = '50%';
        diceContainer.style.transform = 'translate(-50%, -50%)';
        diceContainer.style.display = 'flex';
        diceContainer.style.gap = '20px';
        
        // Process results based on dice roll
        processRoll();
        
        // Check if both players are out of rounds after this roll
        if (gameData.rounds[0] <= 0 && gameData.rounds[1] <= 0) {
            // Short delay to show the dice roll result before showing the end game
            setTimeout(function() {
                endGame();
            }, 1500);
        }
        // If current player is out of rounds but other player still has rounds, 
        // automatically switch turns after a delay
        else if (gameData.rounds[gameData.index] <= 0) {
            // Only auto-switch if not showing a "must pass" message (for rolling a 1)
            if (!gameData.mustPass) {
                setTimeout(function() {
                    gameData.index = gameData.index === 0 ? 1 : 0;
                    setupTurnIndicator();
                }, 1500);
            }
        }
    }
    
    // Process the results of the dice roll
    function processRoll() {
        // if two 1's are rolled (snake eyes)
        if (gameData.rollSum === 2) {
            // Show message
            const message = document.createElement('div');
            message.textContent = 'Snake eyes! You lose all points, you must pass.';
            message.style.position = 'absolute';
            message.style.top = '60%';
            message.style.left = '50%';
            message.style.transform = 'translateX(-50%)';
            message.style.color = '#FF5252';
            message.style.fontFamily = 'Carlito, sans-serif';
            message.style.fontSize = '1.5rem';
            backgroundArea.appendChild(message);
            
            // Reset score to 0
            gameData.score[gameData.index] = 0;
            updateScores();
            
            // Set must pass flag and disable roll button
            gameData.mustPass = true;
            disableRollButton();
            highlightPassButton();
        }
        
        // if either die is a 1
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            // Show message
            const message = document.createElement('div');
            message.textContent = 'Oh no! You got 1. You must pass your turn.';
            message.style.position = 'absolute';
            message.style.top = '60%';
            message.style.left = '50%';
            message.style.transform = 'translateX(-50%)';
            message.style.color = '#FF5252';
            message.style.fontFamily = 'Carlito, sans-serif';
            message.style.fontSize = '1.5rem';
            backgroundArea.appendChild(message);
            
            // Set must pass flag and disable roll button
            gameData.mustPass = true;
            disableRollButton();
            highlightPassButton();
        }
        
        // if neither die is a 1
        else {
            // Add roll sum to player's score
            gameData.score[gameData.index] += gameData.rollSum;
            updateScores();
            
            // Check if game is over by reaching score threshold
            if (gameData.score[gameData.index] > gameData.gameEnd) {
                setTimeout(function() {
                    endGame();
                }, 1000);
            }
        }
    }
    
    // Use up one round (heart) for the current player
    function useRound() {
        // Calculate which heart to change (3 - rounds remaining)
        const heartIndex = 3 - gameData.rounds[gameData.index];
        
        // Get the hearts container for the current player
        const heartsContainer = document.querySelector(gameData.index === 0 ? '.pig1-hearts' : '.pig2-hearts');
        const hearts = heartsContainer.querySelectorAll('.heart');
        
       
        if (heartIndex >= 0 && heartIndex < hearts.length) {
            hearts[heartIndex].src = 'images/heart_black.png';
        }
        
        // Reduce rounds count
        gameData.rounds[gameData.index]--;
    }
    
    // Pass turn to other player
    function passTurn() {
        // Switch players
        gameData.index = gameData.index === 0 ? 1 : 0;
        setupTurnIndicator();
        
        // Clear the dice display
        backgroundArea.innerHTML = '<img src="images/background.png" alt="background">';
        
        // Check if game should end
        checkGameEnd();
    }
    
    // Update the scores display
    function updateScores() {
        // Update the on-image score displays
        const scoreDisplay1 = document.querySelector('.pig1-score-display');
        const scoreDisplay2 = document.querySelector('.pig2-score-display');
        
        if (scoreDisplay1 && scoreDisplay2) {
            // Update the score text
            scoreDisplay1.textContent = gameData.score[0];
            scoreDisplay2.textContent = gameData.score[1];
            
            // Update colors based on which score is higher
            if (gameData.score[0] > gameData.score[1]) {
                // Pig 1 has higher score - make it red
                scoreDisplay1.style.color = '#FF5252';
                scoreDisplay2.style.color = '#000000';
            } else if (gameData.score[1] > gameData.score[0]) {
                // Pig 2 has higher score - make it red
                scoreDisplay1.style.color = '#000000';
                scoreDisplay2.style.color = '#FF5252';
            } else {
                // Scores are tied - both black
                scoreDisplay1.style.color = '#000000';
                scoreDisplay2.style.color = '#000000';
            }
        }
    }
    
    // Check if the game should end
    function checkGameEnd() {
        // If both players have used all their rounds, end the game
        if (gameData.rounds[0] <= 0 && gameData.rounds[1] <= 0) {
            endGame();
        }
    }
    
    // End the game
    function endGame() {
        // Determine winner based on score
        let winnerText;
        let winnerIndex;
        
        if (gameData.score[0] > gameData.score[1]) {
            winnerText = `${gameData.players[0]} wins with ${gameData.score[0]} points!`;
            winnerIndex = 0;
        } else if (gameData.score[1] > gameData.score[0]) {
            winnerText = `${gameData.players[1]} wins with ${gameData.score[1]} points!`;
            winnerIndex = 1;
        } else {
            winnerText = `It's a tie with ${gameData.score[0]} points each!`;
            winnerIndex = -1; // No winner
        }
        
        // Apply animation to winner's container (including pig, score and hearts)
        if (winnerIndex === 0) {
            // Pig 1 wins - apply animation to entire container
            const pig1Container = document.querySelector('.pig1-container');
            if (pig1Container) {
                pig1Container.classList.add('winner-container');
                pig1Container.classList.add('winner-bounce');
            }
        } else if (winnerIndex === 1) {
            // Pig 2 wins - apply animation to entire container
            const pig2Container = document.querySelector('.pig2-container');
            if (pig2Container) {
                pig2Container.classList.add('winner-container');
                pig2Container.classList.add('winner-bounce');
            }
        }
        
        // Show winner message
        const message = document.createElement('div');
        message.textContent = winnerText;
        message.style.position = 'absolute';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.color = '#FF5252';
        message.style.fontFamily = 'Carlito, sans-serif';
        message.style.fontSize = '2rem';
        message.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        message.style.padding = '20px';
        message.style.borderRadius = '10px';
        message.style.textAlign = 'center';
        message.style.zIndex = '100';
        
        // Add gold border for winner
        if (winnerIndex !== -1) {
            message.style.border = '3px solid gold';
            message.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.6)';
        }
        
        document.body.appendChild(message);
        
        // Disable buttons
        rollButton.removeEventListener('click', throwDice);
        passButton.removeEventListener('click', passTurn);
        
        // Change quit to restart
        quitButton.addEventListener('click', function() {
            location.reload();
        });
    }
    
    // Initialize the game
    init();
    
}());
