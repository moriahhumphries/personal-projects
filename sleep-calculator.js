const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 6;
    } else if (day === 'thursday') {
        return 9;
    } else if (day === 'friday') {
        return 5;
    } else if (day === 'saturday') {
        return 10;
    } else if (day === 'sunday') {
        return 11;
    }
}


const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')


const getIdealSleepHours = () => {
    let idealHours = 10;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!')
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours = idealSleepHours) + ' hours more than you needed!');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You are missing ' + (idealSleepHours - actualSleepHours) + ' hours of sleep!');
    }

    console.log(idealSleepHours);
    console.log(actualSleepHours);
}
calculateSleepDebt();



