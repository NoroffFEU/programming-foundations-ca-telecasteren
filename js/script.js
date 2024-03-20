// script.js contains only extra material:

// Fetching the value from the input field and logging it to the console.
// I also added an alert window to let the user know we have logged their search,
// since the UI does not filter or bring back search input as of now
function searchInput() {
  const inputField = document.getElementById("search-field");
  let inputValue = inputField.value;

  if (inputValue.length >= 3) {
    console.log("User searched for: " + inputValue);
    alert("Message logged to the console! :)");
  } else {
    console.log("Search must contain at least 3 characters");
    alert("Search must contain at least 3 characters :(");
  }
}

// Clearing the input field
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
