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
document.addEventListener('DOMContentLoaded', () => {
    // Date de naissance (29 mai 1997)
    const birthDate = new Date('1997-05-29');

    // Date actuelle
    const currentDate = new Date();

    // Calcul du nombre de jours écoulés
    const timeDifference = currentDate - birthDate;
    const daysSinceBirth = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Conversion en jours

    // Affichage du résultat dans l'élément avec l'ID 'daysSinceBirth'
    const resultElement = document.getElementById('daysSinceBirth');
    resultElement.textContent = `Il y a ${daysSinceBirth} jours que Ye Xiu es né !`;
    // Gestion de la navigation
    const navLinks = document.querySelectorAll('.navbar nav ul li a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Gestion de la lightbox
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement('img');
    lightbox.appendChild(lightboxImage);

    const closeButton = document.createElement('span');
    closeButton.className = 'lightbox-close';
    closeButton.innerText = '×';
    lightbox.appendChild(closeButton);

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImage.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        console.log("Croix cliquée"); // Debug
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Gestion du bouton inscription
    const boutonInscription = document.getElementById('boutton');
    if (boutonInscription) {
        boutonInscription.addEventListener('click', () => {
            alert("Vous êtes inscrit !");
        });
    }

    // Ajout du bouton "Dévoiler le secret" et gestion de la popup
    const texteSection = document.getElementById('texte-section'); // Assure-toi que cette section existe dans ton HTML
    if (texteSection) {
        // Création du bouton
        const secretButton = document.createElement('button');
        secretButton.innerText = 'Dévoiler le secret';
        secretButton.className = 'secret-button';
        texteSection.appendChild(secretButton);

        // Création de la popup et de l'overlay
        const popupOverlay = document.createElement('div');
        popupOverlay.className = 'popup-overlay';
        document.body.appendChild(popupOverlay);

        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
            <p>Bravo, tu as découvert l'easter egg ! 🎉</p>
            <button>Fermer</button>
        `;
        document.body.appendChild(popup);

        // Afficher la popup
        secretButton.addEventListener('click', () => {
            popup.classList.add('visible');
            popupOverlay.classList.add('visible');
        });

        // Fermer la popup via le bouton
        const closeButton = popup.querySelector('button');
        closeButton.addEventListener('click', () => {
            popup.classList.remove('visible');
            popupOverlay.classList.remove('visible');
        });

        // Fermer la popup en cliquant sur l'overlay
        popupOverlay.addEventListener('click', () => {
            popup.classList.remove('visible');
            popupOverlay.classList.remove('visible');
        });
    }
});