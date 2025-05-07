
// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebar = document.querySelector('.sidebar');

mobileMenuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


// Toggle advanced search panel
const advancedSearchToggle = document.getElementById('advancedSearchToggle');
const advancedSearchPanel = document.getElementById('advancedSearchPanel');

advancedSearchToggle.addEventListener('click', () => {
    advancedSearchPanel.classList.toggle('active');
    advancedSearchToggle.classList.toggle('active');
});


// Today and upcoming cases collapsible sections

function toggleSection(header) {
    const section = header.closest('.collapsible');
    const content = section.querySelector('.collapsible-content');
    const allSections = document.querySelectorAll('.collapsible');

    // Close all other sections
    allSections.forEach(otherSection => {
        if (otherSection !== section && otherSection.classList.contains('active')) {
            const otherContent = otherSection.querySelector('.collapsible-content');
            otherSection.classList.remove('active');
            otherContent.style.maxHeight = '0';
            otherContent.style.opacity = '0';
        }
    });

    // Toggle current section
    section.classList.toggle('active');

    if (section.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';

        // Update maxHeight after any dynamic content changes
        setTimeout(() => {
            content.style.maxHeight = content.scrollHeight + 'px';
        }, 300);
    } else {
        content.style.maxHeight = '0';
        content.style.opacity = '0';
    }
}

// Initialize all sections as closed
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.collapsible');

    sections.forEach(section => {
        const content = section.querySelector('.collapsible-content');
        content.style.maxHeight = '0';
        content.style.opacity = '0';
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        const activeSection = document.querySelector('.collapsible.active');
        if (activeSection) {
            const content = activeSection.querySelector('.collapsible-content');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});