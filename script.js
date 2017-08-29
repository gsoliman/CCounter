var theWord;
var count= 0000;



function restart()
{ 
var que= confirm("Are you sure you want to RESET the counter?"); 
if (que==true)
	count=0;
else 
	count=count;
document.getElementById("output").innerHTML = "0"+ count;
}

var ft= " ";
var count =0;
var adder=0;


var two_line = /\n\n/g;
var one_line = /\n/g;

function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}



function begin(){
theWord= prompt("Enter the word you would like to know the number of times you have said.").toString().toLowerCase();
document.getElementById("infoBox").innerHTML = "Voice Counting automatically counts # of times "+theWord+" is Said or Sung, alone or in sentences";
document.getElementById("status").style.backgroundColor = "rgb(0,213,75)";
document.getElementById("butText").innerHTML = "Begin speaking or singing. Click above to RESET";

if (('webkitSpeechRecognition' in window)) {
 var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.start();
}
else
{document.getElementById("status").style.backgroundColor = "yellow";
 document.getElementById("butText").innerHTML = "Voice Recognition is not available for this device. Use the manual Buttons Below";
 document.getElementById("infoBox").innerHTML = "Voice Recognition currently only on CHROME for Non-Mobile Device. Use the manual buttons below to count";


}

}




if (('webkitSpeechRecognition' in window)) {
 var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.start();
}


 recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
return;    }
    if (event.error == 'audio-capture') {
           document.getElementById("status").style.backgroundColor = "red"
           document.getElementById("butText").innerHTML = "Enable MicroPhone Access Then Click Here";

    }
    if (event.error == 'not-allowed') {
                 document.getElementById("status").style.backgroundColor = "red";
           document.getElementById("butText").innerHTML = "Enable MicroPhone Access Then Click Here";
    }
  };




recognition.onend = function() {
recognition.start();}






recognition.onresult = function(event) {
 var it = '';
for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
adder=0;
 ft += event.results[i][0].transcript.toLowerCase();




} else {
it += event.results[i][0].transcript.toLowerCase();



var itindexer= linebreak(it); 
var n2=itindexer.indexOf(theWord);
var counterOfindex= 0;
while (n2 !== -1){
counterOfindex++;
n2= itindexer.indexOf(theWord, n2 + 1);
if (counterOfindex > adder){var oldadder= adder;
adder= counterOfindex;
count= count+(adder-oldadder);
document.getElementById("output").innerHTML = "0"+ count;
}
}
      }}
 

}




