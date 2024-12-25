// Smooth Scrolling
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').split('.')[0];
        const targetElement = document.querySelector(`[name="${targetId}"]`);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Greeting Based on Time
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header h1');
    const hour = new Date().getHours();
    let greeting = "Welcome";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    header.textContent = `${greeting}, I’m Aschalew Teshome!`;
});

// Button Hover Animation (Optional)
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = "#e67e22";
        link.style.color = "#fff";
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = "transparent";
        link.style.color = "#fff";
    });
});
