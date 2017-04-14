var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var maxGuesses = 9;
    var wins = 0;
    var losses = 0;
    var userInput = [];
    var random = parseInt(Math.random() * 100) % 26;
    var randomLetter = choices[random];
    var keysPress;
    

   
   
    document.onkeyup = function(event) {
        keysPress = event.key;
        userInput.push(keysPressed);
         

        if (userInput.indexOf(randomLetter) === -1) {
            maxGuesses--;
           
           
        }   
        else if (userInput.indexOf(randomLetter) > -1) {
            maxGuesses--;

            if (keysPress===randomLetter)
                wins++;
                maxGuesses=9;
                userInput = [];
                random = parseInt(Math.random() * 100) % 26;
                randomLetter = choices[random];
               
            }
        if (maxGuesses === 0) {
            losses++;
            maxGuesses = 9;
            userInput = [];
    }
        var html =  "<h3>Your guesses: " + userInput + "</h3>" +
                    "<h3>Guesses Left: " + maxGuesses + "</h3>" +
                    "<h3>Wins: " + wins + "</h3>" +
                    "<h3>Losses: " + losses + "</h3>" ;

        
    }
    