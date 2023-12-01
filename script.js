console.log("Welcome to FOXYspace, the future of foxes AND space!");
//donate button//
const button = document.getElementById("button");
button.addEventListener("click", playVid);
function playVid() {
  let amount = prompt("How much would you like to donate? (GBP)", 0);
  Number(amount);
  if (isNaN(amount) || amount == null) {
    alert("Invalid! Please use numbers only!");
  } else pounceBtn.textContent = `Thank you for donating £${amount}`;
}

//pounce button//
const pounceBtn = document.getElementById("pounceBtn");
const pounceImg = document.getElementById("contact");
const pounceVid = document.getElementById("foxVid");
let playing = 0;
function noVid(playing) {
  if (playing !== 0) {
    pounceBtn.hidden = false;
    pounceImg.style.backgroundImage = "url('./assets/fox-pounce.jpg')";
    pounceImg.style.backgroundSize = "cover";
    pounceImg.style.backgroundPosition = "center center";
    document.getElementById("text-contact").style.color = "black";
    foxVid.hidden = true;
    foxVid.pause();
    foxVid.currentTime = 0;
    playing = 0;
    document.getElementById("button").click();
  }
}
pounceBtn.addEventListener("click", function () {
  pounceImg.style.background = "black";
  document.getElementById("text-contact").style.color = "white";
  foxVid.hidden = false;
  foxVid.play();
  playing = 1;
  setTimeout(noVid, 1400);
  pounceBtn.hidden = true;
});
