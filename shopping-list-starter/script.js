let shoppingListItems = ["milk", "eggs", "bread"];
// locate the ul
let listElement = document.getElementById("shopping-list-items");

// loop over each item in the array and plop a new li of the new item at the bottom of the ul
for (const shoppingItem of shoppingListItems) {
  console.log(shoppingItem);
  let itemElement = document.createElement("li");
  itemElement.innerText = shoppingItem;
  listElement.appendChild(itemElement);
}

const addItem = () => {
  let item = document.getElementById("new-item-text").value;
  shoppingListItems.push(item);
  console.log(shoppingListItems);
  updateItems();
};

const updateItems = () => {
  // locate the li
  let listElement = document.getElementById("shopping-list-items");
  // Then we clear it of any existing items
  listElement.innerHTML = "";

  // loop through the shopping list items and add them to the list
  for (const shoppingItem of shoppingListItems) {
    let itemElement = document.createElement("li");
    itemElement.innerText = shoppingItem;
    listElement.appendChild(itemElement);
  }
};
