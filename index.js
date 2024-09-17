function flipCoin() {
  const numOfCoins = document.getElementById("numofcoins").value;
  const coinResult = document.getElementById("coinResult");
  const coinImages = document.getElementById("coinImages");
  let headsCount = 0;
  let tailsCount = 0;
  const images = [];

  for (let i = 0; i < numOfCoins; i++) {
    const flip = Math.random() < 0.5 ? "Heads" : "Tails";
    if (flip === "Heads") {
      headsCount++;
      images.push(`<img src="images/1.png" alt="Heads">`);
    } else {
      tailsCount++;
      images.push(`<img src="images/2.png" alt="Tails">`);
    }
  }

  coinResult.textContent = `Heads: ${headsCount}, Tails: ${tailsCount}`;
  coinImages.innerHTML = images.join("");
}
