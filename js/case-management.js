
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






document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const detailsModal = document.getElementById('caseDetailsModal');
    const viewButtons = document.querySelectorAll('.action-btn.view');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Show modal
    const showModal = () => {
        detailsModal.style.display = 'flex';
        setTimeout(() => {
            detailsModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }, 10);
    };

    // Hide modal
    const hideModal = () => {
        detailsModal.classList.remove('show');
        document.body.style.overflow = '';
        setTimeout(() => {
            detailsModal.style.display = 'none';
        }, 300);
    };

    // Event Listeners
    viewButtons.forEach(button => {
        button.addEventListener('click', showModal);
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', hideModal);
    });

    // Close on outside click
    detailsModal.addEventListener('click', (e) => {
        if (e.target === detailsModal) {
            hideModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && detailsModal.classList.contains('show')) {
            hideModal();
        }
    });
});