// Advanced JS Drills - Hoisting and Functions 1-4 //

//name = 'Tracy';
//var name;
//console.log(name);


// Advanced JS Drills - Hoisting and Functions 5-6 //

//name = 'Tracy';
//let name;
//console.log(name);


// Advanced JS Drills - Hoisting and Functions 7-9 //

//setName();
//function setName() {
//    var name = 'Tracy';
//    console.log(name);
//}


// Advanced JS Drills - Hoisting and Functions 10-11 //

//console.log('This is it-console 1!');
//let avg = myAverage(2,2);
//    console.log('This is it-console 2!');
//    function myAverage (a,b) {
//        console.log('This is it-console 3!');
//        var answer = (a+b)/2;
//        return answer;
//}


// Advanced JS Drills - Scoping 1-7 //

//let fruits = ['oranges', 'pears', 'grapes'];
//let myFavFruit = fruits[0];
//function firstFruit () {
//    console.log(myFavFruit);
//}

//firstFruit ();


// Advanced JS Drills - Scoping 8-10 //

//let fruits = ['oranges', 'pears', 'grapes'];
//let myFavFruit;
//function printFruits() {
//    myFavFruit = fruits[2];
//    console.log(fruits[0]);
//}

//function printFavFruit() {
//    console.log(myFavFruit);
//}

//printFruits();
//printFavFruit();


// Advanced JS Drills - Scoping 11-13 //

//let fruits = ['oranges', 'pears', 'grapes'];
//function printFruits() {
//    let myFavFruit = fruits[2];
//    console.log(fruits[0]);
//}

//function printFavFruit() {
//    console.log(myFavFruit);
//}

//printFruits();
//printFavFruit();


// Advanced JS Drills - Scoping 14-16 //

//let fruits = ['oranges', 'pears', 'grapes'];
//function printFruits() {
//    let myFavFruit = fruits[2];
//    console.log(fruits[0]);
//    printFavFruit();

//    function printFavFruit() {
//        console.log(myFavFruit);
//    }
//}
//printFruits();


// Advanced JS Drills - Scoping 17-20 //

//let fruits = ['oranges', 'pears', 'grapes'];
//let leastFav;
//function printFruits() {
//    leastFav = fruits[1];
//    console.log(fruits[0]);
//    }
//    function printLeastFav() {
//    console.log(leastFav)
//    }
//printFruits();
//printLeastFav();


// Advanced JS Drills - Scoping 21 //

//tracyFunction();
//function tracyFunction() {
//    console.log('Hello, '+'Tracy!')
//}


// Advanced JS Drills - Scoping 22 //

//let tracyFunction = function() {
//    alert('Willikers, '+'Tracy---this took awhile to pull off!');
//}

//tracyFunction()


// Advanced JS Drills - Scoping 23 //

let tracyFunction = calledFunction;
function calledFunction () {
    alert('Golly Gee Willikers, '+'Tracy---this took awhile to pull off!');
}

calledFunction()
