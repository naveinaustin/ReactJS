const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*rl.question("How do you like Node?", answer => { 
    console.log(`Your answer: ${answer}`);
});*/

const questions = [
    "what is your name? ",
    "where do you live? "
];

const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;
    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    };
    rl.question(firstQuestion,questionAnswered);
    //done(answers);
};

collectAnswers(questions, answers => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
});