//1. //Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number

//let tab = [1,6,23,8,4,8,3,7];


//function countSum(valueArray){
//let result = 0;

//for (let i = 0; i < valueArray.length; i++) {
//result = result + valueArray[i];

//}
//return result;
//}

//console.log(countSum(tab));

//2. // Create a function that returns sum of first and last elements of given array.
//a] Zwracanie 1szej liczy z tabeli

//let val1 = [1,6,23,8,4,8,3,7];

//l1.splice(1);
//console.log("Pierwsza wartość z tabeli: "+ val1);

//let val2 = [1,6,23,8,4,8,3,7];
//let tempElement;
//tempElement = val2.pop();
//console.log("Ostatnia liczba z tabeli: " + tempElement);

//let val1 = [1,6,23,8,4,8,3,7];


//function getSum(val1){
//let sumNumber = 0;
//sumNumber = val1[0] + val1[val1.length -1];

//return sumNumber;
//}
//console.log(getSum(val1));

//3 .Create a function that takes a number and return factorial of that number.


//function getFactorial(number){
  //let fact = 1;
//for (var i = 2; i <= number; i++){
        // fact = fact * i;

//}
//return fact;
//}
//console.log(getFactorial(7));

//let n = 7;
// let summary = 1
// while( n > 0 ){
//     summary *= n--;
//     console.log(summary);
// }
// console.log(summary);

// let i=1;
// let result =1;
// while(i<=7){
//     result = result * i;
//     i++;
// }

//4. //Create a function that returns given array in reverse order. // no build in functions  
 //
// function reversArray(tab){
// tab.reverse()
//  // 
// let newArray = [];
//   for( i = tab.length-1; i >= 0; i--){
    
//  newArray.push(tab[i])  
//   }
//   return newArray;
 
// }

// console.log(reversArray([1,2,3,4,5]));

//5.//Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]   
// [1,3,4,1,0,3] => [4,5,3] function(array)=>array
// //let number = 
//       {
//           a:1,
//           b:3,
//           c:4,
//           d:1,  
//           e:0,
//           f:3
            
//        };


// console.log("[", number.a + number.b,number.c + number.d,number.e + number.f, "]")

//function getArray(tab){
//   let newArray = [];
  
//   if(tab.length % 2 == 0){
//     for(i = 0; i<tab.length; i = i+2){

//       newArray.push(tab[i] + tab[i+1])
//     }
//       return newArray;
    

//   }else{
//     return "nie obsuguje tablicy nieparzystej"
//   }
  
// }
// let exampleTab = [1,3,5,7,6,9];
// console.log(getArray(exampleTab))




//6.//For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]


//let val1 = [1,3,4,1,0,3];
//let tempElement;
//tempElement = val1.pop()
//console.log(tempElement);
//console.log(val1);

//let number =
//{
    //a:1,
    //b:3,
    //c:4,
    //d:1,
    //e:0
//};
//console.log("[", number.a + number.b,number.c + number.d,number.e + number.e, "]")
//}

//7.// Create a function the return one random element from given array. // use random function
//[1,6,23,8,4,8,3,7]

// let messages = new Array();
// messages[0]= 1;
// messages[1]= 6;
// messages[2]= 23;
// messages[3]= 8;
// messages[4]= 4;
// messages[5]= 8;
// messages[6]= 3;
// messages[7]= 7;

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
   
//   let randomIndex =  getRandomInt(0, (messages.length-1));
   
//   console.log(messages[randomIndex]);


//8.//  Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.

// const friday = new Date("11/6/2020 16:00:00").getTime();
// const now = new Date().getTime();
// oneDay = 24 * 60 * 60 * 1000; 
// const result = (friday-now)/oneDay
// console.log(Math.round(result));
// console.log(friday)

//13. Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 


// function BasicArithmeticOperation(x,y){
// let object = {}; 

// object.sum = x + y;
// object.sub = x - y;
// object.multipl = x * y;
// object.div =x / y;

// return object;
// }

// console.log(BasicArithmeticOperation(25,5))

// //9.Create a function that takes given array. Then takes a random element, 
// //removes it from the array and pushes it to result arrays. 
// //This takes place as long as there are elements in source array. 

// function ex9(tab){
//   let array = [];



// while(tab.length>0){
//   let index = getRandomInt(0, tab.length-1);
//   array.push(tab[index]);
//   tab.splice(index, 1);
// }
// return array;

// }

// function getRandomInt(min, max) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }

   
// let tab = ["Kasia","Basia","ola"];
   
//   console.log(ex9(tab));

  //10.// Create a function that on given array will perform operation of adding or subtracting elements. 
  // Operation is to be chosen at random.
  //  And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)

// function preformOperation(tab){
// let sub = 0;
// let add = 1;
// let result = tab[0];

// for(i = 1; i<tab.length; i++){

//   let random = getRandomInt(0,1);
//   console.log("random: " + random + " result: " + result + " tab: " +tab[i])
//   if( random == sub){
//   result = result - tab[i]
//   }
//   else{ 
//     result = result + tab[i];
//   }

// }
// return result;
// }
// function getRandomInt(min, max) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(preformOperation([5,6,8,3,6]))

//11. Create a function that will return the current day name in Polish. 

function returnDay() {
  let day = new Date().getDay();


  if (day == 0) {
    return "niedziela";

  } if (day == 1) {
    return "poniedziałek";

  } if (day == 2) {
    return "wtorek";

  } if (day == 3) {
    return "środa";

  } if (day == 4) {
    return "czwartek";

  } if (day == 5) {
    return "piątek";

  } if (day == 6) {
    return "sobota";

  }

}

console.log(returnDay())

















