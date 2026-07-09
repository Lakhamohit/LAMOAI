async function think(question){



    let answer;



    answer = conversation(question);

    if(answer){
        return answer;
    }




    answer = datetime(question);

    if(answer){
        return answer;
    }





    answer = calculator(question);

    if(answer){
        return answer;
    }





    return (
        "I received your question: "
        + question
        +
        "\n\nNew knowledge modules are being developed."
    );

}
