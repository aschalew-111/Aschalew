// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Project Cards Rendering
const projectsContainer = document.querySelector('.grid');
if (projectsContainer) {
    const projects = [
        { title: 'Portfolio Website', description: 'A personal website showcasing my skills and projects.' },
        { title: 'Online Store', description: 'Developed a full-featured e-commerce website.' },
        { title: 'Network Management Tool', description: 'Created a tool for managing and monitoring network performance.' },
        { title: 'Online Shopping System', description: 'A dynamic shopping system with user-friendly interfaces.' },
        { title: 'Lounge Management System', description: 'A system to manage lounges and customer bookings effectively.' }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectCard);
    });
}
