function detectIntent(question){

    question = question.toLowerCase();


    if(
        question.includes("hi") ||
        question.includes("hello") ||
        question.includes("hey")
    ){

        return "greeting";

    }


    if(
        question.includes("time") ||
        question.includes("date") ||
        question.includes("today")
    ){

        return "datetime";

    }


    if(
        question.match(/[0-9]/) &&
        (
            question.includes("+") ||
            question.includes("-") ||
            question.includes("*") ||
            question.includes("/")
        )
    ){

        return "calculation";

    }


    if(
        question.includes("remember") ||
        question.includes("memory")
    ){

        return "memory";

    }


    if(
        question.includes("who") ||
        question.includes("what") ||
        question.includes("where")
    ){

        return "knowledge";

    }


    return "unknown";

}


console.log("Intent module ready");
