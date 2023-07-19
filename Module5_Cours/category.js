// Get the category query parameter value from the URL
var category = new URLSearchParams(window.location.search).get("category");

// Use the category value to load and display the menu items for that category
loadMenuItems(category);

function loadMenuItems(categoryShortName) {
  // Implement your logic to load the menu items for the given category here
  console.log("Loading menu items for category: " + categoryShortName);
}
