function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the Capital of India?", ["New Delhi", "Mumbai","Jaipur", "Kolkata"], "New Delhi"),

    new Question("Where is Sir Aurbindo Ashram?", ["Puducherry", "Delhi","Lakswadeep", "Chandigarh"], "Puducherry"),
    

    new Question("Sarees With Vibrant Colors, from West Bengal?", ["Chanderi", "Tant","Kasta", "Sambalpuri"], "Tant"),
    

    new Question("Currency of China?", ["Dollar", "Rupee","Euro", "Yuan"], "Yuan"),

    new Question("who is engineer and the CEO of Google?", ["Satya Nadella", "Sundar Pichai","Pranav Mistry", "Harry"], "Sundar Pichai"),
    new Question("Whwre is Rock Garden?", ["Delhi", "Ladakh","Puducherry", "Chandigarh"], "Chandigarh"),
    new Question("What is the short form of Euro?", ["AED", "CNY","USD", "EUR"], "EUR"),
    new Question("What is the short form of Great Britian Pound?", ["USD", "CNY","GBP", "BDT"], "GBP"),
    new Question("Who introduced Rupee in India?", ["Dr. APJ Abdul Kalam", "Sher Shah Suri","Mahatma Gandhi", "Narendra Modi"], "Sher Shah Suri"),

];


var quiz = new Quiz(questions);


populate();





