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




function addThinking(){

    let div = document.createElement("div");

    div.className = "ai-message";

    div.id = "thinking";

    div.innerText = "Analyzing...";

    answerBox.appendChild(div);

}



function removeThinking(){

    let thinking = document.getElementById("thinking");

    if(thinking){

        thinking.remove();

    }

}




async function sendMessage(){


    let question = input.value.trim();



    if(question === ""){

        return;

    }



    // Save user's message after checking it is not empty
    saveHistory("user", question);



    addQuestion(question);



    input.value = "";



    addThinking();



    let answer = await think(question);



    removeThinking();



    addAnswer(answer);



    // Save AI response
    saveHistory("ai", answer);


}




input.addEventListener(
"keypress",
function(event){

    if(event.key === "Enter"){

        sendMessage();

    }

});
