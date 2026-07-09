async function think(question){

    console.log("Brain started:", question);


    let answer;


    try {


        console.log("Checking conversation");

        answer = conversation(question);

        if(answer){
            return answer;
        }



        console.log("Checking datetime");

        answer = datetime(question);

        if(answer){
            return answer;
        }



        console.log("Checking calculator");

        answer = calculator(question);

        if(answer){
            return answer;
        }



        console.log("Checking facts");

        answer = facts(question);

        if(answer){
            return answer;
        }



        console.log("Checking memory");

        answer = memoryModule(question);

        if(answer){
            return answer;
        }



        console.log("Checking wiki");

        answer = await wiki(question);

        if(answer){
            return answer;
        }



        return "No answer found.";


    }

    catch(error){

        console.log("BRAIN ERROR:", error);

        return "Brain error detected.";

    }

}
