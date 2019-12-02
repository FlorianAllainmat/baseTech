tab(["Pablo Picasso", "Macro Polo", "Tya Milo"]);

function tab(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i].split(" ");
    let element1 = element[0];
    let element2 = element[1];
    let conc = element1 + "-" + element2;
    array[i] = conc;
  }
  console.log(array);
}
