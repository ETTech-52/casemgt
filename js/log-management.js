// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebar = document.querySelector('.sidebar');

mobileMenuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


// // Simple modal toggle functionality
document.querySelectorAll('.view-details').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('logDetailModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('logDetailModal').style.display = 'none';
    document.body.style.overflow = '';
});

// // Close modal when clicking outside content
document.getElementById('logDetailModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('logDetailModal')) {
        document.getElementById('logDetailModal').style.display = 'none';
        document.body.style.overflow = '';
    }
});

// // Filter functionality
// document.querySelectorAll('.log-filters select, .log-filters input').forEach(el => {
//     el.addEventListener('change', () => {
//         console.log('Filter changed:', el.value);
//         // In a real app, this would filter the table data
//     });
// });