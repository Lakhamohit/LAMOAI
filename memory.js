let memory = {};



function memoryModule(question){


    question = question.toLowerCase();



    if(question.startsWith("remember")){


        let data =
        question.replace("remember","").trim();



        memory.info = data;


        return "I will remember: " + data;


    }



    if(
        question.includes("what do you remember")
    ){


        if(memory.info){

            return "I remember: " + memory.info;

        }


        else{

            return "I don't remember anything yet.";

        }


    }



    return null;


}
