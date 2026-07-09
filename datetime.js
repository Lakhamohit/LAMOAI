function datetime(question){

    question = question.toLowerCase();



    if(question.includes("time")){

        let now = new Date();

        return "Current time is " 
        + now.toLocaleTimeString();

    }



    if(
        question.includes("date") ||
        question.includes("today")
    ){

        let today = new Date();

        return "Today is "
        + today.toDateString();

    }



    return null;

}
