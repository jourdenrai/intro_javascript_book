function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if(results) {
    console.log("we have a match");
  }
  else {
    console.log("no match here");
  }
}

has_a_or_e('have');
has_a_or_e('jourden');
has_a_or_e("rico");