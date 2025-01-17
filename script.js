document.addEventListener("DOMContentLoaded", function() {
    const contentContainer = document.querySelector('.content');
    const nextButton = document.querySelector('.next-button');
    const itemsPerPage = 5; // Number of items to show per page
    let currentPage = 1; // Current page of content

    // Dummy data for content items
    const contentData = [
        { imgSrc: 'popular1.jpg', title: 'Popular Title 1' },
        { imgSrc: 'popular2.jpg', title: 'Popular Title 2' },
        { imgSrc: 'popular3.jpg', title: 'Popular Title 3' },
        { imgSrc: 'popular4.jpg', title: 'Popular Title 4' },
        { imgSrc: 'popular5.jpg', title: 'Popular Title 5' },
        // Add more content data as needed
    ];

    function displayContent(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const contentItems = contentData.slice(startIndex, endIndex);

        contentContainer.innerHTML = ''; // Clear existing content

        contentItems.forEach(item => {
            const contentItem = document.createElement('div');
            contentItem.classList.add('content-item');

            const image = document.createElement('img');
            image.src = item.imgSrc;
            image.alt = item.title;

            const title = document.createElement('h3');
            title.textContent = item.title;

            contentItem.appendChild(image);
            contentItem.appendChild(title);
            contentContainer.appendChild(contentItem);
        });
    }

    displayContent(currentPage); // Initial display of content

    nextButton.addEventListener('click', function() {
        currentPage++;
        if (currentPage > Math.ceil(contentData.length / itemsPerPage)) {
            currentPage = 1; // Start from the beginning if reached the last page
        }
        displayContent(currentPage);
    });
});
