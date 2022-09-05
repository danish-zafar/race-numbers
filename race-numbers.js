let raceNumber = Math.floor(Math.random() * 1000);
const early = false;
const age = 18;
if (age > 19 && early) {
      raceNumber += 1000;
}
if (age > 19 && early) {
  console.log(`Race will be begin at 9:30am, your race number is: ${raceNumber}.`);
}
else if (age > 19 && early) {
  console.log(`Race will be begin at 10:30am, your race number is: ${raceNumber}.`);
}
else if (age > 19 && early) {
  console.log(`Race will be begin at 11:30am, your race number is: ${raceNumber}.`);
}
else {
  console.log('Please approach the Front Desk for you concerns. Thank You!');
}