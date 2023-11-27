let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");

let d = Math.random();
console.log(d);

let obj={
    "+":"-",
    "*":"+",
    "/":"*"



}

// eval is inbuilt function that give us calculation

if(d>0.1){
    // perform correct calculation
    alert(`result is ${eval(`${a} ${c} ${b}`)}`);


}
else{
    //perform wrong calculation
    c=obj[c];
    alert(`result is ${eval(`${a} ${c} ${b}`)}`);

}
