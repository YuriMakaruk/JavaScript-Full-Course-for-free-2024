// hello(wait);

// function hello(calback) {
//   console.log("hello");
//   calback();
// }

// function wait() {
//   console.log("wait");
// }

// function leave() {
//   console.log("leave");
// }

// function goodbye() {
//   console.log("goodbye");
// }
sum(displayPage, 5, 4);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function display(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myh1").textContent = result;
}
