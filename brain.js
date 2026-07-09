async function think(question){



let answer;



answer = conversation(question);

if(answer){
return answer;
}



answer = memoryModule(question);

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




answer = facts(question);

if(answer){
return answer;
}




answer = await wiki(question);

if(answer){
return answer;
}




return "Brain is working correctly.";

}
