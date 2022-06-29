const elForm = document.querySelector(".form-input");
const elFormTwo = document.querySelector(".form");
const elBudgetInput = document.querySelector(".budget-input");
const elTextInput = document.querySelector(".text-input");
const elExpenseInput = document.querySelector(".expense-input");
const elBudgetTitle = document.querySelector(".budget-title");
const elExpenseTitle = document.querySelector(".expense-title");
const elBalanceTitle = document.querySelector(".balance-title");
const elDiv = document.querySelector(".div");
const elSpentDiv = document.querySelector(".spent-div");
const elBalanceDiv = document.querySelector(".balance-div");
const elExp = document.querySelector(".expenses");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const budgetValue = elBudgetInput.value;
  //   elBudgetInput.value = "";

  elBudgetTitle.textContent = `$ ${budgetValue}`;
});

let summ = 0;

elFormTwo.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const expenseValue = elExpenseInput.value;
  const budgetValue = elBudgetInput.value;

  summ = summ + Number(expenseValue);
  elExpenseTitle.textContent = `$ ${summ}`;

  //   elTextInput.value = "";
  //   elExpenseInput.value = "";

  elBalanceTitle.textContent = `$ ${Number(budgetValue) - summ}`;

  //   console.log(evt.target.matches(".delete-btn"));

  const cost = document.createElement("p");
  const spent = document.createElement("h3");
  const editIcon = document.createElement("i");
  const deleteIcon = document.createElement("i");

  cost.innerHTML = `-${elTextInput.value}`;
  spent.innerHTML = `$ ${elExpenseInput.value}`;

  cost.style.color = "red";
  cost.style.fontSize = "24px";
  cost.style.fontWeight = "500";
  cost.style.textTransform = "uppercase";
  cost.style.paddingTop = "15px";

  spent.style.color = "red";
  spent.style.paddingTop = "15px";

  deleteIcon.style.marginRight = "10px";

  editIcon.setAttribute("class", "fas fa-edit mt-4  text-primary");
  deleteIcon.setAttribute("class", "delete-btn fas fa-trash mt-4 text-danger ");

  elSpentDiv.appendChild(spent);
  elDiv.appendChild(cost);
  elBalanceDiv.appendChild(deleteIcon);
  elBalanceDiv.appendChild(editIcon);
});

// elExp.addEventListener("click", (evt) => {
//   if (evt.target.matches(".delete-btn")) {

//     const removeId = evt.target.dataset.removeItem;
//     const found =
//   }
// });
