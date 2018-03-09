    
//I need questions!!!
var questions =[{
    question: "Who is the 7th god of destruction?",
    answers: {
        a: 'Beerus',
        b: 'Champa',
        c: 'Zen Oh Sama',
    },
    correctAnswer: 'a'
},
{
    question: "What is Frieza's new form?",
    answers: {
        a: 'Ultimate Frieza',
        b: 'Perfected Frieza',
        c: 'Golden Frieza',
    },
    correctAnswer:'c'
},
{
    question: "What is Gohan's daughter's name?",
    answers: {
        a: 'Bulva',
        b: 'Pan',
        c: 'Vee',
    },
    correctAnswer:'b'
},
{
    question: "Which of these is the God of Destruction of Universe 6?",
    answers: {
        a: 'Champa',
        b: 'Vados',
        c: 'Hit',
    },
    correctAnswer: 'a'
},
{
    question: "Why is Jiren so butthurt and obessed with power?",
    answers: {
        a: 'He wants to rule the Universe',
        b: 'Jiren is just one of those guys',
        c: 'He has trust issues after his father was killed in front of him',
    },
    correctAnswer: 'c'
},
{
    question: "How did Goku and Vegeta achieve Super Saiyan Blue?",
    answers: {
        a: 'Same way they always do, they got really mad and magically got stronger',
        b: 'Goku became Super Saiyan God and just figured out a new transformation, then taught Vegeta',
        c: 'Goku and Vegeta trained with Whis, absored God Ki, then figured out a way to harness it',
    },
    correctAnswer:'c'
}
];
console.log(questions)

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(questions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions (questions, quizContainer){
        // this piece of code will give me a place to store the output and the answer choices
        var output = [];
        var answers;
    
        //for each question reset the list of answers
        for(var i=0; i<questions.length; i++){
            answers = [];
    
            //for each available answer to this question add an html radio button
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        +questions[i].answers[letter]
                    +'</label>'
                );
            }
            
            // Then add the next question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answer">' + answers.join('') + '</div>'
            );
        }
    
        //Now all i need to is combine my output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join("");
    }
    
    //Run the showQuestions function by using..
    showQuestions(questions, quizContainer);
    
    
    // Once the user clicks submit, I need to be able to display the results
    function showResults(questions, quizContainer, resultsContainer){
    
        //collect all answers from quiz
        var answerContainers = quizContainer.getElementsByClassName('answer');
        console.log("answerContainers");
        console.log(answerContainers);
        //store all answers
        var userAnswer = '';
        var numCorrect = 0;
    
        // for each question, find the selected answer
        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    
            //if answer is Correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
    
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if the answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
        
        // show the number of correct answer out of the total possible points
    resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;
    }
    
    // once submit is clicked, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
    
}

