document.getElementById("calculate").addEventListener("click", function () {
  const perPlayerField = document.getElementById("player-field");
  const perPlayerCost = parseFloat(perPlayerField.value);
  const selectedPlayer = removeDuplicateNumberOfPlayer(numberofPlayer);
  const cheackInput = checkInputField(perPlayerCost);
  const checkArray = checkInputField(selectedPlayer);
  if (
    cheackInput === true &&
    checkArray === true &&
    isNaN(perPlayerCost) === false &&
    perPlayerCost > 0 &&
    selectedPlayer.length > 0
  ) {
    const playerExpeneses = parseFloat(
      (perPlayerCost * selectedPlayer.length).toFixed(2)
    );
    setTextElementById("player-expenses", playerExpeneses);
  }
});

document
  .getElementById("total-calculate")
  .addEventListener("click", function () {
    const managerField = document.getElementById("manager-field");
    const coachField = document.getElementById("coach-field");
    const playerExpenses = document.getElementById("player-expenses");
    const totalPlayerExpenses = parseFloat(playerExpenses.innerText);
    const managerCost = parseFloat(managerField.value);
    const coachCost = parseFloat(coachField.value);
    const cheackManagerInput = checkInputField(managerCost);
    const checkCoachInput = checkInputField(coachCost);
    if (
      cheackManagerInput === true &&
      checkCoachInput === true &&
      isNaN(managerCost) === false &&
      managerCost > 0 &&
      coachCost > 0
    ) {
      const totalCalculate = parseFloat(
        (totalPlayerExpenses + managerCost + coachCost).toFixed(2)
      );
      setTextElementById("total-result", totalCalculate);
    }
  });
