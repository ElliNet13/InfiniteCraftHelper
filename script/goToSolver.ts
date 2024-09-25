import { discoveriesIcon } from './lib/assets';

export function init(elements: elements) {
    const goToSolverButton = document.createElement('button');
    goToSolverButton.classList.add('setting');
    goToSolverButton.textContent = 'Go to solver';

    const goToSolverImage = document.createElement('img');
    goToSolverImage.src = discoveriesIcon.trim();
    goToSolverButton.appendChild(goToSolverImage);

    elements.settingsContent.appendChild(goToSolverButton);
    
    goToSolverButton.addEventListener('click', () => {
        window.location.href = 'https://ellinet13.pythonanywhere.com/';
    });
}
