const mobileMenuBtn = document.getElementById("mobile-menu-btn")
let isMobileMenuOpen = false;
const mobileMenu = document.getElementById("mobile-menu");
const mainPageWrapper = document.getElementById("main-page-wrapper")
const mobileNavLinks = document.getElementsByClassName("mobile-nav-link");
const lastFocusElem = mobileNavLinks[mobileNavLinks.length - 1].getElementsByTagName('a')[0]
const firstFocusElem = mobileMenuBtn;

document.addEventListener('DOMContentLoaded', function() {
    // Close the menu on page load
    closeMobileMenu();
});

window.addEventListener('pageshow', function(event) {
    // Check if the event persisted across page loads (e.g., using the back button)
    if (event.persisted) {
        // Close the mobile menu
        closeMobileMenu();
    }
});

mobileMenuBtn.addEventListener('click', handleMobileMenuBtn)

function handleMobileMenuBtn(event) {
    isMobileMenuOpen ? closeMobileMenu() : openMobileMenu();
}

function closeMobileMenu() {
    mobileMenuBtn.setAttribute('aria-expanded', "false");
    mobileMenu.setAttribute('aria-hidden', "true");
    isMobileMenuOpen = false;
    mobileMenu.classList.remove("menu-open")
    mobileMenuBtn.classList.remove("active");

    if(mainPageWrapper) {
        mainPageWrapper.style.zIndex = "1"
    }
    
    for(i of mobileNavLinks){
        i.firstChild.tabIndex = -1;
   }

   document.removeEventListener('keydown', navigateMenu);
   window.removeEventListener('resize', handleScreenResizeMobileMenu);
}

function openMobileMenu(event) {
    mobileMenuBtn.setAttribute('aria-expanded', "true");
    mobileMenu.setAttribute('aria-hidden', "false");
    isMobileMenuOpen = true;
    mobileMenu.classList.add("menu-open");
    mobileMenuBtn.classList.add("active");
    if(mainPageWrapper) {
        mainPageWrapper.style.zIndex = "-1";
    }
   
   for(i of mobileNavLinks){
        i.firstChild.tabIndex = 0;
   }

   document.addEventListener('keydown', navigateMenu);
   window.addEventListener('resize', handleScreenResizeMobileMenu);
}

function handleScreenResizeMobileMenu() {
    if(window.innerWidth > 1000) {
        closeMobileMenu();
    }
}

function navigateMenu(e) {
    if (e.key === 'Tab') {
        // If Shift key is also held, move focus backward
        if (e.shiftKey && document.activeElement === firstFocusElem) {
          e.preventDefault();
          lastFocusElem.focus();
        }
        // If only Tab key is pressed, move focus forward
        else if (!e.shiftKey && document.activeElement === lastFocusElem) {
            e.preventDefault();
            firstFocusElem.focus();
        }
      }
}