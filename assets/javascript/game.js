


// when the user clicks, add that number to their guess sum 
// if the sum = random number:
//     display you win
//     add one to wins
//     reset everything
// if sum > random number:
//     display you lose 
//     add one to losses
//     reset everything

var wins = 0;
var losses = 0;
var computernumber = 0;
var C1 = 0;
var C2 = 0;
var C3 = 0;
var C4 = 0;
var clickedSum = 0;
$("#score").text(clickedSum)
$("#wins-text").text("Wins: " + wins)
$("#losses-text").text("Losses: " + losses)

function reset(){
    
    computernumber = Math.floor(Math.random() * (120-19)+19); 

    console.log("computer chose:" + computernumber);
    $("#computernumber-text").text(computernumber);

    C1 = Math.floor(Math.random() * (11)+1); 
    C2 = Math.floor(Math.random() * (11)+1); 
    C3 = Math.floor(Math.random() * (11)+1); 
    C4 = Math.floor(Math.random() * (11)+1); 
    if(C1 == C2 || C1 == C3 || C1 == C4 || C3 == C2 || C2 == C4 || C3 == C4 ){
        C1 = Math.floor(Math.random() * (11)+1); 
        C2 = Math.floor(Math.random() * (11)+1); 
        C3 = Math.floor(Math.random() * (11)+1); 
        C4 = Math.floor(Math.random() * (11)+1); 
    }
    console.log(C1, C2, C3, C4);

    clickedSum = 0;
    $("#score").text(clickedSum);

}


function checkresult (){
    if(clickedSum === computernumber){
        alert("You Win!");
        wins++;
        $("#wins-text").text("Wins: " + wins)
        reset();
    }
    
    if(clickedSum > computernumber){
        alert("You Lose!");
        losses ++;
        $("#losses-text").text("Losses: " + losses)
        reset();
    }
        }
    
reset();


$("#C1-pic").on("click", function() {
    clickedSum = (clickedSum + C1);
    $("#score").text(clickedSum);
    checkresult();

})

$("#C2-pic").on("click", function() {
    clickedSum = (clickedSum + C2);
    $("#score").text(clickedSum);
})

$("#C3-pic").on("click", function() {
    clickedSum = (clickedSum + C3);
    $("#score").text(clickedSum);
})

$("#C4-pic").on("click", function() {
    clickedSum = (clickedSum + C4);
    $("#score").text(clickedSum);
    checkresult();
})













    


