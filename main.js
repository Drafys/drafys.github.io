const hoverSoundSrc = 'hover.wav';  // Path to your hover sound
const clickSound = document.getElementById('clickSound');
const buttons = document.querySelectorAll('.custom-btn');

// Add hover sound effect
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        // Create a new audio instance for the hover sound
        const hoverSound = new Audio(hoverSoundSrc);
        hoverSound.play();
    });

    // Add click sound effect
    button.addEventListener('click', () => {
        clickSound.currentTime = 0; // Reset the sound to the start
        clickSound.play();
    });
});

