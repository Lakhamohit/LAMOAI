const input = document.getElementById("user-input");

const questionBox = document.getElementById("question-box");

const answerBox = document.getElementById("answer-box");




function addQuestion(text){


let div=document.createElement("div");


div.className="user-message";


div.innerText=text;


questionBox.appendChild(div);


}





function addAnswer(text){


let div=document.createElement("div");


div.className="ai-message";


div.innerText=text;


answerBox.appendChild(div);


}




function sendMessage(){


let question=input.value.trim();


if(!question) return;



addQuestion(question);


input.value="";



// Temporary brain

think(question)
.then(answer=>{


addAnswer(answer);


});



}
