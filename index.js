////////// Web Page UI
// Elements
var dailyTip = document.querySelector('#daily-tip');

// UI
var pageUI = document.querySelector('.daily-tip-wrapper');
var modal = document.querySelector('.modal');
var bkdrop = document.querySelector('.solid');

// Buttons
var editBtn = document.querySelector('.daily-tip-edit');
var cancelBtn = document.querySelector('.modal-cancel');
var updateBtn = document.querySelector('.modal-update');

/////////////////////////////////////////////////////////////////

// Event Listeners
editBtn.addEventListener('click', displayEditWindow);
cancelBtn.addEventListener('click', hideEditWindow);

// Functions
function displayEditWindow() {
	modal.style.display = 'block';
	bkdrop.style.display = 'block';
}

function hideEditWindow() {
	modal.style.display = 'none';
	bkdrop.style.display = 'none';
}
