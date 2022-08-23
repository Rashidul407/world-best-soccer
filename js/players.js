//messi button
const messi = document.getElementById("btn-messi")
messi.addEventListener("click", function () {
  const playersName = document.getElementById("messi");
  const name = playersName.innerText;

  SelectedPlayers("best-five", name);

  disabledBtn(messi)
 

});

//iniesta button
const iniesta = document.getElementById("btn-iniesta")
iniesta.addEventListener("click", function () {
  const playersName = document.getElementById("iniesta");
  const name = playersName.innerText;

  SelectedPlayers("best-five", name);
  disabledBtn(iniesta)
});


//xavi button
const xavi=document.getElementById("btn-xavi");

xavi.addEventListener("click", function () {
  const playersName = document.getElementById("xavi");
  const name = playersName.innerText;

  SelectedPlayers("best-five", name);
  disabledBtn(xavi)
});


//suarez button
const suarez = document.getElementById("btn-suarez");
suarez.addEventListener("click", function () {
  const playersName = document.getElementById("suarez");
  const name = playersName.innerText;

  SelectedPlayers("best-five", name);
  disabledBtn(suarez)
});


//aguero button
const aguero = document.getElementById("btn-aguero")
aguero.addEventListener("click", function () {
  const playersName = document.getElementById("aguero");
  const name = playersName.innerText;

  SelectedPlayers("best-five", name);
  disabledBtn(aguero)
});


//ronaldinho button
const ronaldinho = document.getElementById('btn-ronaldinho');
ronaldinho.addEventListener("click",function(){
  const playersName = document.getElementById("ronaldinho");
  const name = playersName.innerText;

  SelectedPlayers("best-five", name);
  disabledBtn(ronaldinho)

})
