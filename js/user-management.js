
// Mobile Menu Toggle
document.getElementById('mobileMenuToggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});


// // =========Add New Case Modal=============== //

// Elements
const openModalBtn = document.getElementById('openUserModal');
const modal = document.getElementById('userModal');
const closeButtons = document.querySelectorAll('.close-modal');

// Open modal on button click
openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

// Close modal on "×" or Cancel click
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
});