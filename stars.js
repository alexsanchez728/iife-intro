var SolarSystem = (function(oldSolarSystem){
	const stars = ["sirius", "betelgeuse", "Vega"];

	oldSolarSystem.getStars = function() {
		return stars;
	}
	oldSolarSystem.setStar = function(newStar) {
		stars.push(newStar);
		return stars;
	}
	oldSolarSystem.blowUpAStar = function() {
		stars.pop();
	}

	return oldSolarSystem

})(SolarSystem || {});