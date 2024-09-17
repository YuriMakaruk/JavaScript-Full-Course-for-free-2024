function flipCoin() {
  const numOfFlips = document.getElementById("numOfFlips").value;
  const flipResult = document.getElementById("flipResult");
  const coinImage = document.getElementById("coinImage");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfFlips; i++) {
    const value = Math.floor(Math.random() * 2) + 1;
    values.push(value);
    images.push(`<img src="images/${value}.png" alt="Coin ${value}">`);
  }
  flipResult.textContent = `Coin: ${values.join(", ")}`;
  coinImage.innerHTML = images.join("");
}
