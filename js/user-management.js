
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle elements
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    // Toggle sidebar function
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }

    // Event listeners
    mobileMenuToggle.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking on menu items (mobile only)
    if (window.innerWidth <= 991) {
        document.querySelectorAll('.sidebar-menu a').forEach(link => {
            link.addEventListener('click', toggleSidebar);
        });
    }

    // Responsive adjustments
    function handleResponsive() {
        if (window.innerWidth <= 991) {
            mobileMenuToggle.style.display = 'flex';
            sidebar.classList.remove('active');
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        } else {
            mobileMenuToggle.style.display = 'none';
            sidebar.classList.add('active');
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    // Initialize and handle resize
    handleResponsive();
    window.addEventListener('resize', handleResponsive);
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