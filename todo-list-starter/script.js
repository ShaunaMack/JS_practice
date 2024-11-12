let todoTasks = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];

const addTask = () => {
  const newTask = document.getElementById("new-task-text");
  if (newTask.value) {
    todoTasks.push(newTask.value);
    todoTasksStatus.push(false);

    newTask.value = "";
    updateTodoList();
  }
};

const updateTodoList = () => {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  for (const [index, task] of todoTasks.entries()) {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    // Add the <li> element to the list
    todoList.appendChild(newTodoTaskElement);
    //   <ul>
    //      <li><p>"walk chilli</p></li>
    //   </ul>
  }
};

const toggleComplete = (index) => {
  // If it is complete, set it to incomplete.
  // If it is incomplete, set it to complete.
  if (todoTasksStatus[index] == false) {
    todoTasksStatus[index] = true;
  } else {
    todoTasksStatus[index] = false;
  }
  console.log(todoTasksStatus);
  updateTodoList();
};

const createNewTodoItemElement = (task, index) => {
  // Create a <p> element to store the task description
  const newTodoTaskTextElement = document.createElement("p");
  newTodoTaskTextElement.innerText = task;
  //   <p>"walk chilli</p>

  // Apply a CSS class to the completed items
  if (todoTasksStatus[index] === true) {
    newTodoTaskTextElement.classList.add("complete");
  }

  // Create a <li> element to contain the paragraph
  const newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newTodoTaskTextElement);
  //   <li><p>"walk chilli</p></li>

  // Adding a button to mark each item as complete
  const completeButtonElement = document.createElement("input");
  //   <input type="button"></input>
  completeButtonElement.type = "button";
  completeButtonElement.value = "Completed";
  completeButtonElement.onclick = function () {
    toggleComplete(index);
  };
  newTodoTaskElement.appendChild(completeButtonElement);

  return newTodoTaskElement;
};

updateTodoList();
