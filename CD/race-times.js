let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = true;

let runnersAge = 19;

if (regEarly && runnersAge > 18) {
    raceNumber += 1000;
}

if (regEarly && runnersAge > 18) {
    console.log(`You will race at 9:30am, racer #${raceNumber}`);
} else if (!regEarly && runnersAge > 18){
    console.log(`You will race at 11:00am, racer #${raceNumber}`);
} else if (runnersAge < 18) {
    console.log(`You will race at 12:30pm, racer #${raceNumber}`);
} else if (runnersAge === 18){
    console.log(`Please see the registration desk`);
}