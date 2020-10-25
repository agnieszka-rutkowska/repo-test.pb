//3.Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98] ; 0

let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
let sum = 0;

for(let i = 0; i<tab.length; i++){
    if(tab[i] % 2 === 0){
        sum = tab[i] + sum; 
    }
}
console.log("suma liczb parzystych "+ sum);
 


//4.Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

let tab4 = [1,6,23,8,4,98,3,7,3,98,4,98];
let min = 0;
let max = 0;

for( i = 0; i<tab4.length; i++){
    if(tab4[i]>max){
        max =tab4[i];
    }
    if(i ===  0 || tab4[i]<min){
        min = tab4[i];
    }
}
console.log("min: "+ min);
console.log("max: " + max);

//5.Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].

let tab5 = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend"];
// let longest = 0;
// let word;

// for( i = 0; i<tab5.length; i++){
    
//     if(tab5[i].length>longest){
//         longest = tab5[i].length;
//         word = tab5[i]
//     }
// }
//  console.log("longest: " + word);

let longestWord = "";
for(i=0; i<tab5.length; i++){
    if(tab5[i].length > longestWord.length){
        longestWord = tab5[i];
    }
}
console.log('longest world: ', longestWord);

//6.Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]

let tab6 = [1,6,23,8,4,98,3,7,3,98,4,98];
let hightIndex = 0;

for( i = 0; i<tab6.length; i++){
    if(tab6[i]>tab6[hightIndex]){
        hightIndex = i;

    }
}
console.log("Highest index", hightIndex);

//7. Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

let tab7 = [1,6,23,8,4,98,3,7,3,98,4,98];
let avg = 0;
let sum7 = 0;

for( i = 0; i<tab7.length; i++){
    sum7 = tab7[i] + sum7;
}
    console.log("Średnia: "+sum7/tab7.length);


//8. Calculate average value of items at even indexes.
// Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

let tab8 = [1,6,23,8,4,98,3,7,3,98,4,98];
let index = 0;
let sum8 = 0;

for( i = 1; i<tab8.length; i++){
 if( i % 2 === 0){
    sum8= tab8[i]+sum8;
    ++index;
 }

}
console.log("średnia parzystych indeksów", sum8/index);

 //9. With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

let tab9 = [1,6,23,8,4,98,3,7,3,98,4,98];
let result = 0;

for( i = 0; i<tab9.length; i++){
    if( tab9[i] % 2 === 0){
        result= result + tab9[i];  
    }  
    else{
        result = result - tab9[i];

    }
    //console.log("i: "+i + " = result : "+result)
}    
console.log(result)
