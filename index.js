/*console.log("작동함 나의 자바스크립트");
const who = "Lee dong hun";
console.log(who);

const wat = true;
console.log(wat);
*/
/*const monday = "Mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
*/
//array
/*const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

console.log(daysOfWeek);
console.log(daysOfWeek[1]);
*/
//object
/*
const myInfo = {
    name: "DongHun",
    age: "23",
    gender:"Male",
    isHandosme:"true"
};
console.log(myInfo.gender);
*/
/*function sayHello(name, chicken, age){
    //console.log('Hello', name, "치킨의 수:", chicken, "나이:", age);
    console.log(`Hello ${name} 치킨의수 : ${chicken} 나이 : ${age}`)
}
sayHello("Hun",16, 18);
*/
/*
const calculator = {
    plus : function(a, b){
        return a+b;
    },
    minus : function(a, b){
        return a - b;
    },
    div : function(a, b){
        return a / b;
    },
    mul : function(a, b){
        return a * b;
    },
    square : function(a, b){
        return a ** b;
    }
}

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const div = calculator.div(5, 5);
const mul = calculator.mul(5, 5);
const square = calculator.square(5, 5);
console.log(plus, minus, div, mul, square)
const age = prompt("몇살?");

if(age> 19 && age <= 22){
    console.log("술마실수 있는 나이 하지만 자제하도록");
} else if(age >22){
    console.log("마음껏 자유롭게")
} else{
    console.log("술마시면 불법");
}
*/
//const title = document.getElementById("title");
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#74b9ff";

console.log(title);
title.innerHTML = "Hi! Frome Js";
title.style.color = 'red';
document.title = '바꿀수있다';
console.dir(title);

function handleClick(){
    const currenrColor = title.style.color;
    if (currenrColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();