window.onload = function() {
    const alphabets = ['A', 'B', 'C', 'D', 'E'];
    const numbers = [1, 2, 3, 4, 5];


    //  ARRAYS

    // Usual Way of getting the elements from the array
    // const a = alphabets[0];
    // const b = alphabets[1];

    // Destrcuturing Concept
    var [a, b, , d, , f = 'F'] = alphabets; // here a, b are variables
    console.log(a + " " + b + " " + d + " " + f);

    // using

    // Concatenating the 2 arrays
    var newArray = [...alphabets, ...numbers];
    console.log(newArray);


    // usage of '...' operator
    const [one, , three, ...remainings] = numbers;
    console.log(remainings);




    //  OBJECTS

    var person1 = {
        name: 'logesh',
        age: 21,
        address: {
            dno: 211,
            street: "Nehru Street",
            city: "Madurai"
        }
    }

    var person2 = {
        age: 32,
        address: {
            city: "Chennai"
        }
    };

    // usual way
    console.log(person1["name"]);

    // Destructuring
    // var {name, address} = person1;
    // console.log(name + " " + address);


    // nested object destructuring
    var { name, address: { dno, city } } = person1;
    console.log(name + " " + dno + " " + city);

    // Concatenating the Objects with Destructuring concept
    // Problem here is overwriting of value happens when the field value is same

    // in below scenario AGE get overwrited from 21 to 32
    var newObject = {...person1, ...person2 };
    console.log(JSON.stringify(newObject));



}