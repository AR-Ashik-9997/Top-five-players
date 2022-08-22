const selectPlayerArray = [];
const numberofPlayer = [];
function displaySelectedPlayer() {
  const table = document.getElementById("table-body");
  table.textContent = "";

  for (let i = 0; i < selectPlayerArray.length; i++) {
    if (i >= 5) {
      alert("vag");
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
function removeDuplicate(array) {
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (unique.indexOf(array[i]) === -1) {
      unique.push(array[i]);
    }
  }
  return unique;
}

function setTextElementById(elementId, newValue) {
  const setText = document.getElementById(elementId);
  setText.innerText = newValue;
}
