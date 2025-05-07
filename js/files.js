// document.addEventListener('DOMContentLoaded', function () {
//     // Mobile menu toggle
//     const mobileMenuToggle = document.getElementById('mobileMenuToggle');
//     const sidebar = document.querySelector('.sidebar');
//     const overlay = document.querySelector('.sidebar-overlay');

//     function toggleSidebar() {
//         sidebar.classList.toggle('active');
//         overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
//         document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
//     }

//     mobileMenuToggle.addEventListener('click', toggleSidebar);
//     overlay.addEventListener('click', toggleSidebar);

//     // View toggle
//     const viewButtons = document.querySelectorAll('.view-btn');
//     const gridView = document.querySelector('.grid-view');
//     const listView = document.querySelector('.list-view');

//     viewButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             viewButtons.forEach(btn => btn.classList.remove('active'));
//             this.classList.add('active');

//             if (this.dataset.view === 'grid') {
//                 gridView.style.display = '';
//                 listView.style.display = 'none';
//             } else {
//                 gridView.style.display = 'none';
//                 listView.style.display = '';
//             }
//         });
//     });

//     // Upload modal
//     const uploadModal = document.getElementById('uploadModal');
//     const uploadBtn = document.getElementById('uploadDocumentBtn');
//     const closeModalButtons = document.querySelectorAll('.close-modal');
//     const dropZone = document.getElementById('dropZone');
//     const fileInput = document.getElementById('fileInput');
//     const browseBtn = document.getElementById('browseBtn');

//     uploadBtn.addEventListener('click', function () {
//         uploadModal.style.display = 'flex';
//         document.body.style.overflow = 'hidden';
//     });

//     closeModalButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             uploadModal.style.display = 'none';
//             document.body.style.overflow = '';
//         });
//     });

//     // Handle file drag and drop
//     ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
//         dropZone.addEventListener(eventName, preventDefaults, false);
//     });

//     function preventDefaults(e) {
//         e.preventDefault();
//         e.stopPropagation();
//     }

//     ['dragenter', 'dragover'].forEach(eventName => {
//         dropZone.addEventListener(eventName, highlight, false);
//     });

//     ['dragleave', 'drop'].forEach(eventName => {
//         dropZone.addEventListener(eventName, unhighlight, false);
//     });

//     function highlight() {
//         dropZone.classList.add('highlight');
//     }

//     function unhighlight() {
//         dropZone.classList.remove('highlight');
//     }

//     dropZone.addEventListener('drop', handleDrop, false);

//     function handleDrop(e) {
//         const dt = e.dataTransfer;
//         const files = dt.files;
//         handleFiles(files);
//     }

//     browseBtn.addEventListener('click', function () {
//         fileInput.click();
//     });

//     fileInput.addEventListener('change', function () {
//         handleFiles(this.files);
//     });

//     function handleFiles(files) {
//         // Process uploaded files
//         console.log(files);
//         // You would typically upload files to server here
//     }

//     // Preview modal
//     const previewModal = document.getElementById('previewModal');
//     const previewButtons = document.querySelectorAll('.action-btn.preview, .action-btn.view');

//     previewButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const documentItem = this.closest('.document-item');
//             const documentName = documentItem.querySelector('h3').textContent;

//             document.getElementById('previewTitle').textContent = documentName;
//             // In a real app, you would set the iframe src to the document URL
//             // document.getElementById('documentPreview').src = documentUrl;

//             previewModal.style.display = 'flex';
//             document.body.style.overflow = 'hidden';
//         });
//     });

//     // Responsive adjustments
//     function handleResponsive() {
//         if (window.innerWidth <= 991) {
//             mobileMenuToggle.style.display = 'flex';
//             sidebar.classList.remove('active');
//             overlay.style.display = 'none';
//             document.body.style.overflow = '';
//         } else {
//             mobileMenuToggle.style.display = 'none';
//             sidebar.classList.add('active');
//             overlay.style.display = 'none';
//             document.body.style.overflow = '';
//         }
//     }

//     handleResponsive();
//     window.addEventListener('resize', handleResponsive);
// });



// Toggle advanced search panel
const advancedSearchToggle = document.getElementById('advancedSearchToggle');
const advancedSearchPanel = document.getElementById('advancedSearchPanel');

advancedSearchToggle.addEventListener('click', () => {
    advancedSearchPanel.classList.toggle('active');
    advancedSearchToggle.classList.toggle('active');
});