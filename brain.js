async function think(question){


    question = question.toLowerCase();



    // Greeting detection

    if(
        question.includes("hello") ||
        question.includes("hi") ||
        question.includes("hey")
    ){

        return "Hello! I am AI Core. How can I help you?";

    }



    // Time detection

    if(
        question.includes("time")
    ){

        let now = new Date();

        return "Current time is " + now.toLocaleTimeString();

    }




    // Date detection

    if(
        question.includes("date") ||
        question.includes("today")
    ){

        let today = new Date();

        return "Today is " + today.toDateString();

    }





    // Math detection

    if(
        question.includes("+") ||
        question.includes("-") ||
        question.includes("*") ||
        question.includes("/")
    ){

        try{

            let result = eval(question);

            return "Calculation result: " + result;

        }

        catch{

            return "I could not calculate that.";

        }

    }





    // Default response

    return (
        "I received your question: "
        + question
        +
        "\n\nKnowledge modules are being developed."
    );


}
