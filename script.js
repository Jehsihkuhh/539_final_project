/* Code help
For pop-up:
https://www.youtube.com/watch?v=AF6vGYIyV8M 
https://www.youtube.com/watch?v=MBaw_6cPmAw 
https://www.youtube.com/watch?v=snhpoxtLugU&t=35s (blur effect)
*/

/* For game help
https://www.youtube.com/watch?v=uSJXZ3LkABE */



// javascript for pop-up
document.addEventListener('DOMContentLoaded', function() {
    console.log('loaded completely'); 

    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        console.log('this is the homepage');

    if (!sessionStorage.getItem('popupClicked')) {     
        var popup = document.getElementById('love-dogs-popup');
        var body = document.body;     

    if (popup) {
        popup.style.display = 'block';
        body.classList.add('blur');                               
        console.log('popup displayed');                           

        var boneButton = document.getElementById('bone');
        var pawsButton = document.getElementById('paws');

        var hidePopup = function() {
            console.log('button clicked'); 
            popup.style.display = 'none';
            body.classList.remove('blur');
            sessionStorage.setItem('popupClicked', 'true');
            };

    if (boneButton) {
        boneButton.addEventListener('click', hidePopup);
        }
    if (pawsButton) {
        pawsButton.addEventListener('click', hidePopup);
        }
    } else {
            console.log('popup element not found');
        }
    }
    } else {
        console.log('this is not the homepage');
    }
});


// javascript for game section

document.addEventListener('DOMContentLoaded', function() {
    console.log('fully loaded'); 

    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        console.log('this is the homepage');

    const giveTreatBtn = document.getElementById('give-treat-btn');
    const treatCountDisplay = document.getElementById('count');

    let treatCount = 0;

    if (giveTreatBtn) {
        giveTreatBtn.addEventListener('click', function() {
        treatCount++; 
        treatCountDisplay.textContent = treatCount; 
        console.log(`treat count: ${treatCount}`);
            });
        }
    } else {
        console.log('this is not the homepage');
    }
});






            












