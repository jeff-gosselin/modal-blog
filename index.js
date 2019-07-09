// Daily Tip
var dailyTip = document.querySelector('#daily-tip');
var editTipWindow = document.querySelector('.modal-edit-tip');
var content = 'Don\'t take life so seriously!';
var editedTip = '';
dailyTip.innerText = content;

// UI Elements
var pageUI = document.querySelector('.daily-tip-wrapper');
var modal = document.querySelector('.modal');
var bkdrop = document.querySelector('.solid');

// Buttons
var editBtn = document.querySelector('.daily-tip-edit');
var cancelBtn = document.querySelector('.modal-cancel');
var updateBtn = document.querySelector('.modal-update');

/////////////////////////////////////////////////////////////////

// Event Listeners
editBtn.addEventListener('click', displayModal);
cancelBtn.addEventListener('click', hideModal);
updateBtn.addEventListener('click', updateTip);
bkdrop.addEventListener('click', hideModal);
editTipWindow.addEventListener('input', editTipOfDay);

// Functions
function displayModal() {
	modal.style.display = 'block';
	bkdrop.style.display = 'block';
	editedTip = content;
	editTipWindow.value = content;
}

function hideModal() {
	modal.style.display = 'none';
	bkdrop.style.display = 'none';
}

function editTipOfDay() {
	editedTip = editTipWindow.value;
}

function updateTip() {
	hideModal();
	if (editedTip.trim().length > 0) {
		content = editedTip;
		dailyTip.innerText = content;
	}
}
