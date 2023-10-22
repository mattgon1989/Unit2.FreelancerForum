/*
-have a list for users to find available freelancers

-each freelancer should have a name, occupation, and starting price for services.

-on the list Alice, the writer starting price of $30, and Bob, teacher, has a starting price of $50.

- user also finds a message that displays average starting price of all the freelancers. (ex: the average starting price is $40.)

- A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer starting price of $70. The average starting price is updated to $50.
New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.


- define arrays for possible names and occupations
- define an initial array of freelancers
- how will freelancers' information to be displayed on the page
- write a function to render the initial freelancer data
- write a funtion to generate a new random freelancer
    -is the funtion being called in an interval

- write a function to calculate the average starting price of you freelancers array
    -When should this function be called to update the displayed message

*/


// array of freelancers names, price, and occupations.
const freelancers = [
    { name: 'Alice', price: 30, occupation: 'Writer' },
    { name: 'Bob', price: 50, occupation: 'Teacher' },
    { name: 'Carol', price: 70, occupation: 'Programmer' },
];

renderPage();

// add a new random freelancer to the freelancers array and
// render the page once every 5 seconds
setInterval(() => {
    pushRandomFreelancer();
    renderPage();
}, 5000);

// pushRandomFreelancer creates a new random freelancer object
// and pushes it onto the end of the freelancers array.
function pushRandomFreelancer() {
    const randomFreelancer = makeRandomFreelancer();
    freelancers.push(randomFreelancer);
}

// averageStartingPrice averages all prices from the
// freelancers array and returns that number
function averageStartingPrice() {
    let total = 0;
    for (let i = 0; i < freelancers.length; i++) {
        total += freelancers[i].price;
    }
    return (total / freelancers.length).toFixed(2);
}

// renderStartingPrice updates the average-starting-price DOM element
// to be the most up-to-date average starting price across the freelancers
// array.
function renderStartingPrice() {
    const priceSpan = document.querySelector('#average-starting-price');
    if (priceSpan != null) {
        priceSpan.innerText = averageStartingPrice();
    }
}

// renderFreelancersTable will update the DOM table rows with updated
// freelancers information
function renderFreelancersTable() {
    const titleRow = titlesTableRow();
    
    const tableBody = document.querySelector('tbody');
    // clear the existing table body
    tableBody.innerHTML = '';
    tableBody.appendChild(titleRow);

    // append each freelancer as a table row
    for (let i = 0; i < freelancers.length; i++) {
        const freelancerRow = freelancerTableRow(freelancers[i]);
        tableBody.appendChild(freelancerRow);
    }
}

// titlesTableRow creates a DOM table row of the table titles
function titlesTableRow() {
    const titleRow = document.createElement('tr');

    // name column
    const nameCol = document.createElement('td');
    nameCol.innerText = 'Name';
    titleRow.appendChild(nameCol);

    // occupation column
    const occupationCol = document.createElement('td');
    occupationCol.innerText = 'Occupation';
    titleRow.appendChild(occupationCol);

    // starting price column
    const startingPriceCol = document.createElement('td');
    startingPriceCol.innerText = 'Starting Price';
    titleRow.appendChild(startingPriceCol);

    return titleRow;
}

// freelancerTableRow takes a freelancer and returns a
// DOM table row of it
function freelancerTableRow(freelancer) {
    const freelancerRow = document.createElement('tr');

    // name column
    const nameCol = document.createElement('td');
    nameCol.innerText = freelancer.name;
    freelancerRow.appendChild(nameCol);

    // occupation column
    const occupationCol = document.createElement('td');
    occupationCol.innerText = freelancer.occupation;
    freelancerRow.appendChild(occupationCol);

    // starting price column
    const startingPriceCol = document.createElement('td');
    startingPriceCol.innerText = freelancer.price;
    freelancerRow.appendChild(startingPriceCol);

    return freelancerRow;
}

// renderPage updates DOM elements across the page to be consistent
// with the latest freelancers array entries.
function renderPage() {
    renderStartingPrice();
    renderFreelancersTable();
}

const freelancerNames = [
    'Alice',
    'Bob',
    'Carol',
    'Casey',
    'Matt',
    'Adam',
    'John',
    'Jake',
    'Andrew',
    'Mark',
    'Kevon',
    'Yvonne',
];

const freelancerOccupations = [
    'Gardener',
    'Programmer',
    'Writer',
    'Teacher',
    'Actor',
    'Digital Artist',
    'Guitarist',
    'Keyboardist',
    'Drummer',
    'Singer',
    'Songwriter',
];

// makeRandomFreelancer returns a Freelancer object.
// It picks a random entry from names and occupations and generates a random price.
function makeRandomFreelancer() {
    const name = freelancerNames[randomIndex(freelancerNames)];
    const occupation = freelancerOccupations[randomIndex(freelancerOccupations)];
    const price = Math.floor(Math.random() * 100);

    return {
        name,
        occupation,
        price,
    };
}

// randomIndex takes an array as input and returns a
// random number from 0 to arr.length-1.
function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}
