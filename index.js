sum(display, 544, 8);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function display(result) {
  console.log(result);
  document.getElementById("myh1").textContent = result;
}
