const input = document.getElementById("user-input");

const questionBox = document.getElementById("question-box");

const answerBox = document.getElementById("answer-box");



function addQuestion(text){

    let div = document.createElement("div");

    div.className = "user-message";

    div.innerText = text;

    questionBox.appendChild(div);

    questionBox.scrollTop = questionBox.scrollHeight;

}



function addAnswer(text){

    let div = document.createElement("div");

    div.className = "ai-message";

    div.innerText = text;

    answerBox.appendChild(div);

    answerBox.scrollTop = answerBox.scrollHeight;

}




async function sendMessage(){

    let question = input.value.trim();


    if(question === ""){
        return;
    }



    addQuestion(question);


    input.value = "";



    addAnswer("Analyzing...");



    let answer = await think(question);



    let messages = document.querySelectorAll(".ai-message");

    messages[messages.length - 1].remove();



    addAnswer(answer);


}



input.addEventListener(
"keypress",
function(event){


    if(event.key === "Enter"){

        sendMessage();

    }


});
