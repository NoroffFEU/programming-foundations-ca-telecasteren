/*-------------------*/

// My object list

/*---------
For the sake of these studies,
I've added comments to explain what I've done
-----------
Extras:
--> some of these are commented out on purpose,
feel free to uncomment and see console log
--------------------------------------------------*/

const books = [
  {
    title: "Six pistols and a machine gun",
    author: "John Smith",
    genre: "action",
    price: 25.0,
    inStock: true,
    stockNum: 5,
    inCart: function () {
      if (this.stockNum > 0) {
        this.stockNum -= 1;
      } else {
        this.stockNum === 0;
        console.log("Not in stock:");
      }
    },
  },
  {
    title: "Him & Her",
    author: "Carry Summers",
    genre: "romance/drama",
    price: 15.0,
    inStock: true,
    stockNum: 10,
    inCart: function () {
      if (this.stockNum > 0) {
        this.stockNum -= 1;
      } else {
        this.stockNum === 0;
        console.log("Not in stock:");
      }
    },
  },
  {
    title: "Aboriginals",
    author: ["John Smith", "Abigail Remington", "Doug Rains"],
    genre: "biography",
    price: 30.0,
    inStock: false,
    stockNum: 0,
    inCart: function () {
      if (this.stockNum > 0) {
        this.stockNum -= 1;
      } else {
        this.stockNum === 0;
        console.log("Not in stock:");
      }
    },
  },
];

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

// Additional:

// Console logging the stock number of each book
for (const book of books) {
  console.log(
    "Number in stock: " + book.stockNum + ", book title: " + book.title
  );
}

// Simulating an add to cart scenario, updating the number of books in stock
function addToCart() {
  // Calling the function for each book
  for (const book of books) {
    book.inCart();
    // console logging the result when button is clicked(the addToCart function is called)
    console.log(
      "New number in stock: " + book.stockNum + ", book title: " + book.title
    );
  }
  alert("Cart updated :)");
}

//--------------------- Looping, finding and filtering:

// Looping through the array of books and creating a local variable
for (let i = 0; i < books.length; i++) {
  let book = books[i];
  // console.log(book.title);
}

// Searches for a specific book-title and finds it here
let searchTitle = "Aboriginals";
let myBook = books.find(function (book) {
  return book.title === searchTitle;
});
// console.log(myBook);

// Searches for books by the same author and finds it here
let searchAuthor = "John Smith";
let sameAuthor = books.filter(function (book) {
  if (Array.isArray(book.author)) {
    return Array.isArray(book.author);
  } else {
    return book.author === searchAuthor;
  }
});
// console.log(sameAuthor);

// Searches for books with equal to or under set price value and finds it here
let maxPrice = 20.0;
let filteredPrice = books.filter(function (book) {
  return book.price <= maxPrice;
});
// console.log(filteredPrice);
