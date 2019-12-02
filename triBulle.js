function sort(tab) {
  let changed;
  do {
    changed = false;
    for (let i = 0; i < tab.length - 1; i++) {
      if (tab[i] > tab[i + 1]) {
        let tmp = tab[i];
        tab[i] = tab[i + 1];
        tab[i + 1] = tmp;
        changed = true;
      }
    }
  } while (changed);
}
const tab = [5, 8, 11, 6, 1, 9, 3];
sort(tab);
console.log(tab);
