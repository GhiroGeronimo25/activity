// Event 1: click
// Button pulses and cycles through theme colors each click
const pulseBtn = document.getElementById('pulseBtn');
const themeBtn = document.getElementById('themeBtn');
const colors = ['#3b82f6', '#22c55e', '#f97316', '#ec4899'];
let colorIndex = 0;

pulseBtn.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    pulseBtn.style.background = colors[colorIndex];
    pulseBtn.classList.remove('pulse');
    void pulseBtn.offsetWidth;
    pulseBtn.classList.add('pulse');
});

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});


// Event 2: mouseover / mouseout
// Reveals hidden info while the cursor is inside the card
const hoverCard = document.getElementById('hoverCard');
const hoverStatus = document.getElementById('hoverStatus');
const hiddenInfo = document.getElementById('hiddenInfo');

hoverCard.addEventListener('mouseover', () => {
    hoverCard.style.borderColor = '#38bdf8';
    hoverStatus.textContent = 'Cursor is inside the card.';
    hiddenInfo.classList.add('show');
});

hoverCard.addEventListener('mouseout', () => {
    hoverCard.style.borderColor = '#334155';
    hoverStatus.textContent = 'Hover your cursor over this card.';
    hiddenInfo.classList.remove('show');
});


// Event 3: keydown / keyup
// Live character counter while typing in the textarea
const counterInput = document.getElementById('counterInput');
const charCount = document.getElementById('charCount');
const maxChars = counterInput.maxLength;

counterInput.addEventListener('keydown', () => {
    charCount.style.color = '#38bdf8';
});

counterInput.addEventListener('keyup', () => {
    const length = counterInput.value.length;
    charCount.textContent = `${length} / ${maxChars} characters`;
    charCount.style.color = length >= maxChars ? '#f87171' : '#94a3b8';
});


// Event 4: input
// Live search filter over the fruit list as the user types
const searchInput = document.getElementById('searchInput');
const fruitList = document.getElementById('fruitList');
const fruitItems = fruitList.querySelectorAll('li');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    fruitItems.forEach((item) => {
        const matches = item.textContent.toLowerCase().includes(query);
        item.style.display = matches ? '' : 'none';
    });
});


// Event 5: submit
// Validates the form and shows a message without reloading the page
const kioskForm = document.getElementById('kioskForm');
const usernameInput = document.getElementById('usernameInput');
const formFeedback = document.getElementById('formFeedback');

kioskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = usernameInput.value.trim();

    if (value.length === 0) {
        formFeedback.textContent = 'Username cannot be empty.';
        formFeedback.style.color = '#f87171';
    } else if (value.length < 3) {
        formFeedback.textContent = 'Username must be at least 3 characters.';
        formFeedback.style.color = '#f87171';
    } else {
        formFeedback.textContent = `Welcome, ${value}! Registration successful.`;
        formFeedback.style.color = '#34d399';
        kioskForm.reset();
    }
});
