// const users = ["Amit", "Ravi", "Sita", "Geeta"];

// function greetUsers(){
//    users.forEach((user)=>{
//     console.log(` Hello ${user}`)
//    })
// }

// greetUsers();

// Daily use example




// function outer(a){
//     return function middel(b){
//         return function inner(c){
//             console.log("a:",a)
//             console.log("b:" ,b)
//             console.log("c:", c)
//         }
//     }
// }

// // const step1 = outer("outerValue");
// // const step2 = step1("middleValue");
// // step2("innerValue");

// const inner= outer("outerValue")("middeleValue")

// inner("innreValue")




let count =0;



for(let i=1; i<=100; i++){
  if(i%3===0 &&  i% 5===0){
    count++
    console.log(i)
  }
  
}
console.log(count)