
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







document.addEventListener('DOMContentLoaded', function () {
    const viewButtons = document.querySelectorAll('.action-btn.view');
    const timelineModal = document.getElementById('timelineModal');
    const closeModal = document.querySelector('.close-modal');
    const timelineContent = document.querySelector('.timeline-content');
    const filterButtons = document.querySelectorAll('.timeline-filters .filter-btn');

    // Sample timeline data - replace with your actual data
    const timelineData = [
        {
            type: 'hearing',
            date: '10 June 2023, 10:30 AM',
            title: 'Case Hearing',
            content: 'The court heard arguments from both parties regarding the preliminary objections.',
            details: {
                'Judge': 'Honorable Justice A.B.M. Khairul Haque',
                'Court Room': 'Courtroom 5, High Court Division',
                'Next Date': '24 June 2023, 11:00 AM'
            }
        },
        {
            type: 'document',
            date: '5 June 2023, 3:15 PM',
            title: 'Document Submission',
            content: 'Submitted the defendant\'s written statement along with supporting documents.',
            attachments: [
                'Written_Statement_Defendant.pdf',
                'Supporting_Documents_Defendant.docx'
            ]
        },
        // Add more timeline items as needed
    ];

    // Open timeline modal
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            const caseNumber = row.cells[0].textContent;
            const caseTitle = row.cells[2].textContent;

            document.querySelector('.case-number').textContent = caseNumber;
            document.querySelector('.case-title').textContent = caseTitle;

            renderTimeline('all');
            timelineModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        timelineModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close on outside click
    timelineModal.addEventListener('click', (e) => {
        if (e.target === timelineModal) {
            timelineModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Filter timeline items
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderTimeline(filter);
        });
    });

    // Render timeline items
    function renderTimeline(filter) {
        timelineContent.innerHTML = '';
        const items = filter === 'all' ?
            timelineData :
            timelineData.filter(item => item.type === filter);

        items.forEach(item => {
            const itemHTML = createTimelineItem(item);
            timelineContent.insertAdjacentHTML('beforeend', itemHTML);
        });
    }

    // Create timeline item HTML
    function createTimelineItem(item) {
        return `
            <div class="timeline-item ${item.type}">
                <div class="timeline-card">
                    <div class="timeline-date">
                        <i class="fas fa-calendar-day"></i>
                        ${item.date}
                    </div>
                    <h4 class="timeline-title">
                        ${getIconForType(item.type)}
                        ${item.title}
                    </h4>
                    <div class="timeline-content">
                        ${item.content}
                    </div>
                    ${createDetailsHTML(item)}
                </div>
            </div>
        `;
    }

    // Helper functions
    function getIconForType(type) {
        const icons = {
            hearing: 'fa-gavel',
            document: 'fa-file-alt',
            order: 'fa-scroll',
            note: 'fa-sticky-note'
        };
        return `<i class="fas ${icons[type]}"></i>`;
    }

    function createDetailsHTML(item) {
        if (item.details) {
            return `
                <div class="timeline-details">
                    ${Object.entries(item.details).map(([key, value]) => `
                        <div class="detail-row">
                            <span class="detail-label">${key}:</span>
                            <span>${value}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        if (item.attachments) {
            return `
                <div class="timeline-attachments">
                    ${item.attachments.map(file => `
                        <div class="attachment">
                            <i class="fas ${file.endsWith('.pdf') ? 'fa-file-pdf' : 'fa-file-word'}"></i>
                            <span>${file}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        return '';
    }
});