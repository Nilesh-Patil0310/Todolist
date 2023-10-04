// get the input box using dom
const inputBox = document.getElementById("input-box");
// get the container to store the list items
const listItems = document.getElementById("list-container");
// create taskcounter
const taskCounter = document.createElement("span");
// initialised the task counter
taskCounter.textContent = `Task : 0`;
taskCounter.style.color = "black";
// append the taskcounter in listItems
listItems.appendChild(taskCounter);

// Update counter function
function updateCounter() {
  taskCounter.textContent = `Task : ${listItems.querySelectorAll("li").length}`;
}

// create function to add the task
function addTask(text) {
  // create list element and append in listItems
  const li = document.createElement("li");
  li.textContent = text;
  li.style.color = "white";
  //li.style.border = "6px solid green";
  listItems.appendChild(li);

  // create span to delete listitem from container
  let deleteButton = document.createElement("span");
  deleteButton.textContent = "\u00d7";
  li.appendChild(deleteButton);

  // Update the counter accordinglly
  updateCounter();
}

// function for keyinput from user
function handleInputKeypress(e) {
  if (e.key === "Enter") {
    // store the keypress value in text variable
    const text = inputBox.value.trim();
    if (!text) {
      alert("Add Task Section cannot be Empty!");
      return;
    }
    // call function to add the task
    addTask(text);
    // cleare the inputbox and empty
    inputBox.value = "";
  }
}

// adding aventlistner
listItems.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      updateCounter();
    }
  },
  false
);

function intializeApp() {
  inputBox.addEventListener("keyup", handleInputKeypress);
}

intializeApp();
