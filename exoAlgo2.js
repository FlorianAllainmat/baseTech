moyenne(["4 12", "12 16", "1 18"]);

function moyenne(array) {
  for (let i = 0; i < array.length; i++) {
    let student = array[i];
    let medium = 0;
    for (let j = 0; j < student.length; j++) {
      console.log(medium);
      medium = parseInt(student[j]) + parseInt(student[j + 1]);
    }
    array[i] = medium;
  }
  console.log(array);
}
