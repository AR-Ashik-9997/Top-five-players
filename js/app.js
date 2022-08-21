const selectPlayerArray = [];
function displaySelectedPlayer() {
  const table = document.getElementById("table-body");
  table.textContent = "";

  for (let i = 0; i < selectPlayerArray.length; i++) {
    if (i >= 5) {
      alert("vag");
      break;
    } else {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td><h5>${i + 1}.</h5></td>
                      <td><h5 class="ms-4">${
                        selectPlayerArray[i].selectedPlayer
                      }</h5></td>`;
      table.appendChild(tr);
    }
  }
}

function addToSelect(element) {
  const selectedPlayer = element.parentNode.parentNode.children[0].innerText;
  const playaer = {
    selectedPlayer: selectedPlayer,
  };

  selectPlayerArray.push(playaer);
  displaySelectedPlayer();
  document.getElementById(element.id).disabled=true; 
  
}
