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
    if (names.toLowerCase().includes(strings.toLowerCase())){ //I've tried this so many times
        // and it keeps telling me toLowerCase isn't a function. I'm not sure why.
        console.log(names) 
        return `Matched ${names}`
    }else {
        return `no match ${names}`
      
        
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
function replaceEvens(arr){
    for (let i = 0; i < arr.length;i++){
        if (i % 2 ===0){
            arr.splice(i,1,"even index")
        }
    } return arr
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

// for(let i in students2){
//     {if i % 2 == 0
//     }
//     console.log(parseInt(i))
// }

//array.findIndex(function(currentValue, index, arr), thisValue)
// alert(hello.replaceAt(2, "!!")); // He!!o World
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// givenarr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr,i){
//   if (i % 2===0){
//     return "this is even"
//   }

    
// }
// replaceEvens(givenarr[i])


// -------------------- if, else if, else conditional statements -----------------------
// syntax: if (condition) { code block ran if true }

// const checkWeather = (temp) => {
//     if (temp < 60){
//         return 'It is cold outside. #hoodieseason'
//     } else if (temp < 90) {
//         return 'It is a beautiful day!'
//     } else {
//         return 'It is hella hot! Avoid wearing black!'
//     }
// }

// console.log(checkWeather(50))


// ------------------------- Ternary Operators -------------------------
// Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)

// const oddOrEven = (num) => (num % 2 == 0) ? 'Even' : 'Odd'

// console.log(oddOrEven(11))


// ------------------------- JS Loops --------------------------------
// ----- For Loops -----
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// loop through an array
// let students2 = ['caden', 'will', 'gabe']
// for(let i = 0; i < students2.length; i++){
//     console.log(students2[i])
le.log(name)
// }

// loop through an array with for-in loop (indices) (ES6)
// for(let i in students2){
//     {if i % 2 == 0
//     }
//     console.log(parseInt(i))
// }

// givenarr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]



