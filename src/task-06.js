`use strict`;
let input = 0;
let total = 0;
while (input !== null) {
  input = prompt(`ваше число ${total}`);
  if (input === null) {
    alert(`Общая сумма чисел ${total}`);
  } else if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }
}
