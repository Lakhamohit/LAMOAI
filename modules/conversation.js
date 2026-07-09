function conversation(question){

    question = question.toLowerCase();


    if(
        question.includes("hi") ||
        question.includes("hello") ||
        question.includes("hey")
    ){

        return "Hello! I am AI Core. How can I help you?";

    }


    if(question.includes("who are you")){

        return "I am AI Core, a modular artificial intelligence system.";

    }


    return null;

}

console.log("Conversation function ready");
