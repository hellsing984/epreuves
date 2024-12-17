// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Navigation: liens et sections
    const navLinks = document.querySelectorAll('.navbar__nav ul li a');
    const sections = document.querySelectorAll('section');

    // Smooth scrolling pour les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1); // ID de la section
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Mise à jour de l'état actif des liens au scroll
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // Ajuste pour la hauteur de la navbar
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });

    // Bouton "Learn More" vers la section "About"
    const learnMoreButton = document.getElementById('learn-more');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Calcul des jours depuis une date de naissance
    const birthDate = new Date('1987-05-29');
    const currentDate = new Date();
    const timeDifference = currentDate - birthDate;
    const daysSinceBirth = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const resultElement = document.getElementById('daysSinceBirth');

    if (resultElement) {
        resultElement.textContent = `Il y a ${daysSinceBirth} jours que Ye Xiu est né !`;
    }
    // Gestion de la lightbox pour les images de la galerie
    const galleryImages = document.querySelectorAll('.gallery__image');
    if (galleryImages.length > 0) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        document.body.appendChild(lightbox);

        const lightboxImage = document.createElement('img');
        lightbox.appendChild(lightboxImage);

        const closeButton = document.createElement('span');
        closeButton.className = 'lightbox__close';
        closeButton.innerText = '×';
        lightbox.appendChild(closeButton);

        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImage.src = img.src;
                lightbox.style.display = 'flex';
            });
        });

        closeButton.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }

    // Bouton d'inscription avec un message d'alerte
    const boutonInscription = document.getElementById('boutton');
    if (boutonInscription) {
        boutonInscription.addEventListener('click', () => {
            alert("Vous êtes inscrit !");
        });
    }

    // Bouton "Attention danger" et gestion de l'infobulle en BEM
const texteSection = document.getElementById('texte-section');
if (texteSection) {
    const secretButton = document.createElement('button');
    secretButton.innerText = 'Attention danger !!';
    secretButton.className = 'button button--danger';
    texteSection.appendChild(secretButton);

    // Création de la bulle
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip--hidden';
    tooltip.innerText = 'Il a été 4 fois champion du monde et meilleur joueur 5 fois de suite 🎉';
    document.body.appendChild(tooltip);

    // Gestion de l'apparition de la bulle
    secretButton.addEventListener('mouseenter', (e) => {
        tooltip.style.left = `${e.clientX}px`;
        tooltip.style.top = `${e.clientY + 10}px`; // Décalage de 10px sous la souris
        tooltip.classList.remove('tooltip--hidden');
    });

    secretButton.addEventListener('mouseleave', () => {
        tooltip.classList.add('tooltip--hidden');
    });
        const popupOverlay = document.createElement('div');
        popupOverlay.className = 'popup-overlay';
        document.body.appendChild(popupOverlay);

        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
            <p>Il a été 5 fois champion du monde et meilleur joueur 5 fois de suite 🎉</p>
            <button class="popup__button">Fermer</button>
        `;
        document.body.appendChild(popup);

        secretButton.addEventListener('click', () => {
            popup.classList.add('visible');
            popupOverlay.classList.add('visible');
        });

        const closeButton = popup.querySelector('.popup__button');
        closeButton.addEventListener('click', () => {
            popup.classList.remove('visible');
            popupOverlay.classList.remove('visible');
        });

        popupOverlay.addEventListener('click', () => {
            popup.classList.remove('visible');
            popupOverlay.classList.remove('visible');
        });
    }
    
});
