


document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');

    searchIcon.addEventListener('click', () => {
        const query = searchInput.value;
        if (query) {
            alert(`Searching for: ${query}`);
            // Implement actual search functionality here
        }
    });
});
