let getDayOfWeek = (date) => {
  let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return daysOfWeek[date.getDay()];
};

let date = new Date("February 8, 1997");
console.log(getDayOfWeek(date));
