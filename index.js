//THE CURRENT DATE 
const d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

//DECLARING AND SETTING CONSTANTS 
const container = document.querySelector(".container");
const addTaskCard = document.getElementById("add-Task-card");
const cardButton = document.getElementById("save-btn");
const task = document.getElementById("task");
const description = document.getElementById("description");
const due = document.getElementById("due");
const errorMessage = document.getElementById("error");
const addTask = document.getElementById("add-taskcard");
const closeBtn = document.getElementById("close-btn");
let editBool = false;

//ADDING A CARD FOR TASK WHEN USER CLICKS ADD
/* getting stuck on using add eventlistener for task 4/5.
using "Document.querySelector() or EventTarget.addEventListener() to be able to add or hide elemnts of user inputs. 
sinice no  lists were used bc thier too long & complicated for me to keep track with: don't use array lists to pop(), push() to remove/delete.
---add new if else logic*/ 
addTask.addEventListener("click", () => {
  container.classList.add("hide");
  task.value = "";
  description.value = "";
  addTaskCard.classList.remove("hide");
});

//HIDE ADDING TASK CARD 
closeBtn.addEventListener(
  "click",
  (hideTask = () => {
    container.classList.remove("hide");
    addTaskCard.classList.add("hide");
    if (editBool) {
      editBool = false;
      submitQuestion();
    }
  })
);

//SAVING & SUBMITTING NEW CARD INPUTS FROM FORMS
cardButton.addEventListener(
  "click",
  (submitQuestion = () => {
    editBool = false;
    tempTask = question.value.trim();
    tempAnswer = answer.value.trim();
    if (!tempQuestion || !tempAnswer || !tempDue) {
      errorMessage.classList.remove("hide");
    } else {
      container.classList.remove("hide");
      errorMessage.classList.add("hide");
      viewlist();
      question.value = "";
      answer.value = "";
    }
  })
);

//Card Generate / CREATE A CARD
function viewlist() {
  var listCard = document.getElementsByClassName("card-list-container");
  var div = document.createElement("div");
  div.classList.add("card");
//TITLES
  div.innerHTML += `
  <p class="task-div">${question.value}</p>`;
//ANSWERS/DESCRIPTIONS/DUE DATES INPUTS
  var displayDescription = document.createElement("p");
  displayAnswer.classList.add("answer-div", "hide");
  displayAnswer.innerText = answer.value;
//DUE DATE
	


/*/document.getElementById("myBtn").addEventListener("click", displayAdded);
//
//function displayAdded() {
//     
//}



//
////PICKING ELETEMENTS
//const clear = document.querySelector(".clear");
//const dataElement = document.getElementById("date");
//const list = document.getElementById("list");
//const input = document.getElementById("input");
//
//
//
////SETTING CLASSES TO CONST "THIS  = THIS"
//const DONE = "btn btn-primary";
//const LINE_THROUGH = "lineThrough";
//*/
  //DELETE A TASK - SAVED
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });
  buttonsCon.appendChild(deleteButton);

  div.appendChild(buttonsCon);
  listCard[0].appendChild(div);
  hideQuestion();
}

//CHANGE INPUTS SAVED
	/* using query selectors resourcses from task6 to allow users to edit or delte/hide thier submited tasks at any point*/
const modifyElement = (element, edit = false) => {
  let parentDiv = element.parentElement.parentElement;
  let parentQuestion = parentDiv.querySelector(".question-div").innerText;
  if (edit) {
    let parentAns = parentDiv.querySelector(".answer-div").innerText;
    answer.value = parentAns;
    question.value = parentQuestion;
    disableButtons(true);
  }
  parentDiv.remove();
};

//DEL SAVED /EDIT MODIFYER
const disableButtons = (value) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = value;
  });
};














