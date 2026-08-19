// function sum(a,b){
//     return a+b;
// }
// function sumofsum(){
//     console.log(sum(40,30)+sum(10,400));

// }
// sumofsum();

// function info(Roll,name,college,branch){
//     return "Roll" + Roll + "name" + name + "college" + college + "branch" + branch;
// }
// myinfo(){
//     const myData = info("123" , " akshay" , "ABES","CSE")
// }
// console.log(myinfo());
//........





// function generateNumber(){
//     return Math.floor(Math.random()*1000);

// }
// const randomNumber =  generateNumber();
// function findEvenNumber(){

// }
// console.log(randomNumber)




// const sum = (a,b)=>{
//     return a+b;
// }
// const result = sum(20,50);




//IIFE
//(()=>(console.log("Hey....using IIFE")))();


//Callback function
// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk,msg){
//     const result=clbk(20,40);
//     return msg+result;
// }
// const callback = sumWithMsg(sum,"Hii...Sum=");
// console.log(callback);




// function login(msg,error){
//     if(error){
//         console.log(error)

//     }else{
//         console.log(msg);
//     }
// }


// function loginHandler(username,password,clbk){
//     const myUsername = "akshay0512";
//     const myPassword = "123456";
//     if(username==myUsername && password==myPassword){
//         clbk("success",null);
//     }else{
//         clbk(null,"Username or password is incorrect")
//     }
// }
// loginHandler("akshay0512","123456",login)




//callback hell
//setTimeout(()=>(console.log("Hello")),1000)

// setTimeout(() => {
//     console.log("one");

//     setTimeout(() => {
//         console.log("two");

//         setTimeout(() => {
//             console.log("three");

//             setTimeout(() => {
//                 console.log("four");

//                 setTimeout(() => {
//                     console.log("five");

//                     setTimeout(() => {
//                         console.log("six");

//                         setTimeout(() => {
//                             console.log("seven");

//                             setTimeout(() => {
//                                 console.log("eight");
//                             }, 1000);

//                         }, 1000);

//                     }, 1000);

//                 }, 1000);

//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);




console.log("one")
setTimeout(()=>console.log("Two"),1000);
console.log("Three")