/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navigationBar = document.querySelector('#navbar__list');
const sectionList = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// get currently focused section
function getFocusedSection() {
    const navigationBarHeight = navigationBar.offsetHeight;
    const overlappingOffset = 100;

    for (const section of sectionList) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        // section is in focus
        if (sectionTop + sectionHeight - navigationBarHeight > overlappingOffset) {
            return section;
        }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavigationBar() {
    for (const section of sectionList) {
        const navigationItem = document.createElement('li');
        navigationItem.dataset.nav = section.id;
        navigationItem.textContent = section.dataset.nav;
        navigationItem.className = 'menu__link';

        navigationBar.appendChild(navigationItem);
    }

    // set first navigation item active by default
    navigationBar.firstChild.classList.add('link__active');
}

// Add class 'active' to section when near top of viewport
function initSetSectionActive() {
    document.addEventListener('scroll', function (event) {
        const activeSection = getFocusedSection();

        // set section active
        for (const section of sectionList) {
            if (section === activeSection) {
                section.classList.add('your-active-class');
            } else {
                section.classList.remove('your-active-class');
            }
        }

        // set section navigation item active
        const navigationItems = navigationBar.childNodes;
        for (const navigationItem of navigationItems) {
            if (navigationItem.dataset.nav === activeSection?.id) {
                navigationItem.classList.add('link__active');
            } else {                
                navigationItem.classList.remove('link__active');
            }
        }
    });
}

// Scroll to anchor ID using scrollTO event
function initScollToSection() {
    navigationBar.addEventListener('click', function (event) {
        const targetSectionId = event.target.dataset.nav;
        const targetSection = document.querySelector('#' + targetSectionId);
        const targetSectionTop = targetSection.offsetTop - navigationBar.offsetHeight;
        window.scrollTo({top: targetSectionTop, behavior: 'smooth'});
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavigationBar();

// Scroll to section on link click
initScollToSection();

// Set sections as active
initSetSectionActive();
