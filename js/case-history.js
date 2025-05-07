
document.addEventListener('DOMContentLoaded', function () {
    // Organization toggle functionality
    document.querySelectorAll('.toggle-organization-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const orgSection = this.closest('.organization-section');
            orgSection.classList.toggle('expanded');

            const icon = this.querySelector('i');
            if (orgSection.classList.contains('expanded')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });

    // Case timeline toggle functionality
    document.querySelectorAll('.toggle-timeline-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const caseBlock = this.closest('.case-block');
            const timelineWrapper = caseBlock.querySelector('.timeline-wrapper');

            timelineWrapper.classList.toggle('expanded');

            const icon = this.querySelector('i');
            if (timelineWrapper.classList.contains('expanded')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
                this.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Timeline';
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
                this.innerHTML = '<i class="fas fa-chevron-down"></i> View Timeline';
            }
        });
    });
});

