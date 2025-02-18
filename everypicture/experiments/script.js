(function () {
    'use strict';
    console.log('reading js');

    const mainImgSection = document.querySelector('.mainImg');
    const hiddenSection = document.querySelector('.hidden');
    const mainImage = document.querySelector('.mainImg img');
    const header = document.querySelector('header');

    // Initial state setup
    mainImgSection.style.display = "block";
    hiddenSection.style.display = "none";

    mainImage.addEventListener('click', function () {
        // Toggle visibility
        mainImgSection.style.display = "none";
        header.style.display = "none";
        hiddenSection.style.display = "block";

    });
})();
