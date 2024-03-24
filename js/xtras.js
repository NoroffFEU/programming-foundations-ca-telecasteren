// xtras.js only contains additional code and practice:

// Fetching the value from the input field and logging it to the console.
// Added an alert window to let the user know we have logged their search,
// since the UI does not filter or bring back a list of search input for now
function searchInput() {
  const inputField = document.getElementById("search-field");
  let inputValue = inputField.value.toLowerCase();

  if (inputValue.length <= 3) {
    console.log("Search must contain at least 3 characters");
    alert("Search must contain at least 3 characters :(");
    return;
  }

  // setting a boolean flag
  let flag = false;

  // Looping through the object list to check if we have a match
  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    for (let key in book) {
      if (
        typeof book[key] === "string" &&
        book[key].toLowerCase() === inputValue
      ) {
        console.log("User searched: " + inputValue.toUpperCase());
        alert("We found: " + inputValue);
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }

  // The flag is still false if no match is found
  if (!flag) {
    console.log("Couldn't find what you're looking for..");
    alert("Sorry, mate. Nothing here..");
  }
}

// Clearing the input field after submission
function clearSearch() {
  document.getElementById("search-field").value = "";
}

/*
Calling the two functions above to happen when the button searchEvent is clicked.
Basically, when submit button is clicked,
then we will log the message from the input field to the console and clear it from the input field.
*/
function searchEvent() {
  searchInput();
  clearSearch();
}
