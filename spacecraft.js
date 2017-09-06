var SolarSystem = (function(oldSolarSystem){
	const spaceCraft = ["Sputnik", "Apollo", "Talos I", "Ur mom", "Gemini"];

	oldSolarSystem.getSpaceCraft = function() {
		return spaceCraft;
	}

	oldSolarSystem.setSpaceCraft = function(newCraft) {
		spaceCraft.push(newCraft)
	}

	return oldSolarSystem;
})(SolarSystem || {});