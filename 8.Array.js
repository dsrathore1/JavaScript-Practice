// //! Traversal Array

var name1 = ["Digpal", "Singh", "Rathore"];

console.log(name1);
console.log(name1.length);
console.log(name1[0]);

console.log('\nDisplay the array:');


// //? Old method to display all the element of the array

for (i = 0; i < name1.length; i++) {
    console.log(name1[i]);
}

console.log('\nDisplay the index of the array:');

// //! For in loop method

for (elements in name1) {
    console.log(elements + " ");
    // } //* This for in loop is only display all the index present into the array

    console.log('\nDisplay the elements of the array:');

    // //! For of loop method 

    for (elements of name1) {
        console.log(elements);
    } //* This for in loop is only display all the value present into the array


    // ! Array Search and Filter

    let value = ["Chandu", "Ram", "Faju", "Ramesh", "Ram"];

    console.log(value);


    //* Array Prototype indexOf()

    //* Return the first (greatest) index of an element within the array equalto an elemnet, of -1 if none is found. It search the element first to last it always case sensitve

    console.log(value.indexOf('Ram'));


    //* Array Prototype lastIndexOf()

    //* Return the last (greatest) index of an element within the array equalto an elemnet, of -1 if none is found. It search the element last to first it always case sensitve

    console.log(value.lastIndexOf('Ram'));
    console.log(value.lastIndexOf("Raju"));
    console.log(value.lastIndexOf("Ramesh", 2)); //* there is no name element "Ramesh" present before index no. 2

    console.log(value.lastIndexOf("Ramesh", 4));


    //* Array prototype includes()
    //* Determine the value present into the array, this only returning the boolean value (True : False), it is also a case sensitve

    console.log(value.includes("Faju"));
    console.log(value.includes("faju"));


    //* Array Prototype find()
    //* arr.find(callback(element[ , index[ , array]])[, thisArg]) 

    // * Returns the found element in the array, if some element in the array satisfies the testion function, or undefined if not found. Only problem is that it ""return only one element"" if conditiion is not satisfied then it returns undefined value

    const prices = [200, 300, 380, 400, 450, 500, 600];

    const findElement = prices.find((currVal) => {
        return currVal > 300;
    });

    console.log(findElement);

    console.log(prices.find((currVal2) => currVal2 > 500));

    console.log(prices.find((currVal2) => currVal2 > 1500));

    console.log(prices.findIndex((currVal3) => currVal3 > 15200)); //* Find Index returns -1 value when given element is not present into the array


    // * Array prototype filter()

    // * Returns a new array containing all elements of the calling array for which the provided filtering function returns true


    const prices1 = [200, 300, 380, 400, 450, 500, 600];

    console.log(prices1.filter((elem) => elem < 500));
    console.log(prices1.filter((elem) => elem > 1500));


    //* Array sort()

    //* acending to desending order capital preference first. In sort numbers are considering as string that's why "25" is greater than "100" into string, because 1 come first into number system. Sort only see first character of the value "A-Z", "a-z", "1-9"

    const months = ["Dec", "Jan", "Nov", "Feb", "April"];
    const months2 = ["Dec", "Jan", "Nov", "feb", "april"];
    const num = [1, 100, 25, 60, 84];

    console.log(months.sort());
    console.log(months2.sort());
    console.log(num.sort());

    //* Array Push ()
    //* The push() method adds one or more elements to the end of the an array and returns the new length of the array

    const animals = ["Dog", "Cat", "Goat", "sheep", "Pigs"];

    console.log(animals);

    animals.push("Rabbit", "Leopard");

    console.log(animals);


    //* Array unshift()
    //* The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array

    const animals = ["Dog", "Cat", "Goat", "sheep", "Pigs"];



    animals.unshift("Rabbit", "Leopard");
    console.log(animals);

    //* Array pop()
    //* The pop () method remove one or more elements to the end of an array and returns the new length of the array

    var num = [1, 2, 3, 4, 5, 3];
    console.log(num);
    num.pop();
    console.log(num);


    //? Challenge

    const months3 = ["Jan", "march", "April", "June", "July"];

    //! 1: Add Dec at the end of an array

    months3.splice(months3.length, 0, "Dec");
    console.log(months3);

    //! 2: What is the return value of splice method
    //! 3: Update march to March (update)


    months3.splice(1, 1, "March")
    console.log(months3);

    //! 4: Delete June from an array

    let del = months3.indexOf('June');
    console.log(del, "no. index I wanna delete");
    months3.splice(del, 1); //* splice(on which index you wanna delete : how many elements you wanna delete : String)
    console.log(months3);
}
