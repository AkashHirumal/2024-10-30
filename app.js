const guessNumber = Math.floor((Math.random()*10)+1);
    console.log(guessNumber);
    let countNum = 3;
   
    function myGuess(){
    if(countNum>0){
        let guessText = Number(document.getElementById("txtGuess").value);  
   
        while(guessText!==guessNumber){
            // console.log("yes");
            resalt.innerHTML = "TRY Again!";
            countNum = countNum - 1;
            countc.innerHTML = countNum;
            console.log()
            break;
        }
        if(guessText==guessNumber){
            resalt.innerHTML = "Congragulation Your WIN";
            countNum = 0;
        }
        if(countNum == 0){
            resalt.innerHTML = "Game Over! <br> The Correct Number was " + guessNumber;
             
        }
       
    }

}

