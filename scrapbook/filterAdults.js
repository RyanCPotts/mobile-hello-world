'intermediate assessment from ChatGPT'

// Write a function filterAdults that: Accepts an array of objects representing people (each object has name and age properties).
// Returns a new array with only the names of people aged 18 or older.

function filterAdults(people) {
    return people.filter(person => Number(person.age)  >= 18)
        .map(person => person.name); // Extract only the names
}

const people = [
    { name: 'Alice', age: '20' },
    { name: 'Bob', age: '16'},
    { name: 'Charlie', age: '22'},

];

console.log(filterAdults(people));

// Output ['Alice', 'Charlie']
