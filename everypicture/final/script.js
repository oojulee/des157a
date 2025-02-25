(function () {
    'use strict';
    console.log('reading js');

    const mainImgSection = document.querySelector('.mainImg');
    const hiddenSection = document.querySelector('.hidden');
    const mainImage = document.querySelector('.mainImg img');
    const header = document.querySelector('header');
    const nextButton = document.querySelector('.next-button');
    const backButton = document.querySelector('.back-button');
    const secondBackButton = document.querySelector('.second-back-button');
    const heartIcons = document.querySelectorAll('.heart-icon');


    const backeyImg = document.querySelector('.image-container1');
    const vegetableImg = document.querySelector('.image-container2');
    const flowerImg = document.querySelector('.image-container3');
    const sunsetImg = document.querySelector('.image-container4');
    const gettyImg = document.querySelector('.image-container5');
    const symmetryImg = document.querySelector('.image-container6');
    const catImg = document.querySelector('.image-container7');
    const flowerHouseImg = document.querySelector('.image-container8');

    const eachImg = document.querySelector('.eachImg');
    const imgInfo = document.querySelector('.info');
    const backey = document.querySelector('.Backey');
    const vegetable = document.querySelector('.Vegetables');
    const flower = document.querySelector('.Flowers');
    const sunset = document.querySelector('.Sunset');
    const getty = document.querySelector('.Getty');
    const symmetry = document.querySelector('.Symmetry');
    const nappingCat = document.querySelector('.Catnapping');
    const flowerHouse = document.querySelector('.Flowerhouse');



    //overlay!
    // Initial state setup
    mainImgSection.style.display = "block";
    hiddenSection.style.display = "none";
    eachImg.style.display = "none";


    mainImage.addEventListener('click', function () {
        // Toggle visibility
        mainImgSection.style.display = "none";
        header.style.display = "none";
        eachImg.style.display = "none";
        hiddenSection.style.display = "block";

    });

    nextButton.addEventListener('click', function () {
        // Toggle visibility
        mainImgSection.style.display = "none";
        header.style.display = "none";
        eachImg.style.display = "none";
        hiddenSection.style.display = "block";

    });


    backButton.addEventListener('click', function () {
        mainImgSection.style.display = "block";
        header.style.display = "block";
        eachImg.style.display = "none";
        hiddenSection.style.display = "none";

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





    //overlays for each img
    backeyImg.addEventListener('click', function () {

        mainImgSection.style.display = "none";
        header.style.display = "none";
        hiddenSection.style.display = "none";
        imgInfo.style.display = "none";
        eachImg.style.display = "block";

        document.querySelectorAll('.eachImg > div').forEach(section => {
            section.style.display = "none";
        });

        backey.style.display = "block";

    });

    vegetableImg.addEventListener('click', function () {

        mainImgSection.style.display = "none";
        header.style.display = "none";
        hiddenSection.style.display = "none";
        eachImg.style.display = "block";

        document.querySelectorAll('.eachImg > div').forEach(section => {
            section.style.display = "none";
        });

        vegetable.style.display = "block";

    });

    flowerImg.addEventListener('click', function () {

        mainImgSection.style.display = "none";
        header.style.display = "none";
        hiddenSection.style.display = "none";
        eachImg.style.display = "block";

        document.querySelectorAll('.eachImg > div').forEach(section => {
            section.style.display = "none";
        });

        flower.style.display = "block";

    });

    sunsetImg.addEventListener('click', function () {

        mainImgSection.style.display = "none";
        header.style.display = "none";
        hiddenSection.style.display = "none";
        eachImg.style.display = "block";

        document.querySelectorAll('.eachImg > div').forEach(section => {
            section.style.display = "none";
        });

        sunset.style.display = "block";

    });

    gettyImg.addEventListener('click', function () {

        mainImgSection.style.display = "none";
        header.style.display = "none";
        hiddenSection.style.display = "none";
        eachImg.style.display = "block";

        document.querySelectorAll('.eachImg > div').forEach(section => {
            section.style.display = "none";
        });

        getty.style.display = "block";

    });

    symmetryImg.addEventListener('click', function () {

        mainImgSection.style.display = "none";
        header.style.display = "none";
        hiddenSection.style.display = "none";
        eachImg.style.display = "block";

        document.querySelectorAll('.eachImg > div').forEach(section => {
            section.style.display = "none";
        });

        symmetry.style.display = "block";

    });

    catImg.addEventListener('click', function () {

        mainImgSection.style.display = "none";
        header.style.display = "none";
        hiddenSection.style.display = "none";
        eachImg.style.display = "block";

        document.querySelectorAll('.eachImg > div').forEach(section => {
            section.style.display = "none";
        });

        nappingCat.style.display = "block";

    });

    flowerHouseImg.addEventListener('click', function () {

        mainImgSection.style.display = "none";
        header.style.display = "none";
        hiddenSection.style.display = "none";
        eachImg.style.display = "block";

        document.querySelectorAll('.eachImg > div').forEach(section => {
            section.style.display = "none";
        });

        flowerHouse.style.display = "block";

    });

    document.querySelectorAll('.eachImg .infoButton').forEach(button => {
        button.addEventListener('click', function () {
            const parentDiv = this.closest('.eachImg > div');
            const infoBox = parentDiv.querySelector('.info');

            if (infoBox) {
                // Toggle visibility
                if (infoBox.style.display === "block") {
                    infoBox.style.display = "none";
                } else {
                    document.querySelectorAll('.eachImg .info').forEach(info => info.style.display = "none"); // Hide other open info boxes
                    infoBox.style.display = "block";
                }
            }
        });
    });

    document.querySelectorAll('.eachImg .second-back-button').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelector('.eachImg').style.display = "none";
            document.querySelector('.hidden').style.display = "block";
            document.querySelectorAll('.eachImg .info').forEach(info => info.style.display = "none");
            document.querySelectorAll('.eachImg > div').forEach(section => {
                section.style.display = "none";
            });
        });
    });







})();
