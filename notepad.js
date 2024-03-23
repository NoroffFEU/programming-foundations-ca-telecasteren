// Just a playground for testing different things

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
    /*
    inCart: function () {
      this.inStock = !this.inStock;
    },*/
    inCart: function () {
      if (this.inStock > 0) {
        this.inStock -= 1;
      }
    },
  },
];

// trying button functions:

// Console logging the stock number of each book
for (const book of books) {
  console.log(
    "Number in stock: " + book.stockNum + ", book title: " + book.title
  );
}

// Simulating an add to cart scenario, updating the number of books in stock, logging it to the console
function addToCart() {
  // Calling the function for each book
  for (const book of books) {
    book.inCart();

    console.log(
      "New number in stock: " + book.stockNum + ", book title: " + book.title
    );
  }
}
