

   // Toggle advanced search panel
   const advancedSearchToggle = document.getElementById('advancedSearchToggle');
   const advancedSearchPanel = document.getElementById('advancedSearchPanel');

   advancedSearchToggle.addEventListener('click', () => {
       advancedSearchPanel.classList.toggle('active');
       advancedSearchToggle.classList.toggle('active');
   });

   // Mobile menu toggle
   const mobileMenuToggle = document.getElementById('mobileMenuToggle');
   const sidebar = document.querySelector('.sidebar');

   mobileMenuToggle.addEventListener('click', () => {
       sidebar.classList.toggle('active');
   });



document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    if (mobileMenuToggle && sidebar) {
        mobileMenuToggle.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
        });

        sidebarOverlay.addEventListener('click', function () {
            sidebar.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Modal functionality
    const modal = document.getElementById('logDetailModal');
    const modalClose = document.querySelector('.close-modal');
    const viewDetailLinks = document.querySelectorAll('.view-details');

    if (modal && modalClose) {
        // Open modal
        viewDetailLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        // Close modal
        modalClose.addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        // Close when clicking outside
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // Filter functionality
    const filters = document.querySelectorAll('.log-filters select, .log-filters input');
    filters.forEach(filter => {
        filter.addEventListener('change', function () {
            console.log('Filter changed:', this.value);
            // In a real app, this would filter the table data
        });
    });

    // Handle window resize
    function handleResize() {
        // Additional resize handling if needed
    }

    // Initial check and add resize listener
    handleResize();
    window.addEventListener('resize', handleResize);
});