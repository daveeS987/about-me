'use strict';

var userName = prompt('What is your name');
console.log(userName + 'this is the answer for userName prompt');


var read = prompt('Do you like to read?');
var read = read.toUpperCase();
var read = read.toLowerCase();
// console.log(read + 'this is answer for read prompt');
if(read === 'yes'){
  alert('That\'s awesome ' + userName + ' me too! Right now I\'m reading Over Story by Richard Powers.');
} else if(read === 'no'){
  alert(userName + ' now might be a good time to pick up a book! I recommend Overstory by Richard Powers.');
} else{
  alert(userName + ' ...um hello, I asked if you read books!');
}

var netflix = prompt('Do you have a favorite Netflix show?');
var netflix = netflix.toUpperCase();
var netflix = netflix.toLowerCase();
// console.log(netflix + 'this is answer for netflix prompt');
if(read === 'yes'){
  alert('Dontcha just love Netflix, ' + userName + '?! My favorite show on Netflix is Schitts Creek!' );
} else if(read === 'no'){
  alert('Did you escape Netflix?! I\'m practically impressed, ' + userName + '!! You should still watch Schitts Creek tho.');
} else{
  alert(userName + '...um hello, I asked if you had a fave Netflix show!');
}

var podcasts = prompt('Do you like podcasts?');
var podcasts = podcasts.toUpperCase();
var podcasts = podcasts.toLowerCase();
// console.log(podcasts + 'this is the answer for podcasts prompt');
if(podcasts === 'yes'){
  alert('Me too, ' + userName + '! I like investigative and true crime podcasts the most!');
} else if(podcasts === 'no'){
  alert('Yeah I understand. They aren\'t for everyone, ' + userName + ' and that\'s okay! But have you tried a true crime podcast?');
} else{
  alert(userName + '...um hello, I asked if you liked podcasts!');
}

var ferry = prompt('Have you ever ridden a ferry?');
var ferry = ferry.toUpperCase();
var ferry = ferry.toLowerCase();
// console.log(ferry + 'this is the answer for the ferry prompt');
if(ferry === 'yes'){
  alert('Me too, ' + userName + '. My favorite day trips are always ones involving ferries!');
} else if (ferry === 'no'){
  alert('Incorporating a ferry boat ride into a day trip is one of my favorite things, ' + userName + '. I highly recommend!');
} else {
  alert(userName + '...um hello, I asked if you have ever ridden a ferry!');
}

var kalaloch = prompt('Have you ever heard of Kalaloch?');
var kalaloch = kalaloch.toUpperCase();
var kalaloch = kalaloch.toLowerCase();
// console.log(kalaloch + 'this is the answer to kalaloch question');
if(kalaloch === 'yes'){
  alert(userName + ' I love Kalaloch! It is one of my favorite summer camping spots!');
} else if( kalaloch === 'no'){
  alert('It is one of my favorite summer camping spots.  You should check it out, ' + userName + '!');
}else {
  alert(userName + '...um hello, I asked if you have heard of Kalaloch!');
}


