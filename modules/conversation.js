function conversation(question){

    question = question.toLowerCase();


    if(
        question.includes("hello") ||
        question.includes("hi") ||
        question.includes("hey")
    ){

        return "Hello! I am AI Core. How can I help you?";

    }



    if(
        question.includes("who are you") ||
        question.includes("what are you")
    ){

        return "I am AI Core, a modular artificial intelligence system.";

    }



    if(
        question.includes("thank")
    ){

        return "You're welcome.";

    }


    return null;

}
