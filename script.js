// Dynamic Greeting Based on Time
window.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.querySelector('.greeting');
    const hour = new Date().getHours();
    let greeting = "Welcome";

    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    greetingElement.textContent = `${greeting}, I’m Aschalew Teshome!`;
});
