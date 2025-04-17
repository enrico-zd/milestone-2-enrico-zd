const navbar = document.getElementById('navbar');

export const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.add('bg-gradient-to-b', 'from-black/20', 'to-transparent');
        } else {
            navbar.classList.remove('bg-gradient-to-b', 'from-black/20', 'to-transparent');
        }
    });
}, { threshold: 0.1 });

 export const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.add('opacity-0', '-translate-y-full');
        } else {
            navbar.classList.remove('opacity-0', '-translate-y-full');
        }
    });
});