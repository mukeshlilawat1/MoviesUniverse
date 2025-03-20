var swiper = new Swiper(".popular-content", {
    slidesPerView: 1, // Default for smallest screens
    spaceBetween: 10,
    loop: true, // Enable infinite loop
    autoplay: {
        delay: 2000, // Change slides every 2.5 seconds
        disableOnInteraction: false, // Keeps autoplay running after interaction
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1, // Keeping it 1 for better readability
            spaceBetween: 10,
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// show video
let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myvideo = document.querySelector('#myvideo');
let closeButton = document.querySelector('.close-video');

playButton.onclick = () => {
    video.classList.add('show-video');

    // auto play
    myvideo.play();
}


closeButton.onclick = () => {
    video.classList.remove('show-video');

    //pause on close
    myvideo.pause();
}

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.toggle('light-theme');

        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('bxs-moon');
            icon.classList.toggle('bxs-sun');
        }
    });
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Basic Search Functionality
const searchInput = document.getElementById('search-input');
const movieTitles = document.querySelectorAll('.movie-title');

if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        movieTitles.forEach(title => {
            const parentBox = title.closest('.movie-box');
            if (parentBox) {
                if (title.textContent.toLowerCase().includes(searchTerm)) {
                    parentBox.style.display = 'block';
                } else {
                    parentBox.style.display = 'none';
                }
            }
        });
    });
}
