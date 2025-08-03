// ✅ Fade-in-on-scroll effect
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

hiddenElements.forEach((el) => observer.observe(el));

// ✅ Auto-pause other videos when one is playing
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');

    videos.forEach((video) => {
        video.addEventListener('play', () => {
            videos.forEach((otherVideo) => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });
});
