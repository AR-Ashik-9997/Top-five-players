const selectPlayerArray = [];
const numberofPlayer = [];
function addToSelect(element) {
  const selectedPlayer = element.parentNode.parentNode.children[0].innerText;
  const playaers = {
    selectedPlayer: selectedPlayer,
  };
  selectPlayerArray.push(playaers);
  displaySelectedPlayer();
  if (selectPlayerArray.length <= 5) {
    document.getElementById(element.id).disabled = true;
  }
}

function displaySelectedPlayer() {
  const table = document.getElementById("table-body");
  table.textContent = "";

  for (let i = 0; i < selectPlayerArray.length; i++) {
    if (i >= 5) {
      alert("Selected list is full");
      break;
    } else {
      numberofPlayer.push(i + 1);
      const tr = document.createElement("tr");
      tr.innerHTML = `<td><h5>${i + 1}.</h5></td>
                      <td><h5 class="ms-4">${
                        selectPlayerArray[i].selectedPlayer
                      }</h5></td>`;
      table.appendChild(tr);
    }
  }
}

function removeDuplicateNumberOfPlayer(array) {
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (unique.indexOf(array[i]) === -1) {
      unique.push(array[i]);
    }
  }
  return unique;
}

function checkInputField(inputField) {
  if (typeof inputField != "object") {
    if (isNaN(inputField) === true) {
      alert("Please provide the Number");
    }
    if (inputField < 0) {
      alert("Please provide the positive Number");
    }
  } else {
    if (inputField.length === 0) {
      alert("plese selecet the players more than five");
    }
  }
  return true;
}

function setTextElementById(elementId, newValue) {
  const setText = document.getElementById(elementId);
  setText.innerText = newValue;
}
