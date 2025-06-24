//function hello(){
  //  console.log("hello");
//}
//setTimeout(()=> console.log("hello"),5000);
//console.log("Hello from js");
//let count=0;
//let timer = setInterval(()=>{
    //count++;
  //  console.log("hello again");
//},2000);
//if(count>5){
//    clearInterval(timer);

//const { reject } = require("async");

//}
let order=new Promise((resolve,reject)=>
{
    let isOverWorking=true;
    setTimeout(()=>{
    if(isOverWorking){
        resolve("Order is ready");
    }else{
        reject("order delay");
    }

    },3000);
});
order
.then((message)=> console.log("Success: ",message))
.catch((error)=>
{
    console.log("error: ",error);
});


//console.log("hey");
//function doTask(taskname,callback){
  //  console.log(`starting ${taskname}...`);
    //setTimeout(()=>{
      //  console.log(`${taskname} completed`);
        //callback();
    //},5000);
//}
//doTask("Readding book",()=>{
  //  console.log("chapter 10");
//});