let playerLi = document.getElementsByClassName("playerList");

function SelectedPlayers(playerID, name,btnName) {
  const bestFive = document.getElementById(playerID);

  
  if (playerLi.length <= 4) {
    const playerLi = document.createElement("li");
    playerLi.style.listStyle='decimal';
    playerLi.classList.add("playerList")
    playerLi.innerText = name;
  bestFive.appendChild(playerLi);
  } else {
    alert("You can't add more than 5 players");
    btnName.classList.remove("disabled")
  }
}

function disabledBtn(btnName){
  if (playerLi.length <=5) {
    btnName.classList.add("disabled")
  } 
  else if (playerLi.length >5) {
    btnName.classList.remove("disabled")
  } 
}