console.log('Here is : ', 'array')




// 1
// Correct the syntax error
//  [ 1,7,9, 45];
//  ["Str", "alex","moh"];
//  ['the','fox','over' 'lazy', 'dog']; 




// 2
// What the index of "Banana","Tomato"
// var fruits=["Tomato","Banana","Watermelon"]
// index Banana = 1 
// in


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middlleOfArray(arrayMid){
let size = arrayMid.length ;  
if (size%2==0) {
return  arrayMid [size/2-1] + '   '+ arrayMid[size/2] ; 
let arrayMid=[1,2,3,4]; 
}
 else {
return arrayMid[(size-1)/2]; 


 }


console.log(middleOfArray())


}

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var arrAnimal=['Dog', 'Cat', 'Bird'] ; 
arrAnimal[arrAnimal.length]= 'zebra' ; 
arrAnimal[arrAnimal.length]= 'Elephant'; 


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/
function indexOfArray(nums,index){
	var nums=[1,2,3,4,5,6]; 
 return indexOfArray[index];  
}
console.log(indexOfArray())

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/
function arrayExceptLast(cutArr){
// var cutArr=[1,2,4,5,7]; 
// var pos = cutArr.indexof(cutArr.length-1); 
// return cutArr.splice(pos , 1) ;
//This code is right ?
cutArr.pop();
return cutArr ; 
}

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/
function addToEnd (addArr){
var addArr=[] ;
var v1 ;  
addArr.push(v1);
return addToEnd ;  
}

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(sumArr){
let sumArr=[ ]; 
for (let i=0 ; i<=length-1; i++){
let summation+=sumArr[i];  
}
return summation ; 
}
function sumArray(sumArr){
let sumArr=[]; 
let i = 0 ;
let sum ;   
while (i<=length-1){ 

i++;

}
return sum+=sumArr[i]; 

}
console.log(sumArray(sumArr));



/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
**try more cases by your self
*/ 
function minInArray(minArr){
let minNum=minArr[0] ;  
for (let i=1; i<=minArr.length-1; i++){
if ( minArr[i]< minNum){
	minNum = minArr[i] ; 
}





}
	return "The minimum number =" + "   "+ minNum; 

}

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(rmvArr){  



}

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/