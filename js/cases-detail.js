
// Toggle modal visibility
document.querySelectorAll('.action-btn.view').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('caseDetailsModal').style.display = 'flex';
    });
});

document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('caseDetailsModal').style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('caseDetailsModal')) {
        document.getElementById('caseDetailsModal').style.display = 'none';
    }
});

// Responsive sidebar toggle for mobile
const sidebarToggle = document.createElement('button');
sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
sidebarToggle.style.position = 'fixed';
sidebarToggle.style.bottom = '20px';
sidebarToggle.style.right = '20px';
sidebarToggle.style.zIndex = '99';
sidebarToggle.style.width = '50px';
sidebarToggle.style.height = '50px';
sidebarToggle.style.borderRadius = '50%';
sidebarToggle.style.backgroundColor = 'var(--primary-color)';
sidebarToggle.style.color = 'white';
sidebarToggle.style.border = 'none';
sidebarToggle.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
sidebarToggle.style.cursor = 'pointer';
sidebarToggle.style.display = 'none';
document.body.appendChild(sidebarToggle);

sidebarToggle.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Show/hide toggle button based on screen size
function checkScreenSize() {
    if (window.innerWidth <= 576) {
        sidebarToggle.style.display = 'block';
    } else {
        sidebarToggle.style.display = 'none';
        document.querySelector('.sidebar').classList.remove('active');
    }
}

window.addEventListener('resize', checkScreenSize);
checkScreenSize();
