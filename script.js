
const hearts = document.querySelectorAll(".heartBtn");
const heartCount = document.getElementById("heartCount");

hearts.forEach(btn => {
  btn.addEventListener("click", () => {
    heartCount.textContent = parseInt(heartCount.textContent) + 1;
  });
});


const copyBtns = document.querySelectorAll(".copyBtn");
const copyCount = document.getElementById("copyCount");

copyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.closest(".card").dataset.number;
    navigator.clipboard.writeText(number)
      .then(() => {
        copyCount.textContent = parseInt(copyCount.textContent) + 1;
        alert(`${number} copied to clipboard!`);
      })
      .catch(err => console.error("Failed to copy: ", err));
  });
});

const callBtns = document.querySelectorAll(".callBtn");
const coinCount = document.getElementById("coinCount");
const historyList = document.getElementById("historyList");
const historyEmpty = document.getElementById("historyEmpty");

callBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let coins = parseInt(coinCount.textContent);

    if(coins < 20){
      alert("Not enough coins to make a call!");
      return;
    }

    coinCount.textContent = coins - 20;

    const card = btn.closest(".card");
    const name = card.dataset.name;
    const number = card.dataset.number;

    alert(`Calling ${name}: ${number}`);

    const li = document.createElement("li");
    const time = new Date().toLocaleTimeString();
    li.textContent = `${name} - ${number} (${time})`;
    li.classList.add("text-gray-700", "py-1");
    historyList.appendChild(li);

    if(historyEmpty) historyEmpty.style.display = "none";
  });
});

document.getElementById("clearHistory").addEventListener("click", () => {
  historyList.innerHTML = '';
  const li = document.createElement("li");
  li.id = "historyEmpty";
  li.classList.add("text-gray-400", "text-center", "py-6");
  li.textContent = "No call has come yet.";
  historyList.appendChild(li);
});
