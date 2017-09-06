// let Something = (function(oldSomething) {
// 	oldSomething.niceFunction = funciton(){
// 		console.log("im a nice function");
// 	}
// 	return oldSomething;

// })(Something || {});

var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	const spaceCraft = ["Sputnik", "Apollo", "Talos I", "Ur mom", "Gemini"];
	oldSolarSystem.getPlanets = function() {
		return planets;
	};

	oldSolarSystem.setPlanet = function(newPlanet) {
		planets.push(newPlanet);
	}

	oldSolarSystem.getSpaceCraft = function() {
		return spaceCraft;
	}

	oldSolarSystem.setSpaceCraft = function(newCraft) {
		spaceCraft.push(newCraft)
	}

	return oldSolarSystem;
})(SolarSystem || {});

let myPlanets = SolarSystem.getPlanets();
let mySpaceCraft = SolarSystem.getSpaceCraft();

console.log("planets", myPlanets);