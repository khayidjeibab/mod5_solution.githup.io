// Array of possible category short names
var categories = ["Lunch", "Dinner", "Sushi", "Breakfast", "Dessert"];

// Function to load a random category
function loadRandomCategory() {
  var randomIndex = Math.floor(Math.random() * categories.length);
  var randomCategoryShortName = categories[randomIndex];
  loadMenuItems(randomCategoryShortName);
}

// Function to load menu items for a given category short name
function loadMenuItems(categoryShortName) {
  // Implement your logic to load the menu items for the given category here
  console.log("Loading menu items for category: " + categoryShortName);
}
