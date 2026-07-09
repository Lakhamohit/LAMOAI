function calculator(question){


    if(
        question.includes("+") ||
        question.includes("-") ||
        question.includes("*") ||
        question.includes("/")
    ){


        try{


            let result = eval(question);


            return "Calculation result: "
            + result;


        }

        catch{

            return "I could not calculate that.";

        }

    }


    return null;

}
