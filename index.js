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

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
    { name: "Carol", price: 70, occupation: "Programmer" },
]