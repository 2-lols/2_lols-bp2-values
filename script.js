// Knife values to display when the button is clicked
const knifesValues = {
    "Azure": "0.5"
};

// This function will display a given set of values
function displayValues(valuesToShow) {
    const container = document.getElementById('values-container');
    container.innerHTML = ''; // Clear the container first

    for (const key in valuesToShow) {
        const valueItem = document.createElement('div');
        valueItem.classList.add('value-item');
        const keySpan = document.createElement('span');
        keySpan.classList.add('value-key');
        keySpan.textContent = key;
        const valueSpan = document.createElement('span');
        valueSpan.textContent = valuesToShow[key];
        valueItem.appendChild(keySpan);
        valueItem.appendChild(valueSpan);
        container.appendChild(valueItem);
    }
}

// Function to handle the button click
function onKnifesButtonClick() {
    displayValues(knifesValues);
}

// Add the click event listener to the button when the page loads
window.onload = function() {
    const button = document.getElementById('knifes-button');
    if (button) {
        button.onclick = onKnifesButtonClick;
    }
};
