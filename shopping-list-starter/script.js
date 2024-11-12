let shoppingListItems = ["milk", "eggs", "bread"];

const addItem = () => {
  let item = document.getElementById("new-item-text").value;
  shoppingListItems.push(item);
  console.log(shoppingListItems);
  updateItems();
};

const updateItems = () => {
  // locate the li
  let listElement = document.getElementById("shopping-list-items");
  // clear the li of any existing items
  listElement.innerHTML = "";

  // loop through the shopping list items and add them to the list
  for (const shoppingItem of shoppingListItems) {
    let itemElement = document.createElement("li");
    itemElement.innerText = shoppingItem;
    listElement.appendChild(itemElement);
  }
};

updateItems();
