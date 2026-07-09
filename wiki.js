async function wiki(question){


    try{


        let url =
        "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="
        +
        encodeURIComponent(question)
        +
        "&format=json&origin=*";



        let response = await fetch(url);


        let data = await response.json();



        if(!data.query.search.length){

            return null;

        }



        let title =
        data.query.search[0].title;




        let summaryURL =
        "https://en.wikipedia.org/api/rest_v1/page/summary/"
        +
        encodeURIComponent(title);



        let summaryResponse =
        await fetch(summaryURL);



        let summary =
        await summaryResponse.json();



        return summary.extract || null;


    }


    catch(error){


        console.log(error);


        return null;

    }


}
