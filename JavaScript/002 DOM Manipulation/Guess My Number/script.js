'use strict';
/*
// document.querySelector('.message'); --- Selecting a particular element of HTML file from the class name. [Class Name: "message"]
console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent; --- If we want to access the text property inside the element then type: .textContent
console.log(document.querySelector('.message').textContent);
/*
-> What is DOM?
-> DOM means Document Object Model.
-> It is structured representation of HTML documents.
-> The DOM allows us to use JavaScript to access HTML and CSS elements in order to manipulate them.
-> For example, we will be able to change text, HTML attributes and CSS styles from our JavaScript.
-> So we can say that DOM is basically a connection point between HTML document and JavaScript code.
-> Now DOM is automatically created by the browser as soon as the HTML file loads.
-> Document is a very special DOM Object. It serves as the entry point of DOM. That's why we type "document" at the start of our DOM manipulation.
*/ /*
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent = 'Correct Number!');
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 11;
console.log(document.querySelector('.guess').value);  // Alt + Down Arrow
*/
// Handling Click Events

// Building the game logic
let secretNumber = Math.trunc(Math.random() * 20) + 1;  // .trunc only generates round numbers
let score = 20;
let highScore = 0;

function displayMessage (message){
    document.querySelector(".message").textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){  // addEventListener = is a method that scans action on HTML
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    // whatever we get from the HTML file is always a String. We need to change the format according to our needs.
    // console.log(typeof guess); -> string
    // when there is no number
    if(!guess){
        // document.querySelector(".message").textContent = "No Number :(";
        displayMessage('No Number :(');
    }
    // when player wins
    else if(guess === secretNumber){
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        // manipulating CSS style
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // setting up the high score
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // when guess is wrong
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('You lost dude ;)');
            document.querySelector('.score').textContent = 0;
        }
    }

    // // when guess is too high
    // else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'You lost dude ;)';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // // when guess is too low
    // else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = 'You lost dude ;)';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').s0tyle.width = '15rem';
});
