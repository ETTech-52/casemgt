
// // view detail modal functionality
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

