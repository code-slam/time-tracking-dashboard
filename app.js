const tabs=[... document.querySelectorAll('[role=tab')];
const panels=[... document.querySelectorAll('[role=tabpanel')];


function handletab(e){
    const paneltocontrol=e.currentTarget.getAttribute('aria-controls');
    panels.forEach(p=>p.setAttribute('aria-hidden',`${p.id===paneltocontrol?'false':'true'}`))

}
tabs.forEach(tab=>{
    tab.addEventListener('click',handletab)
})
const toggleButton = document.querySelector(".theme-toggle");

toggleButton.addEventListener("click", () => {
    const body = document.body;

        
        body.classList.toggle('light');

    
});
const avatarBtn = document.getElementById('avatar-btn');
const modal = document.getElementById('modal-div');
const closeModal = document.getElementById('cancel-btn');

avatarBtn.addEventListener('click', () => {
  modal.classList.add('show'); // Display the modal
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show'); // Hide the modal
});
const saveNameBtn = document.getElementById('save-btn');

const username = document.getElementById('username');
const nameInput = document.getElementById('new-name');



saveNameBtn.addEventListener('click', () => {
  const newName = nameInput.value.trim();
  if (newName) {
    username.innerHTML = `${newName}`;
    modal.classList.remove('show');
    nameInput.value = ''; // Clear input
  } else {
    alert('Please enter a valid name.');
  }
});


const avattn = document.getElementById('avatar-btn');
const tooltip = document.getElementById('tooltip');

function showTooltip() {
  tooltip.classList.add('show'); // Show tooltip
  avattn.classList.add('blinking'); // Start blinking border

  // Hide tooltip and stop blinking after 3 seconds
  setTimeout(() => {
    tooltip.classList.remove('show');
    avattn.classList.remove('blinking');
  }, 3000); // Adjust duration as needed
}

// Call the function when the page loads
window.addEventListener('load', showTooltip);
