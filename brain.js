async function think(question){


    console.log("Brain started:", question);



    let intent = detectIntent(question);


    console.log("Detected intent:", intent);



    switch(intent){


        case "greeting":

            return conversation(question);



        case "datetime":

            return datetime(question);



        case "calculation":

            return calculator(question);



        case "memory":

            return memoryModule(question);



        case "knowledge":


            let answer = facts(question);

            if(answer){
                return answer;
            }


            answer = await wiki(question);

            if(answer){
                return answer;
            }


            break;



        default:

            return "I am still learning how to answer that.";

    }



    return "I could not find an answer.";

}
