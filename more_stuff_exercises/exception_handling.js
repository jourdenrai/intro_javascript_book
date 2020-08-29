let names = ["Shaina", "Oscar", "Rico", undefined, "Nala"];

names.forEach((name) => {
  try {
    console.log(`${name}'s has ${name.length} letters in it`);
  } catch (exception) {
    console.log("something went wrong");
  }
});
