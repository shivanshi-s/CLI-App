const chalk = require('chalk');
var readlineSync = require("readline-sync");


var score = 0 ;

var userName = readlineSync.question("May I know your name? : ");
console.log(chalk.underline.yellow("Welcome "+userName+"!\n"));

console.log(chalk.yellowBright.bgMagenta.bold("----------------------THIS IS 'THE OFFICE' TRIVIA QUIZ!!!!---------------------\n"));
console.log(chalk.italic.bold("Instructions : ")+chalk.italic("The game consists of 3 questions in level One\n")+ chalk.italic("5 questions in level Two\n")+chalk.italic("And a bonus question that can only be accessed after acing the two levels!\n\n")+chalk.italic.underline("  ::: GOOD LUCK! ::: \n"));

//question bank 
var levelOne = [
    { question : "What is Andy's name for Jim ? \na) Jimmy\nb) James\nc) Tuna\nd) Dawg\n",
       answer : "c",
    },
    {
      question : "Who was Pam dating before Jim ? \na)Michael\nb)Roy\nc)Ryan\nd)Meredith\n",
      answer : "b",
    },
    {
      question : "Who sits infront of Stanley? \na)Andy\nb)Angela\nc)Dwight\nd)Phyllis\n",
      answer : "d",
    }];

var levelTwo = [
  {
    question :"What's Phyllis's maiden name?\n" ,
    answer : "lapin",
  },
  {
    question : "When Michael resigns from Dunder Mifflin to start his own paper company, what does he call it?\n",
    answer : "The Michael Scott Paper Company",
  },
  {
    question : "What's Pam's favorite flavor of yogurt?\n",
    answer : "Mixed Berry",
  },
  {
    question : "What's the name of Dwight's porcupine who he used to make it look like Jim was pranking him?\n",
    answer : "henrietta",
  },
  {
    question : "(Andy's Play) What musical is Andy starring in?\n",
    answer : "sweeney todd",
  }];

var bonus = [
  {
    question : "Who is TexasPoonTappa?\n",
    answer : "nelly",
  }
];

//function to check the answer 
function quiz(question,answer) {
  var userAnswer = readlineSync.question(chalk.bgGray(question));
    
  if (userAnswer.toUpperCase() === answer.toUpperCase() ) {
    console.log(chalk.green (":: CORRECT! :: ") );
    score++;
  }else {
    console.log(chalk.redBright(" :: WRONG ANSWER ! ::  "));
    console.log(chalk.bold("The correct answer is : ",answer));
  }
  //console.log("your score is  : ", score);
}

//console.log(questionBank.length);
//loop to OUTPUT these questions 

for ( var i = 0; i<(levelOne.length) ; i++){
  var currentQuestion = levelOne[i];
   quiz(currentQuestion.question,currentQuestion.answer);
  console.log("Your score is : " , score);
  console.log("---------------------------------------------------------\n");


  if (score>=3 ) {
    console.log(chalk.bold.yellowBright.bgCyan("---YOU MADE IT TO THE NEXT LEVEL!---\n"));
 
 for ( var j = 0 ; j<levelTwo.length ; j++){
   quiz(levelTwo[j].question,levelTwo[j].answer);
   console.log("Your score is : " , score);
   console.log("---------------------------------------------------------\n")

 }
  } //else {console.log("nect time ")}
  if (score>=8) {
    console.log(chalk.bold.yellowBright.bgMagenta("\nYOU SEEM LIKE A TRUE FAN! : BONUS QUESTION!!!\n")) ;
    for ( var k = 0 ; k<bonus.length ; k++){
      quiz(bonus[k].question,bonus[k].answer);
      console.log("score is : ", score );
    }
  } //else {console.log("next time")   }

 } 

   if (score === 9 )
   {
     console.log(chalk.italic.bold.cyan("\nYOU'RE THE OG FAN! "));
   } else if(score===7) {
     console.log(chalk.italic.bold.cyan("NOT BAD, THIS IS THE SIGN TO REWATCH THE SHOW"));
   } else {
     console.log(chalk.italic.bold.cyan("OOPS, THIS IS THE SIGN TO REWATCH THE SHOW"));
   }




console.log(chalk.bold.underline.yellow("\n+++++++ THANKS FOR PLAYING! ++++++\n\n\n\n"));

console.log("For queries, contact me on twitter : @whatshivanshi ");