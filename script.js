//your code here
// Get all the elements that store the prices of each item
const prices = document.querySelectorAll('[data-ns-test="prices"]');

// Initialize a variable to store the total price
let totalPrice = 0;

// Loop through each price element and add its value to the total price
for (let i = 0; i < prices.length; i++) {
    totalPrice += parseFloat(prices[i].innerText);
}

// Create a new row for displaying the total price
const newRow = document.createElement('tr');
const newCell = document.createElement('td');

// Set the data attribute for identifying the new cell
newCell.setAttribute('data-ns-test', 'grandTotal');

// Set the text content of the new cell to the total price
newCell.textContent = totalPrice.toFixed(2);

// Append the new cell to the new row
newRow.appendChild(newCell);

// Append the new row to the table
const table = document.querySelector('table');
table.appendChild(newRow);
