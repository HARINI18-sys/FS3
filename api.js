async function getActivity() {
    const baseURL="https://bored-api.appbrewery.com/random/";
    try{
        const response=await fetch(baseURL);
        const data=await response.json();
        console.log(data);
        console.log(`here is a fun activity: ${data.activity}`);
    }
    catch(error){
        console.log(`some error: ${error}`);
    }finally {
        console.log("Tracking completed.");
    }
    }
    getActivity();
