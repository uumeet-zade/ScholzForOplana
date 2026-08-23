document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.section-animate');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Language Selector Logic
    const langSelects = document.querySelectorAll('.lang-select');
    langSelects.forEach(select => {
        // Set the correct selected option based on the current URL
        const currentPath = window.location.pathname;
        if (currentPath.includes('-es.html')) {
            select.value = 'alcamerian';
        } else if (currentPath.includes('-fr.html')) {
            select.value = 'gallic';
        } else {
            select.value = 'alanian';
        }

        select.addEventListener('change', (e) => {
            const lang = e.target.value;
            let path = window.location.pathname;
            let baseName = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
            
            // Normalize to base Alanian (English) filename
            baseName = baseName.replace('-es.html', '.html').replace('-fr.html', '.html');
            
            if (lang === 'alcamerian') {
                window.location.href = baseName.replace('.html', '-es.html');
            } else if (lang === 'gallic') {
                window.location.href = baseName.replace('.html', '-fr.html');
            } else {
                window.location.href = baseName;
            }
        });
    });
});
