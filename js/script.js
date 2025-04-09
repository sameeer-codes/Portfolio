const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',    // Pagination element
        clickable: true,             // Enable click on pagination bullets
    },
    navigation: {
        nextEl: '.swiper-button-next',   // Next button
        prevEl: '.swiper-button-prev',   // Previous button
    },
    breakpoints: {
        // When window width is <= 768px
        slidesPerView: 1,
        768: {
            slidesPerView: 2,   // Show one slide per view
            spaceBetween: 10,    // Space between slides
        },
        // When window width is > 768px
        1024: {
            slidesPerView: 3,   // Show two slides per view
            spaceBetween: 20,    // Space between slides
        }
    },
});

// const cursor = document.getElementById('cursor');

// window.addEventListener('mousemove', function (e) {
//     let x = e.clientX;
//     let y = e.clientY;

//     // Adjust cursor position so the center aligns with the mouse
//     const cursorSize = 15; // Width and height of the cursor
//     cursor.style.left = `${x - cursorSize / 2}px`;
//     cursor.style.top = `${y - cursorSize / 2}px`;

//     // Show cursor when mouse moves
//     cursor.style.opacity = 1;
// });