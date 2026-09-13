// Event 1: click
// Button pulses and cycles through colors each click; LED flashes on each press
const pulseBtn = document.getElementById('pulseBtn');
const clickLed = document.getElementById('clickLed');
const colors = ['#ffb454', '#4ade80', '#38bdf8', '#ec4899'];
let colorIndex = 0;
let clickLedTimeout;

pulseBtn.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    pulseBtn.style.color = colors[colorIndex];
    pulseBtn.style.borderColor = colors[colorIndex];
    pulseBtn.classList.remove('pulse');
    void pulseBtn.offsetWidth; // restart animation
    pulseBtn.classList.add('pulse');

    clickLed.classList.add('active');
    clearTimeout(clickLedTimeout);
    clickLedTimeout = setTimeout(() => clickLed.classList.remove('active'), 400);
});


// Event 2: mouseover / mouseout
// Reveals hidden info while the cursor is inside the card; LED tracks hover state
const hoverCard = document.getElementById('hoverCard');
const hoverStatus = document.getElementById('hoverStatus');
const hiddenInfo = document.getElementById('hiddenInfo');
const hoverLed = document.getElementById('hoverLed');

hoverCard.addEventListener('mouseover', () => {
    hoverStatus.textContent = 'Cursor is inside the card.';
    hiddenInfo.classList.add('show');
    hoverLed.classList.add('active');
});

hoverCard.addEventListener('mouseout', () => {
    hoverStatus.textContent = 'Hover your cursor over this card.';
    hiddenInfo.classList.remove('show');
    hoverLed.classList.remove('active');
});


// Event 3: keydown / keyup
// Live character counter while typing in the textarea; LED lit while a key is down
const counterInput = document.getElementById('counterInput');
const charCount = document.getElementById('charCount');
const keyLed = document.getElementById('keyLed');
const maxChars = counterInput.maxLength;

counterInput.addEventListener('keydown', () => {
    keyLed.classList.add('active');
});

counterInput.addEventListener('keyup', () => {
    const length = counterInput.value.length;
    charCount.textContent = `${length} / ${maxChars} characters`;
    keyLed.classList.remove('active');
    keyLed.classList.toggle('err', length >= maxChars);
});


// Event 4: input
// Live search filter over the fruit list as the user types; LED lit while filtering
const searchInput = document.getElementById('searchInput');
const fruitList = document.getElementById('fruitList');
const fruitItems = fruitList.querySelectorAll('li');
const searchLed = document.getElementById('searchLed');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    fruitItems.forEach((item) => {
        const matches = item.textContent.toLowerCase().includes(query);
        item.style.display = matches ? '' : 'none';
    });
    searchLed.classList.toggle('active', query.length > 0);
});


// Event 5: submit
// Validates the form and shows a message without reloading the page
const kioskForm = document.getElementById('kioskForm');
const usernameInput = document.getElementById('usernameInput');
const formFeedback = document.getElementById('formFeedback');
const formLed = document.getElementById('formLed');

kioskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = usernameInput.value.trim();

    if (value.length === 0) {
        formFeedback.textContent = 'Username cannot be empty.';
        formLed.classList.remove('ok');
        formLed.classList.add('err');
    } else if (value.length < 3) {
        formFeedback.textContent = 'Username must be at least 3 characters.';
        formLed.classList.remove('ok');
        formLed.classList.add('err');
    } else {
        formFeedback.textContent = `Welcome, ${value}! Registration successful.`;
        formLed.classList.remove('err');
        formLed.classList.add('ok');
        kioskForm.reset();
    }
});
