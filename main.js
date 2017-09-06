// let Something = (function(oldSomething) {
// 	oldSomething.niceFunction = funciton(){
// 		console.log("im a nice function");
// 	}
// 	return oldSomething;

// })(Something || {});

SolarSystem.setPlanet("Planet X");

let myPlanets = SolarSystem.getPlanets();
let mySpaceCraft = SolarSystem.getSpaceCraft();
let myStars = SolarSystem.getStars();

console.log("planets", myPlanets);
console.log("space stuff", mySpaceCraft);
console.log("stars", myStars);