function ContestResponse(input) {
  const nbPerson = parseInt(input.splice(0, 1));
  const listPerson = input;
  totalParticipate = [];

  for (let i = 0; i < 86400000; i++) {
    let OneSecParticipate = 0;
    for (let j = 0; j < nbPerson; j++) {
      let hour = listPerson[j].split(" ");
      let hourStart = hour[0];
      let hourEnd = hour[1];
      if (i >= hourStart && i <= hourEnd) {
        OneSecParticipate++;
      }
    }
    totalParticipate.push(OneSecParticipate);
  }
  console.log(Math.max(...totalParticipate));
}

const data = [
  "22",
  "5110 7165",
  "7292 8570",
  "21 5795",
  "2255 3773",
  "955 4873",
  "1857 17976",
  "6887 10686",
  "4502 4698",
  "5998 21444",
  "5580 9683",
  "3370 10274",
  "25925 26727",
  "1614 23816",
  "2512 12236",
  "2407 38341",
  "31100 41975",
  "22651 32428",
  "15033 35202",
  "15743 33530",
  "4109 53158",
  "11986 31638",
  "2047 12212",
  "2697 53812"
];

ContestResponse(data);
