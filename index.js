function caisse(number) {
  const ten = 10;
  const five = 5;
  const two = 2;

  let numberTen = 0;
  let numberFive = 0;
  let numberTwo = 0;
  let lastMoney = 0;

  let afterTen = Number;
  let afterFive = Number;

  if (number !== NaN && number > 0) {
    numberTen = Math.trunc(number / ten);
    afterTen = number % ten;

    if (afterTen === 6 || afterTen === 8) {
      numberTwo = afterTen / two;
    } else {
      if (afterTen >= 5) {
        numberFive = 1;
        afterFive = afterTen - five;
        numberTwo = afterFive / two;
      } else {
        numberTwo = Math.trunc(afterTen / two);
        lastMoney = afterTen % 2;
      }
    }

    console.log(
      "numberTen",
      numberTen,
      "numberFive",
      numberFive,
      "numberTwo",
      numberTwo,
      "lastMoney",
      lastMoney
    );
  } else {
    console.log(
      "La valeur n'est pas un nombre ou alors il n'est pas supérieur à Zero"
    );
  }
}

caisse(156);
