// This object holds your key-value pairs
const values = {
    "PlayerCount": 15,
    "GameMode": "Capture the Flag",
    "ServerStatus": "Online",
    "MapName": "Desert Oasis"
};

// This function creates an HTML element for each key-value pair
function displayValues() {
    const container = document.getElementById('values-container');

    for (const key in values) {
        const valueItem = document.createElement('div');
        valueItem.classList.add('value-item');

        const keySpan = document.createElement('span');
        keySpan.classList.add('value-key');
        keySpan.textContent = key;

        const valueSpan = document.createElement('span');
        valueSpan.textContent = values[key];

        valueItem.appendChild(keySpan);
        valueItem.appendChild(valueSpan);

        container.appendChild(valueItem);
    }
}

// Call the function when the page loads
window.onload = displayValues;
