const secInMin = 60;
const minInHour = 60;
const hoursInDay = 24;
const daysInWeek = 7;

const secInDay = secInMin * minInHour * hoursInDay;
const secondsInWeek = secInDay * daysInWeek;

console.log("Seconds in a day:", secInDay);
console.log("Seconds in a week:", secondsInWeek);