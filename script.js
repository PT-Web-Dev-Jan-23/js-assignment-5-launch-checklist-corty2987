// const { addDestinationInfo } = require("../scriptHelper");

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //    console.log(listedPlanets)
    }).then(function () {
        //    console.log(listedPlanets)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document, 
            selectedPlanet.name, 
            selectedPlanet.moons, 
            selectedPlanet.star, 
            selectedPlanet.distance, 
            selectedPlanet.diameter, 
            selectedPlanet.image
            );
        });
        
        let form = document.querySelector("form");
        let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    });
});

    
    
    