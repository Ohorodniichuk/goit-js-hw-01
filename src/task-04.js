`use strict`;
let credits = `23580`;
let pricePerDroid = 3000;
let droidCalculate = prompt(`Введите количество дроидов`);
if (droidCalculate === null) {
  alert(`Отменено пользователем!`);
} else {
  const totalPrice = pricePerDroid * Number(droidCalculate);
  if (credits < totalPrice) {
    alert('Недостаточно средств на счету!');
  } else {
    alert(
      `вы купили ${droidCalculate} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`,
    );
  }
}
