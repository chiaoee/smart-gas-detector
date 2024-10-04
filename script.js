// JavaScript to handle the toggle switch functionality
const toggleInput = document.querySelector('.panel4 .toggle input');
const ppmValue = document.querySelector('.panel2 .ppm-value');
const valve = document.querySelector('.panel4 .valveOpen');
const panel3 = document.querySelector('.panel3');
const notificationDiv = document.querySelector('.panel3 .noti');
const historyDiv = document.querySelector('.panel3 .history');

// Get the elements
const settingsIcon = document.querySelector('.setting-icon');
const modal = document.getElementById('overlayModal');
const closeModal = document.querySelector('.close-btn');
// Get the toggle input for panel 2
const toggleInputPanel2 = document.querySelector("#toggle\\.panel2 input");
const toggleInputPanel3 = document.querySelector("#toggle\\.panel3 input");
const toggleInputPanel4 = document.querySelector("#toggle\\.panel4 input");
const toggleInputPanel5 = document.querySelector("#toggle\\.panel5 input");

let newPanel1 = null;
let newPanel2 = null;

toggleInput.addEventListener('change', () => {
    if (toggleInput.checked) {
        // If the valve is ON
        ppmValue.textContent = '10 PPM'; // Restore PPM value
        valve.textContent = 'Valve Open';
        panel3.style.backgroundColor = 'grey'; // Keep the panel color grey

        // Remove the new panels if they exist
        if (newPanel1) newPanel1.remove();
        if (newPanel2) newPanel2.remove();
        newPanel1 = null;
        newPanel2 = null;
    } 
    else {
        // If the valve is OFF
        ppmValue.textContent = '0 PPM'; // Set PPM value to 0
        valve.textContent = 'Valve Closed';
        
        // Create and insert newPanel1 below the Notification
        newPanel1 = document.createElement('div');
        newPanel1.className = 'newPanel';

        // Create the first line (centered, red)
        const firstLine = document.createElement('div');
        firstLine.textContent = 'Gas Turned Off'; // Change this text as needed
        firstLine.className = 'first-line'; // Add a class for styling
        
        // Create the second line (left-aligned, black)
        const secondLine = document.createElement('div');
        secondLine.textContent = 'The gas leak has been addressed. Please ensure the area is ventilated and monitor for any further issues.'; // Change this text as needed
        secondLine.className = 'second-line'; // Add a class for styling
        
        // Append the lines to newPanel1
        newPanel1.appendChild(firstLine);
        newPanel1.appendChild(secondLine);
 
         // Insert the newPanel1 below the Notification
         notificationDiv.insertAdjacentElement('afterend', newPanel1);


        // Create and insert newPanel2 below the History
        newPanel2 = document.createElement('div');
        newPanel2.className = 'newPanel';
        newPanel2.textContent = '19/11/2021 - 6969 PPM'; // Example message
        newPanel2.style.textAlign = 'left'; // Left-align the text
        historyDiv.insertAdjacentElement('afterend', newPanel2);
    }
});

// Function to open the modal
settingsIcon.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Function to close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


// Add event listener for toggle change
toggleInputPanel2.addEventListener("change", () => {
    if (toggleInputPanel2.checked) {
        console.log("Gas Panel 2 is ON");
        // Additional actions when toggled ON
    } else {
        console.log("Gas Panel 2 is OFF");
        // Additional actions when toggled OFF
    }
});

// Add event listener for toggle change
toggleInputPanel3.addEventListener("change", () => {
    if (toggleInputPanel3.checked) {
        console.log("Gas Panel 3 is ON");
        // Additional actions when toggled ON
    } else {
        console.log("Gas Panel 3 is OFF");
        // Additional actions when toggled OFF
    }
});

// Add event listener for toggle change
toggleInputPanel4.addEventListener("change", () => {
    if (toggleInputPanel4.checked) {
        console.log("Gas Panel 4 is ON");
        // Additional actions when toggled ON
    } else {
        console.log("Gas Panel 4 is OFF");
        // Additional actions when toggled OFF
    }
});

// Add event listener for toggle change
toggleInputPanel5.addEventListener("change", () => {
    if (toggleInputPanel5.checked) {
        console.log("Gas Panel 5 is ON");
        // Additional actions when toggled ON
    } else {
        console.log("Gas Panel 5 is OFF");
        // Additional actions when toggled OFF
    }
});
