// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar nav ul li a'); // Navigation links
    const sections = document.querySelectorAll('section'); // All sections in the document

    // Add smooth scrolling to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const targetId = link.getAttribute('href').slice(1); // Get the target section ID
            const targetSection = document.getElementById(targetId); // Find the section element

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
                navLinks.forEach(nav => nav.classList.remove('active')); // Remove active class from all links
                link.classList.add('active'); // Add active class to the clicked link
            }
        });
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        let current = ''; // Track the current visible section
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // Adjust offset for fixed navbar height
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id'); // Get the ID of the section in view
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active'); // Remove active class from all links
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active'); // Add active class to the link corresponding to the current section
            }
        });
    });

    // Learn More button smooth scroll
    const learnMoreButton = document.getElementById('learn-more');
    learnMoreButton.addEventListener('click', () => {
        const aboutSection = document.getElementById('about'); // Find the "About" section
        aboutSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the "About" section
    });
});
  // Vérification que le DOM est prêt
  document.addEventListener('DOMContentLoaded', function() {
    // Récupérer l'élément du bouton
    const boutonInscription = document.getElementById('boutton');
    
    // Vérifier si le bouton est bien trouvé
    if (boutonInscription) {
        console.log("Le bouton a été trouvé !");

        // Ajouter un événement de clic au bouton
        boutonInscription.addEventListener('click', function() {
            // Afficher un message d'alerte
            alert("Vous êtes inscrit !");
        });
    } else {
        console.error("Le bouton n'a pas été trouvé !");
    }
});
