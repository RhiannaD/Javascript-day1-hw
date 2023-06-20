//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]



// console.log(dog_names.toString())

function findWords(names,strings){
     
    for (let i = 0; i < strings.length;i++){
    if (names.includes(strings[i])){
        console.log(names)
        return `Matched ${names}`
    }else {
        console.log(names)
      
        
     }      
    } 
}
findWords(dog_names, dog_string)

// word.replace(word[0], word[0].toUpperCase())
//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// newArr= givenArr.map(replaceEvens)
function findWords(str, names) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (str.toLowerCase().includes(name.toLowerCase())) {
      console.log(`matched ${name}`);
    } else {
      console.log("no Match");
    }
  }
}
console.log(replaceEvens(givenArr))


function checkNum(num1,num2){
    if (num1 === 100 || num2 ===0){
        console.log("you got it")
    } else if (num1+num2===100){
        return "cool"
    }
}

console.log(checkNum(30,70))

const equalTo100= (a,b) => a === 100 || b === 100 || a+b ===100;

console.log(equalTo100(3,70))





