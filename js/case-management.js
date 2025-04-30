
       // Toggle modals
       document.getElementById('openCaseModal').addEventListener('click', () => {
        document.getElementById('caseModal').classList.add('show');
    });

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modals, .modal').forEach(modal => {
                modal.classList.remove('show');
            });
        });
    });

    // Toggle view details modal
    document.querySelectorAll('.action-btn.view').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('caseDetailsModal').style.display = 'flex';
        });
    });

    // Toggle mobile menu
    document.getElementById('mobileMenuToggle').addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modals')) {
            document.querySelectorAll('.modals, .modal').forEach(modal => {
                modal.classList.remove('show');
                modal.style.display = 'none';
            });
        }
    });

    // Form submission
    document.getElementById('caseForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle form submission here
        alert('Case saved successfully!');
        document.getElementById('caseModal').classList.remove('show');
    });

    // Responsive adjustments
    function handleResponsive() {
        if (window.innerWidth <= 576) {
            document.getElementById('mobileMenuToggle').style.display = 'flex';
        } else {
            document.getElementById('mobileMenuToggle').style.display = 'none';
            document.querySelector('.sidebar').classList.remove('active');
        }
    }

    window.addEventListener('resize', handleResponsive);
    handleResponsive();


    

    

// // =========Add New Case Modal=============== //

// Elements
const openModalBtn = document.getElementById('openCaseModal');
const modal = document.getElementById('caseModal');
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

// Optional: Close modal if clicked outside content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});
