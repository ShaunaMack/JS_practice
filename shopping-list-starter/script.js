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

const addItem = () => {};

const updateItems = () => {};
