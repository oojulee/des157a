(function () {
    'use strict';
    console.log('reading js');

    const form = document.querySelector('form');
    const madlib = document.querySelector('#madlib');
    const nextPage = document.querySelector('#nextPage');
    const errorMessage = document.querySelector('#error');
    const firstPage = document.querySelector('.firstPage');


    firstPage.style.display = "block";
    nextPage.style.display = "none";

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const number = document.querySelector('#number').value;
        const adjective = document.querySelector('#adjective').value;
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const place = document.querySelector('#place').value;

        let myText;

        if (number === '') {
            myText = "Please provide a number.";
            document.querySelector('#number').focus();
        } else if (adjective === '') {
            myText = "Please provide an adjective.";
            document.querySelector('#adjective').focus();
        } else if (noun1 === '') {
            myText = "Please provide a noun.";
            document.querySelector('#noun1').focus();
        } else if (noun2 === '') {
            myText = "Please provide a noun.";
            document.querySelector('#noun2').focus();
        } else if (place === '') {
            myText = "Please provide a place.";
            document.querySelector('#place').focus();
        } else {
            // Clear error message if all fields are valid
            errorMessage.innerHTML = '';

            myText = `<h2>System Message</h2>
                <p>You are the ${number}th appointed secret agent, ${adjective} and unstoppable. Your mission:
                protect ${noun2} from ${noun1} at all costs. Your adventure begins in ${place}.
                Time is running out, Agent. Can you uncover the hidden plans, save ${noun2}, and outwit ${noun1},
                or will the world fall into chaos? The fate of everything depends on your next move.</p>
                
                <div class="button">
                        <button id="confirm">Confirm</button>
                </div>
                <div class="alien">
                        <img id="alienImage" src="images/alien.png" alt="alien">
                </div>`;

            // Clear form fields
            document.querySelector('#number').value = '';
            document.querySelector('#adjective').value = '';
            document.querySelector('#noun1').value = '';
            document.querySelector('#noun2').value = '';
            document.querySelector('#place').value = '';

            // Display the MadLib
            madlib.innerHTML = myText;
            firstPage.style.display = "none"; 
            nextPage.style.display = "block"; 
        }

        // Display error message if there's an issue
        if (myText !== '') {
            errorMessage.innerHTML = myText;
        }
    });

    // Use event delegation for the confirm button 
    document.addEventListener('click', function (event) {
        if (event.target && event.target.id === 'confirm') {
            event.preventDefault();
            nextPage.style.display = "none";  
            firstPage.style.display = "block"; 
        }
    });


})();
