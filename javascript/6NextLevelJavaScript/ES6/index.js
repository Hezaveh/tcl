
//////////// Template Literals ////////////
let word1 = 'Dylan';
let word2 = 'Israel';
let num1 = 2;
let num2 = 3;

// const fullName = `${num1 + num2} ${word2}`;
let example = `${word1} 
${word2}
`;

// console.log(fullName);
console.log(example)
//document.getElementById('example').innerText = example;

//////////// Destructuring Objects ////////////
const player = {
    playerName: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
  };
  
// console.log( player.address.city );
  
const { playerName, club, address: { city } } = player;
  
// console.log(`${playerName} plays for ${club}`);
  
console.log(`${playerName} lives in ${city}`);

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const { name, age, projects: { diceGame } } = student;

console.log(name);
console.log(age);

console.log(diceGame);

//////////// Destructuring Array ////////////
let names = ['Dylan', 'Coding God', 'Israel'];

let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

lastName = 'Clements';

console.log(middleName)

console.log(lastName)

//////////// Object Literal ////////////
function addressMaker(city, state) {
  //const newAdress = {newCity: city, newState: state};
  const newAdress = {city, state};

  console.log(newAdress);
}

addressMaker('Austin', 'Texas');

function addressMakerPractice(address) {
  const {city, state} = address
  const newAddress = {
      city,
      state,
      country: 'United States'
  };
  console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMakerPractice({city: 'Austin', state: 'Texas'});

//////////// for of loop //////////// 
let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    console.log(income);
    total += income;
}
// console.log(total);

let fullName = "Dylan Coding God Israel";

for (const char of fullName) {
    console.log(char);
}

const students = [ 
  { studentName: "John", studentCity: "New York" },
  { studentName: "Peter", studentCity: "Paris"},
  { studentName: "Kate", studentCity: "Sidney" }
]

for( const student of students ) {
  console.log( student.studentName + " lives in " + student.studentCity);
}

//////////// Spread operator //////////// 
let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = [ "David", ...contacts, "Lily" ];

contacts.push("John");

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);

const shoppingList = ["eggs", "milk", "butter"];
let shoppingBasket = ["bread", ...shoppingList, "Lemon"];

console.log(shoppingBasket);

//////////// Rest operator //////////// 
function add(...nums) {
    
  console.log(nums);
}

add(4, 5, 7, 8, 12)

//////////// Arrow function //////////// 
//function declaration
function breakfastMenu() {
  return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
  return "I'm going to eat pizza for lunch";
}

//arrow function
/*const dinnerMenu = (food) => {
  return `I'm going to eat a ${food} for dinner`;
}
const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner`;
*/
const dinnerMenu = food => `I'm going to eat a ${food} for dinner`;

console.log( dinnerMenu("chicken salad") );

//////////// Defualt parameter //////////// 
const leadSinger = (artist = "someone") => {
  console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger();
leadSinger("Martin");

const foodShopping = (food = "something") => {
  console.log(`I'm going to buy ${food} from the grocery shop`)
}
foodShopping()
foodShopping("milk")

//////////// includes() -> return true or false//////////// 
let numArray = [1,2,3,4,5];

console.log(numArray.indexOf(1))
console.log(numArray.includes(1))

const listIngredients =  [ "chocolate", "flour", "sugar", "eggs", "butter" ];

if(listIngredients.includes("chocolate")){
  console.log("We are going to make a chocolate cake")
}else{
  console.log("We can't make a chocolate cake because we are missing the ingredient chocolate")
}

//////////// let & const ////////////
const exampleArray = [];
exampleArray.push(5)
console.log(exampleArray)

const exampleObject = {};
exampleObject.firstName = 'Dylan';
console.log(exampleObject)

//////////// import & export ////////////
//import { data } from './example.js';
const data = require('./example.js');

console.log(data);

let updatedData = data;

updatedData.push(5)
console.log(updatedData);

//import { add } from './data.js';
const addImport = require('./data.js')

let result = addImport(3, 2);

console.log(result);

//////////// padStart() & padEnd() ////////////
let examplePad = 'Dylan';

console.log(examplePad.padStart(10, 'a'));
console.log(examplePad.padEnd(10, 'a'));

let exampleNum = 'YouTube.com/CodingTutorials360';

console.log(exampleNum.padStart(100).length);
console.log(exampleNum.padEnd(1));

//////////// classes ////////////
const Animal = require('./animal.js')
let cat = new Animal("cat", 4)

console.log(cat.type)

cat.legs = 3

console.log(cat.legs)

cat.makeNoise()
cat.makeNoise("Meow")

console.log(cat.metaData)

console.log(Animal.return10());

//Inheritance
const Cat = require('./animal.js')
let catInheritance = new Cat("cat", 4)

catInheritance.makeNoise()
console.log(catInheritance.metaData)

//////////// Trailing Commas ////////////
function add(param1,){
  const example = {
      name: 'Dylan',
  }; 
  console.log(param1)
};

add(2);

//////////// Promises ////////////
// * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
const buyFlightTicket = () => {
  return new Promise( (resolve, reject) => {
      setTimeout( () => {
          const error = true;
          
          if( error ) {
              reject("Sorry your payment was not successful")
          } else {
              resolve("Thank you, your payment was successful");
          }
      }, 3000)
  })
}

buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );

const userData = new Promise((resolve, reject) => {
  const error = false;
  
  if(error) {
      reject('500 Level Error');
  } else {
      resolve({
          firstName: 'Dylan',
          age: 32,
          email: 'DylansEmail310@gmail.com'
      });
  }
});

userData
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//////////// fetch ////////////
/* RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
const fetch = require("./node-fetch");

/*fetch('https://jsonplaceholder.typicode.com/comments/1')
 .then(response => response.json())
 .then(data => console.log(data))
*/

fetch('https://jsonplaceholder.typicode.com/comments', {
  method: "POST",
  body: JSON.stringify({
      postId: 1,
      name: 'Dylan',
      email: 'dylansemail310@gmail.com',
      body: 'That was dope!'
  })
})
.then(response => response.json())
.then(data => console.log(data))

//////////// async & await ////////////
const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })
    
    let result = await uploadStatus;
    
    console.log(result);
    console.log(photos.length);
}

photoUpload();

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  
  console.log(data);
  console.log(data.value);

}
getJoke();

//////////// sets ////////////
const exampleSet = new Set([1,1,1,1,2,2,2,2]);

exampleSet.add(5);
exampleSet.add(5).add(17);

console.log(exampleSet.size);

console.log(exampleSet.has(5));

console.log(exampleSet.delete(5));

exampleSet.clear();

console.log(exampleSet.size);