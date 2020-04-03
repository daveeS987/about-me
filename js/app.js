'use strict';

var correctAnswer = 0;
function userNameQuestion() {
  var userName = prompt('What is your name');
  // console.log(userName + 'this is the answer for userName prompt');
  return userName;
}
var userName = userNameQuestion();
console.log('This is name ' + userName);

// Q1-Do I like to read question
function read() {
  var read = prompt(userName + ', do I like to read?').toLowerCase();
  // console.log(read + 'this is answer for read prompt');
  if (read === 'yes') {
    alert('Correct, ' + userName + '! I like to read.');
    correctAnswer++;
  } else if (read === 'no') {
    alert('Wrong, ' + userName + '. I do like to read.');
  } else {
    prompt('One more time ' + userName + '! Do I like to read?');
  }
}
read();

// // Q2-Netflex Question
function netflix() {
  var netflix = prompt(userName + ', do I watch Netflix?').toLowerCase();
  // console.log(netflix + 'this is answer for netflix prompt');
  if (netflix === 'yes') {
    alert('Yup, ' + userName + ' . I love me some Netflix!');
    correctAnswer++;
  } else if (netflix === 'no') {
    alert('Wrong, ' + userName + '! I enjoy watching Netflix.');
  } else {
    prompt('One more time ' + userName + '! Do I watch Netflix?');
  }
}
netflix();

// //Q-3Podcast Question
function podcasts() {
  var podcasts = prompt(userName + ', do I listen to podcasts?').toLowerCase();
  // console.log(podcasts + 'this is the answer for podcasts prompt');
  if (podcasts === 'yes') {
    alert('Correct ' + userName + '! I like to listen to true crime podcasts.');
    correctAnswer++;
  } else if (podcasts === 'no') {
    alert('Wrong, ' + userName + '. I listen to a lot of podcasts.');
  } else {
    prompt('One more time ' + userName + '! Do I listen to podcasts?');
  }
}
podcasts();

// //Q-4Ferry Question
function ferry() {
  var ferry = prompt(userName + ', do I like to ride ferries?').toLowerCase();
  // console.log(ferry + 'this is the answer for the ferry prompt');
  if (ferry === 'yes') {
    alert('Yup, ' + userName + '! A ferry ride is always fun.');
    correctAnswer++;
  } else if (ferry === 'no') {
    alert('Wrong, ' + userName + '. I very much like to ride ferries.');
  } else {
    prompt('One more time ' + userName + '! Do I like to ride ferries?');
  }
}
ferry();

// //Q-5Kalaloch Question
// var kalaloch = prompt(userName + ', do I like to visit Kalaloch?').toLowerCase();
// // console.log(kalaloch + 'this is the answer to kalaloch question');
// if(kalaloch === 'yes'){
//   alert('You guessed it, ' + userName + ' I love to visit Kalaloch.');
//   correctAnswer ++;
// } else if( kalaloch === 'no'){
//   alert('Wrong, ' + userName + '.  I actually really like Kalaloch');
// }else {
//   prompt('One more time ' + userName + '! Do I like to visit Kalaloch?');
// }

// //Q-6 Numeric Question

// var age = prompt(userName + ', how old am I?');
// for (var i = 0; i<5; i++ ){
//   if(age < 30){
//     age = prompt(userName + ' a little too low. Guess again!');
//   } else if (age > 30){
//     age = prompt(userName + ' a little too high. Guess again!');
//   } else if (age === '30'){
//     alert(userName + ', yup! Good guess!');
//     correctAnswer ++; //this line after all correct questions is like a coin in a bucket
//     break;
//   } else {
//     alert(userName + ', you\'re out guesses! Now you\'ll never know!');
//   }
// }

// var faveColor = 0;
// var faveColorArray = ['orange', 'pink'];
// console.log(faveColorArray);
// while (faveColor < 6){
//   var faveColorPrompt = prompt(userName + ', what is my favorite color?');
//   for(var j = 0; j < faveColorArray.length; j++ ){ //use j because i has already been used
//     if(faveColorPrompt === faveColorArray[j]){
//       alert('correct ' + userName);
//       faveColor = 6;
//       correctAnswer ++;
//       break;
//     }else{
//       prompt(userName + ' nope not it. Guess again!');
//     }
//   }
//   faveColor ++;
// }

// alert(userName + 'Hey! You got it this many questions right about me: ' + correctAnswer + 'out of 7');


