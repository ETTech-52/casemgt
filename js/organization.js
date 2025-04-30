      // Mobile Menu Toggle
      document.getElementById('mobileMenuToggle').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
    });

    // Modal Handling
    const openOrgModal = document.getElementById('openOrgModal');
    const orgModal = document.getElementById('orgModal');
    const orgDetailsModal = document.getElementById('orgDetailsModal');
    const confirmModal = document.getElementById('confirmModal');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    // Open Add Organization Modal
    if (openOrgModal) {
        openOrgModal.addEventListener('click', function() {
            orgModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }

    // Close Modals
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
