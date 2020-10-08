let raceNumber = Math.floor(Math.random() * 1000);

let ifRegisteredEarly = true;

let runnerAge = 30;

if (ifRegisteredEarly && runnerAge >= 18) {
  raceNumber += 1000
}

if (ifRegisteredEarly && runnerAge >= 18) {
  console.log(`Racer: ${raceNumber} - Your race starts at 9:30 am!`)
}
else if (runnerAge >= 18 && ifRegisteredEarly === false) {
console.log(`Racer: ${raceNumber} - Your race starts at 11:00 am!`)
}
else {
  console.log(`Racer: ${raceNumber} - Your race starts at 12:30 pm!`)
}


