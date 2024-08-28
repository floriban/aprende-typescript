import "./style.css";

// $ es para referirse al DOM
const $counter = document.querySelector("#counter") as HTMLSpanElement;
const $button = document.querySelector("#btnIncrementar") as HTMLButtonElement;

let count: number = 0;

$button.addEventListener("click", () => {
  count += 1;
  $counter.textContent = count.toString();
});
