// Write your code here!
// Find the main element with id 'main'
const mainElement = document.getElementById('main');

// Remove the main element if it exists
if (mainElement) {
    mainElement.remove();
}

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set the inner text of the new header
//newHeader.innerText = 'This is a new header';

// Set the id of the new header
newHeader.id = 'victory';

// Set the inner text of the new header to include "is the champion" along with your name
const yourName = 'Cheruiyot Robert';
newHeader.innerText = `${yourName} is the champion`;

// Add the new header to the document body
document.body.appendChild(newHeader);

