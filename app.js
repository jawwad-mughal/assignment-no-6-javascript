// STRING METHODS (start)

// Q1
// let firstName = prompt('Enter your first name');
// let LastName = prompt('Enter your last name');
// console.log(firstName.concat(' ',LastName))

// Q2
// let favoritePhone = prompt('Enter mobile model name');
// let inputLength = favoritePhone ? favoritePhone.length: 0;
// console.log('My favorite phone is:',favoritePhone,'length of string:',inputLength);

// Q3
// let country = prompt('enter country name');
// console.log(country);
// let letter = prompt('You entered "country". Enter a letter to find its index:');
// let countryIndex = country.indexOf(letter);
// console.log(countryIndex);

// Q4
// let input = prompt("message");
// console.log(input);
// let letters = prompt('You entered "message". Enter a letter to find its index:');
// let message = input.lastIndexOf(letters);
// console.log(message);

// Q5
// let country = prompt('Enter your country name');
// console.log('String:',country);
// let indexNumber = +prompt('search words single letter of index ');
// let flag = false;
// let message;

// for(let i = 0; i < country.length; i++){
//     if(i === indexNumber){
//         let letterIndex = country.charAt(indexNumber);
//         flag =true;
//         message = `Character at index ${indexNumber}: ${letterIndex}`;
//         break;
//     }
// }

// if(!flag){
//     message='This letter does not match. Please enter correct input.'
// };
// console.log(message);

// Q6
// let input = 'Hyderabad';
// console.log(input);
// let change = input.replace('Hyder','Islam');
// console.log(change);

// Q7
// let message = 'Ali and Sami are best friends. They play cricket and football together.';
// console.log(message);
// let change = message.replaceAll('and','&');
// console.log(change);

// Q8
// let num = '472';
// let a = typeof num
// console.log(num);
// console.log(a);
// let change = Number(num);
// let b = typeof change;
// console.log(change);
// console.log(b);

// Q9
// let fruit = 'peanuts';
// console.log(fruit);
// let c = fruit.toUpperCase();
// console.log(c);

// Q10
// let userInput = 'Javascript is a programming.';
// let words = userInput.toLowerCase().split(' ');
// console.log(words);
// let titleCase='';

// for(let i = 0; i < words.length; i++){
//     titleCase +=  words[i].charAt(0).toUpperCase() + words[i].slice(1);

//     if(true){
//         titleCase += ' ';
//     };
// }
// document.writeln(titleCase);

// Q11
// let num = '35.32';
// let result = String(num).replace('.','');
// console.log(result);

// Q12
// let store = ['applepie','cake','cookie','chips','patties'];
// console.log(store);
// let itemsCheck = prompt('Enter your items');
// let flag = true;
// let message;
// for(let i = 0; i < store.length; i++){
//     if(store[i]===itemsCheck){
//         flag = true;
//         message = `${itemsCheck} is <b>avaible</b> at index ${i} in our bakery`;
//         break;
//     }
// };
// if(!flag){
//     message = `We are sorry. ${itemsCheck} is <b>not available</b> in our bakery`;
// }
// document.write(message);

// Q13
// let university = 'University of Karachi';
// for(let i = 0; i<university.length;i++){
//     document.write(university.charAt(i),'<br/>');
// };

// Q14
// let userInput = 'pakistan';  
// if (userInput) {    
//     let lastCharacter = userInput[userInput.length-1] ;  
//     console.log("The last character is: " + lastCharacter);  
// } else {  
//     console.log("You did not enter anything.");  
// } 

// STRING METHODS (end)

// MATH METHODS (start)
// Q1
// A
// let num = 3.45214;
// console.log(num);

// B
// num = Math.round(num);
// console.log(num);

// C
// num = Math.floor(num);
// console.log(num);

// D
// num = Math.ceil(3.45214);
// console.log(num);

// Q2
// A
// let num1 = -2.673;
// console.log(num1);

// B
// num1 = Math.round(num1)
// console.log(num1);

// C
// num1 = Math.floor(num1);
// console.log(num1);

// D
// num1 = Math.ceil(-2.673);
// console.log(num1);

// Q3
// let input = parseFloat(-2.35);
// let absoluteValue = Math.abs(input);
// console.log(input , absoluteValue);

// Q4
// let diceValue = Math.floor(Math.random() * 6) + 1;  
// console.log(diceValue); 

// Q5
// let randomValue = Math.random();  
// let result =  randomValue < 0.5 ? "Heads" : "Tails";
// console.log(result);

// Q6
// let a = Math.floor(Math.random() * 100) + 1;
// console.log(a);

// Q7
// const userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
// let a = userInput.replace(/kgs|kilograms/, '');
// let message = `The weight of user is ${a} kgs`
// console.log(message);

// Q8
    // const secretNumber = Math.floor(Math.random() * 10) + 1;   
    // const userInput = prompt("Please enter a number between 1 and 10:");  
    // const userGuess = parseInt(userInput);  
    // if (userGuess >= 1 && userGuess <= 10) {    
    // if (userGuess === secretNumber) {  
    // console.log("Congratulations! You guessed the correct number!");  
    // } else {  
    //         console.log(`Sorry, the secret number was ${secretNumber}. Try again!`);  
    //         }  
    // } else {  
    //     console.log("Invalid input. Please enter a number between 1 and 10.");  
    //         }  

// MATH METHODS (end)

// DATE METHODS (start)
// Q1
// let currentTime = new Date();
// console.log(currentTime);

// Q2
// const months = [  
//     "January", "February", "March", "April", "May", "June",  
//     "July", "August", "September", "October", "November", "December"  
// ];
// let monthIndex = new Date().getMonth();
// let currentMonth = months[monthIndex];
// console.log(currentMonth);

// Q3
// let days = ['Mon','tue','Wed','Thus','fri','sat','sun'];
// let daysIndex = new Date().getDay();
// let currentDay = days[daysIndex - 1];
// console.log(currentDay);

// Q4
// let inputDay = prompt('Enter your days');
// let message ; 
// if(inputDay === 'saturday' || inputDay === 'sunday'){
//     message = `${inputDay}: It's Fun day`;
// }else{ 
//     message = `${inputDay}: It's a normal day`;
// }
// console.log(message);

// Q5
const today = new Date();  
const day = today.getDate();  
if (day < 16) {  
    console.log("First fifteen days of the month");  
} else {  
    console.log("Last days of the month");  
} 
// DATE METHODS (end)