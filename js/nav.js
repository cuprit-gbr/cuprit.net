// Listen for scroll events on the window
window.addEventListener('scroll', function() {
    // Define the sections that could be targeted by the navigation
    const sections = document.querySelectorAll('main > div');
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');

    // Get the intro section for specific behavior
    const introSection = document.querySelector('#intro');
    const introTop = introSection.offsetTop;
    const introBottom = introTop + introSection.offsetHeight;

    // Calculate the current scroll position
    const scrollY = window.scrollY;
    const screenCenter = scrollY + window.innerHeight / 2;

    // Remove 'active' and 'intro' class from all nav links initially
    navLinks.forEach(link => {
        link.classList.remove('active', 'intro');
    });

    // Check if the navbar is over the intro section
    if (scrollY >= introTop && scrollY <= introBottom) {
        // Add 'intro' class to all nav links
        navLinks.forEach(link => link.classList.add('intro'));
    } else {
        // Check each section to see if it's currently in view
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            // If the center of the screen is within the current section
            if (screenCenter >= top && screenCenter <= bottom) {
                // Find the nav link with the matching data-target and add 'active' class
                navLinks.forEach(link => {
                    if (link.getAttribute('data-target') === section.getAttribute('id')) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
});

// Add click event listeners to nav-links for smooth scrolling to sections
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor link behavior
        
        // Get the section ID from the data-target attribute of the clicked nav-link
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        // Use the scrollIntoView method to scroll to the target section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});





// document.addEventListener("DOMContentLoaded", function () {
//     const nav = document.querySelector('.navbar');
//     const intro = document.getElementById('intro');
//     const contact = document.getElementById('contact');
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('.nav-link, .nav-button:not(.logo)');
//     const logo = document.querySelector('.logo');

//     let lastClickedLink = null; // Keep track of the last clicked link

//     function updateActiveNavLink(scrollPosition) {
//         let isInIntroOrContact = scrollPosition >= intro.offsetTop && scrollPosition <= intro.offsetTop + intro.offsetHeight ||
//                                   scrollPosition >= contact.offsetTop && scrollPosition <= contact.offsetTop + contact.offsetHeight;

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop - nav.offsetHeight;
//             const sectionBottom = sectionTop + section.offsetHeight;
//             if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
//                 if (section.id === 'intro' || section.id === 'contact') {
//                     isInIntroOrContact = true;
//                 }
//                 if (!lastClickedLink || section.getAttribute('id') === lastClickedLink.getAttribute('data-target')) {
//                     setLinkAsActive(section.getAttribute('id'));
//                 }
//             }
//         });

//         logo.style.color = isInIntroOrContact ? '#fff' : '#637F8B';
//     }

//     function setLinkAsActive(sectionId) {
//         navLinks.forEach(link => {
//             if (link.getAttribute('data-target') === sectionId) {
//                 applyActiveLinkStyle(link);
//             } else {
//                 applyNonActiveLinkStyle(link, sectionId === 'intro' || sectionId === 'contact');
//             }
//         });
//     }

//     function applyActiveLinkStyle(link) {
//         link.classList.add('active');
//         link.style.color = '#fff';
//         link.style.borderColor = '#000';
//         link.style.backgroundColor = '#000';
//     }

//     function applyNonActiveLinkStyle(link, isInIntroOrContact) {
//         link.classList.remove('active');
//         link.style.color = isInIntroOrContact ? '#fff' : '#000';
//         link.style.borderColor = isInIntroOrContact ? '#fff' : '#000';
//         link.style.backgroundColor = 'transparent';
//     }

//     window.addEventListener('scroll', () => {
//         if (!lastClickedLink) {
//             updateActiveNavLink(window.pageYOffset);
//         }
//     });

//     navLinks.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             lastClickedLink = link; // Update the last clicked link
//             navLinks.forEach(lnk => applyNonActiveLinkStyle(lnk, false)); // Reset styles
//             applyActiveLinkStyle(link); // Apply active style to clicked link
//             const targetId = link.getAttribute('data-target') || 'intro';
//             const targetElement = document.getElementById(targetId);

//             if (targetElement) {
//                 targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                 // Reset lastClickedLink after scrolling to the target
//                 setTimeout(() => { lastClickedLink = null; updateActiveNavLink(window.pageYOffset); }, 500);
//             }
//         });
//     });

//     // Initial setup
//     updateActiveNavLink(window.pageYOffset);
// });

