// set inital value to zero
let count = 0;
let d = 2
// select value and buttons
const value = document.querySelector(".numero");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("-2")) {
      count -= d;
    } else if (styles.contains("+2")) {
      count += d;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    if (count === 69) {
      value.style.color = "#b8860b";
    }
    if (count === 66) {
      value.style.color = "#940000";
    }
    value.textContent = count;
  });
});