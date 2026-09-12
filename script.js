// Event 1: mouseenter / mouseleave
// Triggered when the mouse enters the hoverCard element; changes border color and feedback text.
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


// Event 2: keydown
// Triggered globally on the window whenever any keyboard key is pressed; outputs key metadata to screen.
const keyDisplay = document.getElementById('keyDisplay');

window.addEventListener('keydown', (event) => {
    keyDisplay.textContent = `Key: "${event.key}" | Code: ${event.code}`;
});


// Event 3: focus & blur
// Triggered when the text input gains or loses focus; updates interface feedback styling.
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


// Event 4: contextmenu
// Triggered on right-clicking inside the contextCard element; suppresses default menu and logs custom event.
const contextCard = document.getElementById('contextCard');
const contextLog = document.getElementById('contextLog');

contextCard.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Prevents default browser right-click menu
    contextLog.textContent = `Custom context menu intercepted at coordinates: X=${event.clientX}, Y=${event.clientY}`;
});


// Event 5: click (with runtime removeEventListener requirement)
// Triggered when clicking the action button; tracks counts up to 3 clicks, then permanently removes its own listener.
const actionBtn = document.getElementById('actionBtn');
const btnLog = document.getElementById('btnLog');
let clickCount = 0;

function handleActionClick() {
    clickCount++;
    btnLog.textContent = `Clicks registered: ${clickCount}`;
    
    if (clickCount >= 3) {
        // Requirement: Remove event listener at runtime once threshold is reached
        actionBtn.removeEventListener('click', handleActionClick);
        actionBtn.style.background = '#64748b';
        actionBtn.style.cursor = 'not-allowed';
        actionBtn.textContent = 'Listener Removed via removeEventListener()';
        btnLog.textContent = 'Max clicks reached. Event listener has been detached.';
    }
}

actionBtn.addEventListener('click', handleActionClick);
