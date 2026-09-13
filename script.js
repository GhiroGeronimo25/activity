// Event 1
// Indicates when mouse is inside the card, changing the text and border color
const hoverCard = document.getElementById('hoverCard');
const hoverStatus = document.getElementById('hoverStatus');

hoverCard.addEventListener('mouseenter', () => {
    hoverCard.style.borderColor = '#38bdf8';
    hoverStatus.textContent = 'Cursor is currently inside the card boundary.';
});

hoverCard.addEventListener('mouseleave', () => {
    hoverCard.style.borderColor = '#334155';
    hoverStatus.textContent = 'Cursor left the card boundary.';
});


// Event 2
// Indicates when someone input a key in the card
const keyDisplay = document.getElementById('keyDisplay');

window.addEventListener('keydown', (event) => {
    keyDisplay.textContent = `Key: "${event.key}" | Code: ${event.code}`;
});


// Event 3
// Indicates if active/focused or lsot focus when someone makes an input
const kioskInput = document.getElementById('kioskInput');
const inputFeedback = document.getElementById('inputFeedback');

kioskInput.addEventListener('focus', () => {
    inputFeedback.textContent = 'Input field is active and focused.';
    inputFeedback.style.color = '#34d399';
});

kioskInput.addEventListener('blur', () => {
    inputFeedback.textContent = 'Input field lost focus.';
    inputFeedback.style.color = '#94a3b8';
});


// Event 4
// Triggered on right-clicking inside the card
const contextCard = document.getElementById('contextCard');
const contextLog = document.getElementById('contextLog');

contextCard.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    contextLog.textContent = `Custom context menu intercepted at coordinates: X=${event.clientX}, Y=${event.clientY}`;
});


// Event 5
// Removing event listener when clicked 3 times
const actionBtn = document.getElementById('actionBtn');
const btnLog = document.getElementById('btnLog');
let clickCount = 0;

function handleActionClick() {
    clickCount++;
    btnLog.textContent = `Clicks registered: ${clickCount}`;
    
    if (clickCount >= 3) {
        actionBtn.removeEventListener('click', handleActionClick);
        actionBtn.style.background = '#64748b';
        actionBtn.style.cursor = 'not-allowed';
        actionBtn.textContent = 'Listener Removed via removeEventListener()';
        btnLog.textContent = 'Max clicks reached. Event listener has been detached.';
    }
}

actionBtn.addEventListener('click', handleActionClick);
