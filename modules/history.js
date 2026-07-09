let conversationHistory = [];


function saveHistory(role, message){

    conversationHistory.push({

        role: role,
        message: message,
        time: new Date()

    });

}



function getHistory(){

    return conversationHistory;

}



function getLastMessage(){

    if(conversationHistory.length === 0){

        return null;

    }


    return conversationHistory[
        conversationHistory.length - 1
    ];

}



console.log("History module ready");
