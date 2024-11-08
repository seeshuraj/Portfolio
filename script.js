document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header-bg');
    const main = document.querySelector('main');
    const backgroundVideo = document.getElementById('backgroundVideo');
    const sections = document.querySelectorAll('.floating-box');

    main.style.paddingTop = `${header.offsetHeight}px`;

    // Fade-in animation for sections
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
    });

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 1s, transform 1s";
            }
        });

        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = Math.min(1, scrollY / maxScroll);
        backgroundVideo.currentTime = backgroundVideo.duration * scrollFraction;

        const headerOpacity = Math.max(0, 1 - scrollY / 300);
        header.style.opacity = headerOpacity;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const floatingBoxes = document.querySelectorAll('.floating-box');

    floatingBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'translateY(-4px)';
            box.style.transition = 'transform 0.3s ease';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'translateY(0)';
            box.style.transition = 'transform 0.3s ease';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const walkingBot = document.getElementById('walkingBot');

    if (!walkingBot) {
        console.error("Walking Bot element not found");
        return;
    }

    // Create a thank you message element and append it to the DOM
    const thankYouMessage = document.createElement('div');
    thankYouMessage.className = 'thank-you-message';
    thankYouMessage.innerText = 'Thank You!';
    document.body.appendChild(thankYouMessage);

    // Set initial styles for the thank you message
    thankYouMessage.style.position = 'absolute'; // Allows positioning based on bot's position
    thankYouMessage.style.background = 'FFFFFF'; // Bright red for debugging
    thankYouMessage.style.color = 'FFFFFF';
    thankYouMessage.style.padding = '10px 20px';
    thankYouMessage.style.borderRadius = '5px';
    thankYouMessage.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.5)';
    thankYouMessage.style.zIndex = '9999';
    thankYouMessage.style.display = 'none';

    // Function to display the thank you message above the bot
    function showThankYouMessage() {
        console.log("Bot clicked - Showing Thank You message above the bot");

        // Get the bot’s position
        const botRect = walkingBot.getBoundingClientRect();

        // Position the thank you message above the bot
        thankYouMessage.style.left = `${botRect.left + window.scrollX + botRect.width / 2 - thankYouMessage.offsetWidth / 2}px`; // Center horizontally
        thankYouMessage.style.top = `${botRect.top + window.scrollY - thankYouMessage.offsetHeight - 10}px`; // Position above the bot with a 10px gap

        // Show the thank you message for 2 seconds
        thankYouMessage.style.display = 'block';

        console.log(`Message Position - top: ${thankYouMessage.style.top}, left: ${thankYouMessage.style.left}, z-index: ${thankYouMessage.style.zIndex}`);
        
        setTimeout(() => {
            thankYouMessage.style.display = 'none';
        }, 2000);
    }

    // Add the click event listener to the bot
    walkingBot.addEventListener('click', showThankYouMessage);
    console.log("Event listener added to bot");
});
