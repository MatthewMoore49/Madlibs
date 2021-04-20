function createParagraph(){
var wordOne = getElementById('noun1').value;
var wordTwo = getElementById('placetwo').value;
var wordThree = getElementById('adjective3').value;
var wordFour = getElementById('noun4').value;
var wordFive = getElementById('noun5').value;
var wordSix = getElementById('animal6').value;
var wordSeven = getElementById('verb7').value;
var wordEight = getElementById('noun8').value;
var wordNine = getElementById('noun9').value;
var wordTen = getElementById('adjective10').value;
var wordEleven = getElementById('verb11').value;
var wordTwelve = getElementById('noun12').value;
var wordThirteen = getElementById('adjective11').value;
var wordFourteen = getElementById('noun13').value;

var paragraph = 'Where can you meet nice, normal '+ wordOne + 'to date? Sure, there are traditional places like the workplace or '+ wordTwo + ',but here are some other creative,'+ wordThree+'ways. Show off your athletic skills by joining a '+ wordFour +'club at the recreational center. Walk your four-legged '+ wordSix +'at the local '+ wordSeven +'park.'
'Attend a '+ wordTen +' class at the local community college. Squeeze the largest, juiciest '+ wordTwelve +' while exploring the '+wordThirteen+'farmers market. '+ wordEleven +' with hundreds of other crazy '+wordFourteen+' as part of a flash mob.';

document.getElementById('answer').innerHTML = paragraph;

}