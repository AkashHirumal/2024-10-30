const guessNumber = Math.floor((Math.random()*10)+1);
    console.log(guessNumber);
    let countNum = 0;
    

    
    function myGuess(){
    let guessText = Number(document.getElementById("txtGuess").value);  
   
        while(guessText!==guessNumber){
            // console.log("yes");
            resalt.innerHTML = "TRY";
            countNum = countNum + 1;
            countc.innerHTML = 3-countNum;
            break;
        }
        if(guessText==guessNumber){
            resalt.innerHTML = "Congragulation Your WIN";
        }
        if(countNum == 3){
            resalt.innerHTML = "Game Over! <br> The Correct Number was " + guessNumber; 
        }
    }

  

