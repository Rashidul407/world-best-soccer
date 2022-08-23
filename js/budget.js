const calculate = document.getElementById("btn-calculate");

calculate.addEventListener("click", function () {
  const perPlayerFees = document.getElementById("perPlayerFees");
  const playerFees = parseFloat(perPlayerFees.value);

  if (isNaN(playerFees)) {
    alert("Enter a number please");
  } else if (perPlayerFees.value === "") {
    expenses.innerText = "00";
  } else {
    const bestPlayers = playerLi.length;
    let result = playerFees * bestPlayers;
    const expenses = document.getElementById("expenses");
    expenses.innerText = result;
  }
});

document.getElementById("btn-totalCalculate").addEventListener("click", function () {
    const expense = document.getElementById("expenses");
    const expensevalue = parseFloat(expense.innerText);

    const managerField = document.getElementById("manager-field");
    const managerFieldValue = parseFloat(managerField.value);
    const coachField = document.getElementById("coach-field");
    const coachFieldValue = parseFloat(coachField.value);

    if (
      isNaN(expensevalue) ||
      expensevalue < 1 ||
      isNaN(managerFieldValue) ||
      isNaN(coachFieldValue)
    ) {
      alert("Please enter number");
    } else {
      const totalAmmount = document.getElementById("total-result");
      totalAmmount.innerText = expensevalue + managerFieldValue + coachFieldValue;
    }
  });
