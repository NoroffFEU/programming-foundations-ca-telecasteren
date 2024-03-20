/*-------------------*/

// My object list

/*---------
Contains:

Object has:
- String
- Number
- Boolean
- Array
- Function

Optionals:
- User interface
- Nested objects
- Array of objects

Other:
- for loops
- returning values
- filtering values
--> these are commented out on purpose,
feel free to uncomment and see console log
--------------------------------------------------*/

const books = [
  {
    title: "Six pistols and a machine gun",
    author: "John Smith",
    genre: "action",
    price: 25.0,
    inStock: true,
    inCart: function () {
      this.inStock = this.inStock;
    },
  },
  {
    title: "Him & Her",
    author: "Carry Summers",
    genre: "romance/drama",
    price: 15.0,
    inStock: true,
    inCart: function () {
      this.inStock = this.inStock;
    },
  },
  {
    title: "Aboriginals",
    author: ["John Smith", "Abigail Remington", "Doug Rains"],
    genre: "biography",
    price: 30.0,
    inStock: true,
    inCart: function () {
      this.inStock = !this.inStock;
    },
  },
];

// Calling the function in the object list
//books[0].inCart();
//books[1].inCart();
//books[2].inCart();

// Checking the function in the object list
//console.log("inCart is:", books[0].inStock + ", Book-title: " + books[0].title);
//console.log("inCart is:", books[1].inStock + ", Book-title: " + books[1].title);
//console.log("inCart is:", books[2].inStock + ", Book-title: " + books[2].title);

// To simplify the code commented out above, I tried to make a loop instead
// Calling the function for each book
for (const book of books) {
  book.inCart();
}

// Looping through books and checking each book
for (const book of books) {
  // console.log("inCart is: ", book.inStock + ", Book-title: " + book.title);
}

//--------------------- Looping, finding and filtering:

// Looping through the array of books and creating a local variable
for (let i = 0; i < books.length; i++) {
  let book = books[i];
  // console.log(book.title);
}

// When user searches for a specific book-title, we'll find it here
let searchTitle = "Aboriginals";
let myBook = books.find(function (book) {
  return book.title === searchTitle;
});
// console.log(myBook);

// When user searches for books by the same author, we'll find it here
let searchAuthor = "John Smith";
let sameAuthor = books.filter(function (book) {
  return book.author === searchAuthor;
});
// console.log(sameAuthor);

// When user searches for prices equal to or under 20.0, we'll find it here
let maxPrice = 20.0;
let filteredPrice = books.filter(function (book) {
  return book.price <= maxPrice;
});
// console.log(filteredPrice);

//--------------------- Fetching the HTML and adding HTML elements with Javascript:

const pageHeading = "List of books";
const objectHeading = document.querySelector(".page-heading");
let objectList = document.querySelector(".object-list");

objectHeading.innerHTML += "<h1>" + pageHeading + "</h1>";

for (let i = 0; i < books.length; i++) {
  let book = books[i];
  console.log(book.title);
  console.log("Genre: " + book.genre);
  console.log("Price: " + "$" + book.price);

  // Creating the object list in the HTML document
  objectList.innerHTML +=
    "<h4>" +
    "<li>" +
    book.title +
    "</li></h4><h5>" +
    "Genre: " +
    book.genre +
    "</h5><p>" +
    "Price: $" +
    book.price +
    "</p>";
}
