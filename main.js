//Race numbers are assigned randomly.
let raceNumber = Math.floor(Math.random() * 1000);


//A variable that indicates whether a runner registered early or not.
let ifRegisteredEarly = true;

//A variable for the runner’s age and set it equal to a number.
let runnerAge = 30;


//A control flow statement that checks whether the runner is an adult AND registered early.
if (ifRegisteredEarly && runnerAge >= 18) {
  raceNumber += 1000
}



//A separate control flow statement that will check age and registration time to determine race time.
if (ifRegisteredEarly && runnerAge > 18) {
  console.log(`Racer: ${raceNumber} - Your race starts at 9:30 am!`)
}
else if (runnerAge > 18 && !ifRegisteredEarly) {
console.log(`Racer: ${raceNumber} - Your race starts at 11:00 am!`)
}
else if(runnerAge < 18) {
  console.log(`Racer: ${raceNumber} - Your race starts at 12:30 pm!`)
} else {
  console.log('Please see the registration desk')
}


