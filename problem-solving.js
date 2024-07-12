/* 
Problem - 2
Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
*/

const books = [
    { title: "Habluder Janya Programming", author: "Jhankar Mahbub", year: 2016 },
    { title: "Never Stop Learning", author: "Ayman Sadiq", year: 2020 },
    { title: "Atomic Habits", author: "James Clear", year: 2018 },
];

const getBookTitles = (books) => {
    return books.map(book => book.title);
}

const titles = getBookTitles(books);

console.log("Answer of problem 2 : ", titles);

/* 
Problem - 3
Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
*/

function square(num) {
    return num * num;
}

function double(num) {
    return num * 2;
}

function addFive(num) {
    return num + 5;
}

function composeFunction(num) {
    return addFive(double(square(num)));
}

const number = 3;
const result = composeFunction(number);
console.log("Answer of problem 3 : ", result);

/* 
Problem - 4
Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
*/

const cars = [
    { make: "Toyota", model: "Camry", year: 2022 },
    { make: "Ford", model: "Mustang", year: 2018 },
    { make: "Honda", model: "Civic", year: 2020 },
];

function sortByYear(cars) {
    return cars.sort((car1, car2) => car1.year - car2.year);
}

const sortedCars = sortByYear(cars);

console.log("Answer of problem 4 : ", sortedCars);

/* 
Problem - 5
Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.
*/

function updatePersonAge(people, name, newAge) {
    const index = people.findIndex(person => person.name === name);

    if (index !== -1) {
        people[index].age = newAge;
    }

    return people;
}

const people = [
    { name: "Shifat", age: 30 },
    { name: "Forkan", age: 25 },
    { name: "Yeasin", age: 40 },
];

const updatedPeople = updatePersonAge(people, "Forkan", 35);

console.log("Answer of problem 5 : ", updatedPeople);

/* 
Problem - 6
Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function sumEvenNumbers(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        if (currentValue % 2 === 0) {
            return accumulator + currentValue;
        } else {
            return accumulator;
        }
    }, 0);
}

const evenNumberSum = sumEvenNumbers(numbers);

console.log("Answer of problem 6 : ", evenNumberSum);