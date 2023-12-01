const button = document.getElementById("button");
button.addEventListener("click", playVid);
function playVid() {
  let amount = prompt("How much would you like to donate? (GBP)");
  if (isNaN(amount)) {
    alert("Invalid! Please write amount in numbers only!");
  } else alert(`Thank you for donating £${amount}`);
}
