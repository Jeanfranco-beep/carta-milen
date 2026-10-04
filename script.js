let currentPage = 1;
const totalPages = 10;

function updatePages() {
    for (let i = 1; i <= totalPages; i++) {
        const page = document.getElementById(`page-${i}`);
        if (i === currentPage) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePages();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePages();
    }
}