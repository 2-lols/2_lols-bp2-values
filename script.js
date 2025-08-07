// Knife values to display when the button is clicked
const knifesValues = {
    "Azure": "0.5",
    "Arctic": "1"
};

// Function to display the knife values in a table
function displayKnifesTable(values) {
    const tableBody = document.getElementById('knifes-table-body');
    tableBody.innerHTML = ''; // Clear the table body

    for (const item in values) {
        const row = tableBody.insertRow();
        const itemCell = row.insertCell();
        const valueCell = row.insertCell();
        itemCell.textContent = item;
        valueCell.textContent = values[item]; // Correctly reference the value
    }
}

// Function to handle the button click
function onKnifesButtonClick() {
    displayKnifesTable(knifesValues);
}

// Add the click event listener to the button when the page loads
window.onload = function() {
    const button = document.getElementById('knifes-button');
    if (button) {
        button.onclick = onKnifesButtonClick;
    }
};
