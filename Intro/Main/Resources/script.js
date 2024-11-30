// Burger Menu Toggle
const BurgerMenu = document.querySelector('.burger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
BurgerMenu.addEventListener('click', () => {
    BurgerMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// Get the modal, iframe and the link
const tosLink = document.getElementById('tosLink');
const tosModal = document.getElementById('tosModal');
const tosIframe = document.getElementById('tosIframe');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function() {
    tosModal.style.display = 'none';  // Hide the modal
    tosIframe.src = "";  // Reset iframe content
});

// Open the modal and load the ToS content when the link is clicked
tosLink.addEventListener('click', function(e) {
    e.preventDefault();  // Prevent default link behavior
    tosModal.style.display = 'block';  // Show the modal
    tosIframe.src = "./Resources/Terms_Of_Service.html";  // Load the ToS content from the resources folder
});
