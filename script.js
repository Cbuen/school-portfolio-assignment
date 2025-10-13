// Clock functionality
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true 
  });
  document.getElementById('clock').textContent = timeString;
}

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);

// Draggable Profile Dialog
const profileDialog = document.getElementById('profileDialogBox');
const profileTitleBar = document.getElementById('profileTitleBar');

let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

// Calculate center position on load
function centerProfileDialog() {
  const dialogWidth = 600;
  const dialogHeight = 400; // approximate
  const x = (window.innerWidth - dialogWidth) / 2;
  const y = (window.innerHeight - dialogHeight) / 2 - 24; // subtract taskbar height
  
  profileDialog.style.left = x + 'px';
  profileDialog.style.top = y + 'px';
}

// Center dialog on load
centerProfileDialog();

// Recenter on window resize
window.addEventListener('resize', centerProfileDialog);

profileTitleBar.addEventListener('mousedown', (e) => {
  isDragging = true;
  const rect = profileDialog.getBoundingClientRect();
  dragOffsetX = e.clientX - rect.left;
  dragOffsetY = e.clientY - rect.top;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    profileDialog.style.left = (e.clientX - dragOffsetX) + 'px';
    profileDialog.style.top = (e.clientY - dragOffsetY) + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

// Classes Dialog functionality
const classesIcon = document.getElementById('classesIcon');
const classesDialog = document.getElementById('classesDialog');
const closeClassesDialog = document.getElementById('closeClassesDialog');
const closeClassesDialogBtn = document.getElementById('closeClassesDialogBtn');

classesIcon.addEventListener('click', () => {
  classesDialog.classList.remove('hidden');
});

closeClassesDialog.addEventListener('click', () => {
  classesDialog.classList.add('hidden');
});

closeClassesDialogBtn.addEventListener('click', () => {
  classesDialog.classList.add('hidden');
});

// Class item click handlers
const classItems = document.querySelectorAll('.class-item');
classItems.forEach(item => {
  item.addEventListener('click', () => {
    const classCode = item.getAttribute('data-code');
    alert(`You clicked on ${classCode}. This would navigate to the class page.`);
  });
});
