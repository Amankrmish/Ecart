let sportsone: string[] = ["Golf", "cricket"];
sportsone.push("tennis");
sportsone.push("Baseball");

// array in typescript is always growable in nature.
for (let tempSport of sportsone) {
  console.log(tempSport);
}
