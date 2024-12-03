// For Pop-up

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed'); 

    // Get the popup element
    var popup = document.getElementById('love-dogs-popup');
    if (popup) {
        popup.style.display = 'block'; // displays the popup on load
        console.log('Popup displayed'); // confirm  change

        var boneButton = document.getElementById('bone');
        var pawsButton = document.getElementById('paws');

        // function to hide the popup then redirect
        var redirectToIndex = function() {
            console.log('Button clicked'); // confirm click

            // hide the popup when the button is clicked
            popup.style.display = 'none'; // hide popup
        };
        if (boneButton) {
            boneButton.addEventListener('click', redirectToIndex);
        }
        if (pawsButton) {
            pawsButton.addEventListener('click', redirectToIndex);
        }
    } else {
        console.log('Popup element not found');
    }
});


// For interactive cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.biography-card, .likes-card, .dislikes-card, .fun-facts-card');

    // Initially, set all cards in place
    cards.forEach((card, index) => {
        card.style.zIndex = cards.length - index;  // Cards are stacked in order
    });

    // Add event listener for each card click
    cards.forEach(function(card) {
    card.addEventListener('click', function() {
            // If the card is clicked, push it to the back
    card.classList.add('clicked'); // Apply the flip and move up effect

            // Move all other cards forward
    cards.forEach(function(otherCard) {
    if (otherCard !== card) {
        otherCard.style.zIndex = parseInt(otherCard.style.zIndex) + 1;
        otherCard.style.opacity = 1;  // Ensure other cards are fully visible
        otherCard.classList.remove('clicked'); // Remove the flip and move effect
        }
    });
    });
    });
});









