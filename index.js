let circle = document.querySelector(".circle");
let pointerloc = document.querySelector("#main");

document.addEventListener("mousemove", function (e) {
  let xValue = e.clientX;
  let yValue = e.clientY;
  circle.style.top = `${yValue}px`;
  circle.style.left = `${xValue}px`;
})
