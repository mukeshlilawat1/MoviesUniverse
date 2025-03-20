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
