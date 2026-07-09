function facts(question){


    question = question.toLowerCase();



    if(
        question.includes("capital of india")
    ){

        return "The capital of India is New Delhi.";

    }



    if(
        question.includes("largest planet")
    ){

        return "Jupiter is the largest planet in our solar system.";

    }



    if(
        question.includes("speed of light")
    ){

        return "The speed of light is approximately 299,792 kilometers per second.";

    }



    return null;


}
