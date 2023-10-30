// Add an event listener for scroll to handle section activation
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(function (section) {
        const top = section.getBoundingClientRect().top;
        const height = section.clientHeight;

        if (top + height >= 0 && top <= window.innerHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
