document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.querySelectorAll('.arrow')
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    const bannerImage = document.querySelector('.banner-img');
    const tagline = document.querySelector('#banner p span');
    const dotsContainer = document.querySelector('.dots');							
    const slides = [
        {
            "image": "slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    let currentSlide = 0;

    // fonction pour passer a l'image suivante en fonction du Slide / appel la fonction updateDots
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        bannerImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
        tagline.innerHTML = slides[currentSlide].tagLine;
        updateDots()
    }

	// fonction pour passer a l'image précédente en fonction du Slide / appel la fonction updateDots
    function previousSlide() { 
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        bannerImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
        tagline.innerHTML = slides[currentSlide].tagLine;
        updateDots()
    }

    //* fonction pour modifier les points en fonction du Slide
    function updateDots(){
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => {
            dot.classList.remove('dot_selected');
        });
        dots[currentSlide].classList.add('dot_selected');
    }

    //* Crée la div qui accueil les points 
    function createDots() {
        const fragment = document.createDocumentFragment(); // crée un fragment
        slides.forEach((slide, index) => {
            const dot = document.createElement('div'); // crée une div
            dot.classList.add('dot'); // ajoute la classe "dot" à la div
            fragment.appendChild(dot); // ajoute la div au fragment
        });
        dotsContainer.appendChild(fragment); // ajoute le fragment contenant la div
        dotsContainer.children[currentSlide].classList.add('dot_selected'); // Sélectionne le point correspondant à la diapositive actuelle
    }
    // eventListerner des fleches
    arrow.forEach(img => { // forEach cherche les elements avec la classe "arrow"
        const dataID = img.getAttribute('data-id');
        img.addEventListener('click', function() { // ajoute un eventlistener
            if (dataID === "arrow_left") { // vérifie la fleche
                console.log("image précédente"); //* laisse un log
                previousSlide(); // appel la fonction previousSlide
            } else if (dataID === "arrow_right") { // vérifie la flèche
                console.log("image suivante");
                nextSlide(); // appel la fonction nextSlide
            }
        });
    });
    
    createDots();
});