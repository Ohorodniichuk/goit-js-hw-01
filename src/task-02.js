`use strict`;
const total = 100;
let message;
const ordered = prompt('Введите количество товара');
if (ordered <= total) {
  message = 'Заказ оформлен, с вами свяжется менеджер. Благодарим за покупку!';

  if (ordered <= 0) {
    message = 'Ошибка!';
  }
} else {
  message = 'На складе недостаточно товаров!';
}

console.log(message);
