(function () {
    'use strict';
    console.log('reading js');

    const mainImgSection = document.querySelector('.mainImg');
    const hiddenSection = document.querySelector('.hidden');
    const mainImage = document.querySelector('.mainImg img');
    const header = document.querySelector('header');
    const heartIcons = document.querySelectorAll('.heart-icon');

    // Initial state setup
    mainImgSection.style.display = "block";
    hiddenSection.style.display = "none";

    mainImage.addEventListener('click', function () {
        // Toggle visibility
        mainImgSection.style.display = "none";
        header.style.display = "none";
        hiddenSection.style.display = "block";

    });


    //clickable heart!
    heartIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const isRed = this.style.backgroundImage.includes('redheart');
            this.style.backgroundImage = isRed
                ? "url('images/heart.png')"
                : "url('images/redheart.png')";
        });
    });


})();
