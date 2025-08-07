// Knife values to display when the button is clicked
const knifesValues = {
    "Arctic": {
        "OG_Value": "1",
        "Tag_Serial_Value": "N/A"
    },
    "Jade": {
        "OG_Value": "0.5",
        "Tag_Serial_Value": "N/A"
    },
    "Azure": {
        "OG_Value": "0.5",
        "Tag_Serial_Value": "N/A"
    },
    "Sakura": {
        "OG_Value": "2",
        "Tag_Serial_Value": "N/A"
    },
    "Rgb eternal": {
        "OG_Value": "3",
        "Tag_Serial_Value": "5-6"
    }
};

// Function to display the knife values in a table
function displayKnifesTable(values) {
    const tableBody = document.getElementById('knifes-table-body');
    tableBody.innerHTML = ''; // Clear the table body

    for (const item in values) {
        const row = tableBody.insertRow();
        
        const itemCell = row.insertCell();
        itemCell.textContent = item;
        
        const ogValueCell = row.insertCell();
        ogValueCell.textContent = values[item].OG_Value;

        const tagSerialCell = row.insertCell();
        tagSerialCell.textContent = values[item].Tag_Serial_Value;
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
