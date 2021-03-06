export const counter = function() {
  const input = document.querySelector(".counter-input");
  const increase = () => input.value++;
  const decrease = () => input.value > 1 ? input.value-- : null;

  document.querySelector('.counter-plus').addEventListener('click', increase );
  document.querySelector('.counter-minus').addEventListener('click', decrease );
}
