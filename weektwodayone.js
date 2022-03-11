// Prob 2
function d6() {
    var roll = Math.random()*6+1;
    return Math.floor(roll);
}
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// Prob 3
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function answer(){
    var result = lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)]
    return result
}
 console.log(answer())
