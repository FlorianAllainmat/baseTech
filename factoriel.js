let total = 1;
function factoriel(num) {
  if (num === 1) {
    return total;
  } else {
    total = total * num;
    factoriel(num - 1);
  }
}

factoriel(4);
console.log(total);
