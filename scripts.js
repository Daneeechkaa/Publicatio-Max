// scripts.js
function openModal() {
    var modal = document.getElementById('modal');
    var modalContent = document.querySelector('.modal-content');
    var passwordPopup = document.getElementById('password-popup');
    var passwordElement = document.getElementById('password');
    
    modal.style.display = 'flex';
    
    // Trigger the animation by adding the 'show' class
    setTimeout(function() {
        modalContent.classList.add('show');
    }, 10);
    
    // Add the blink animation after the modal is centered
    setTimeout(function() {
        modalContent.classList.add('blink');
    }, 1000); // Adjust the timing as needed

    // Show the password popup with animation
    passwordPopup.style.display = 'block';
    setTimeout(function() {
        passwordPopup.classList.add('show');
    }, 500);

    // Generate a random password and animate its reveal
    var password = generateRandomPassword();
    passwordElement.textContent = password;
    setTimeout(function() {
        revealPassword(passwordElement);
    }, 1500); // Adjust the timing as needed
}

function closeModal() {
    var modal = document.getElementById('modal');
    var modalContent = document.querySelector('.modal-content');
    var passwordPopup = document.getElementById('password-popup');
    
    // Remove the blink and show classes to reset the animation
    modalContent.classList.remove('blink', 'show');
    passwordPopup.classList.remove('show');
    
    // Hide the modal and password popup after the animation is removed
    setTimeout(function() {
        modal.style.display = 'none';
        passwordPopup.style.display = 'none';
    }, 500); // Adjust the timing to match the animation duration
}

function triggerAttack() {
    var viruses = document.querySelectorAll('.virus');
    var cannon = document.getElementById('cannon');
    
    // Show the viruses and animate them
    viruses.forEach(function(virus, index) {
        setTimeout(function() {
            virus.style.display = 'block';
            virus.style.transform = 'translate(50vw, 50vh)';
        }, index * 500);
    });
    
    // Show the cannon and start shooting
    setTimeout(function() {
        cannon.style.display = 'block';
        shootViruses();
    }, viruses.length * 500);
}

function shootViruses() {
    var viruses = document.querySelectorAll('.virus');
    var cannon = document.getElementById('cannon');
    var shotsFired = 0;
    
    viruses.forEach(function(virus, index) {
        setTimeout(function() {
            virus.style.display = 'none';
            shotsFired++;
            
            if (shotsFired === viruses.length) {
                cannon.style.display = 'none';
            }
        }, index * 500);
    });
}

function generateRandomPassword() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var passwordLength = 12;
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function revealPassword(element) {
    element.style.filter = 'blur(0)';
    element.style.opacity = '1';
}

// Acid attack function
function acidAttack() {
    var body = document.body;
    var hackedText = document.getElementById('hacked-text');

    // Add acid-attack class to body
    body.classList.add('acid-attack');

    // Show NEDOHACKERS text after 5 seconds
    setTimeout(function() {
        hackedText.classList.add('show');
    }, 5000);
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
