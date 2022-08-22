function addToSelect(element) {
  const selectedPlayer = element.parentNode.parentNode.children[0].innerText;
  const playaer = {
    selectedPlayer: selectedPlayer,
  };

  selectPlayerArray.push(playaer);
  displaySelectedPlayer();
  document.getElementById(element.id).disabled = true;
}

document.getElementById("calculate").addEventListener("click", function () {
  const playerField = document.getElementById("player-field");
  const perPlayerCost = parseFloat(playerField.value);
  const selectedPlayer = removeDuplicate(numberofPlayer);
  if(isNaN(perPlayerCost)===false &&typeof perPlayerCost==='number'&& perPlayerCost>=0 && selectedPlayer.length>0){
    const playerExpeneses = (perPlayerCost*selectedPlayer.length);
    setTextElementById('player-expense',playerExpeneses);   
  }
  else{
    if(isNaN(perPlayerCost)===true){
      alert('Please provide the Number of per player field');
    }
    if(selectedPlayer.length===0){
      alert('plese selecet the players');
    }
    if(perPlayerCost<0){
      alert('Please provide the positive Number of per player field');
    }
  }
});

document.getElementById('totla-calculate').addEventListener('click',function(){
  
})
