(function () {
    'use strict';
    console.log('running js');

    // Select all paragraph elements
    const lists = document.querySelectorAll('li');


    for (let i = 0; i < lists.length; i++) {
        lists[i].style.color = "green";
    }

})();