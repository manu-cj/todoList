const darkMode = () => {
    const body = document.querySelector('body');
    const darkModeButton = document.querySelector('.dark-mode');

    darkModeButton.addEventListener('click', () => {
        const isDarkMode = localStorage.getItem('darkmode') === 'true';
        
        if (isDarkMode) {
            body.style.backgroundColor = 'white';
            localStorage.setItem('darkmode', 'false');
            darkModeButton.classList.remove('fa-toggle-on');
            darkModeButton.classList.add('fa-toggle-off');
            darkModeButton.style.color = "white";
            
        } else {
            body.style.backgroundColor = 'rgb(72, 72, 72)';
            localStorage.setItem('darkmode', 'true');
            darkModeButton.classList.remove('fa-toggle-off');
            darkModeButton.classList.add('fa-toggle-on');
            darkModeButton.style.color = "#FFD700";
        }
    });

    // Initialize dark mode based on localStorage value
    if (localStorage.getItem('darkmode') === 'true') {
        body.style.backgroundColor = 'rgb(72, 72, 72)';
        darkModeButton.classList.remove('fa-toggle-off');
        darkModeButton.classList.add('fa-toggle-on');
        darkModeButton.style.color = "#FFD700";
    } else {
        body.style.backgroundColor = 'white';
        darkModeButton.classList.remove('fa-toggle-on');
        darkModeButton.classList.add('fa-toggle-off');
        darkModeButton.style.color = "white";
    }
}

export default darkMode;