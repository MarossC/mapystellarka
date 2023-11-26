function setMap(imageSrc, maxX, maxY) {
    document.getElementById("xInput").value = '';
    document.getElementById("yInput").value = '';

    const previousRedDot = document.querySelector(".red-dot");
    if (previousRedDot) {
        document.getElementById("mapContainer").removeChild(previousRedDot);
    }

    // Set the background image of the map container
    const mapContainer = document.getElementById("mapContainer");
    mapContainer.style.backgroundImage = `url('${imageSrc}')`;
    mapContainer.classList.add("border");

    // Set the dimensions of the map container to match the image
    if (imageSrc == "image30.jpg"){
        mapContainer.style.width = `${maxX / 3}px`;
        mapContainer.style.height = `${maxY / 3}px`;
    }
    else{
        mapContainer.style.width = `${maxX / 2}px`;
        mapContainer.style.height = `${maxY / 2}px`;
    }


    // Set the maximum input values for X and Y coordinates
    document.getElementById("xInput").setAttribute("max", maxX);
    document.getElementById("yInput").setAttribute("max", maxY);

    // Get references to the X and Y input fields
    const xInputbefore = document.getElementById("xInput");
    const xInput = JSON.stringify(xInputbefore);
    const yInputbefore = document.getElementById("yInput");
    const yInput = JSON.stringify(yInputbefore);

    // Add a keydown event listener to the X input field
    xInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default Enter key behavior (e.g., form submission)
            searchMap(imageSrc, maxX, maxY);
        }
    });

    // Add a keydown event listener to the Y input field
    yInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default Enter key behavior (e.g., form submission)
            searchMap(imageSrc, maxX, maxY);
        }
    });
}

function searchMap() {
    // Get values from input fields
    const xCoordinatebefore = parseFloat(document.getElementById("xInput").value);
    const xCoordinate = JSON.stringify(xCoordinatebefore);
    const yCoordinatebefore = parseFloat(document.getElementById("yInput").value);
    const yCoordinate = JSON.stringify(yCoordinatebefore);

    // Get the maximum input values for X and Y coordinates
    const maxX = parseFloat(document.getElementById("xInput").getAttribute("max"));
    const maxY = parseFloat(document.getElementById("yInput").getAttribute("max"));

    // Check if coordinates are valid numbers and within the specified range
    if (isNaN(xCoordinate) || isNaN(yCoordinate) || xCoordinate < 0 || xCoordinate > maxX || yCoordinate < 0 || yCoordinate > maxY) {
        alert(`Invalid coordinates. Please enter valid numbers between 0 and ${maxX} for X and 0 and ${maxY} for Y.`);
        return;
    }

    // Remove the previous red dot if it exists
    const previousRedDot = document.querySelector(".red-dot");
    if (previousRedDot) {
        document.getElementById("mapContainer").removeChild(previousRedDot);
    }

    // Create a new red dot element
    const redDot = document.createElement("div");
    redDot.className = "red-dot";

    // Calculate the position based on percentages, ensuring it's within the container
    const containerWidth = document.getElementById("mapContainer").offsetWidth;
    const containerHeight = document.getElementById("mapContainer").offsetHeight;
    const dotSize = 10; // The size of the red dot
    const scaledX = (xCoordinate / maxX) * (containerWidth - dotSize);
    const scaledY = (yCoordinate / maxY) * (containerHeight - dotSize);

    // Set the position of the red dot
    redDot.style.left = `${scaledX}px`;
    redDot.style.top = `${scaledY}px`;

    // Append the new red dot to the map container
    const mapContainer = document.getElementById("mapContainer");
    mapContainer.appendChild(redDot);
}