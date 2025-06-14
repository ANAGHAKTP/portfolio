document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio script loaded and DOM fully parsed.");

    // --- Smooth Scrolling for Navigation Links ---
    // Selects all navigation links within the header, including both desktop and potential mobile menu links
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // If it's a mobile menu link, close the mobile menu
                const mobileMenu = document.getElementById('mobile-nav-menu');
                const mobileMenuButton = document.getElementById('mobile-menu-button'); // Button itself
                if (mobileMenu && mobileMenu.classList.contains('open')) {
                    mobileMenu.classList.remove('open');
                    // Also toggle icons if button is available
                    if (mobileMenuButton) {
                        const openIcon = mobileMenuButton.querySelector('.icon-menu');
                        const closeIcon = mobileMenuButton.querySelector('.icon-x');
                        if (openIcon && closeIcon) {
                            openIcon.classList.remove('hidden');
                            closeIcon.classList.add('hidden');
                        }
                    }
                }
            }
        });
    });

    // --- Mobile Menu Toggle Functionality ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');

    if (mobileMenuButton && mobileNavMenu) {
        const openIcon = mobileMenuButton.querySelector('.icon-menu');
        const closeIcon = mobileMenuButton.querySelector('.icon-x');

        if (!openIcon || !closeIcon) {
            console.error("Menu icons (.icon-menu or .icon-x) not found inside the mobile menu button.");
        } else {
            mobileMenuButton.addEventListener('click', () => {
                mobileNavMenu.classList.toggle('open'); // 'open' class should control visibility

                // Toggle button icons by toggling 'hidden' class
                if (mobileNavMenu.classList.contains('open')) {
                    openIcon.classList.add('hidden');
                    closeIcon.classList.remove('hidden');
                } else {
                    openIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            });
        }
    } else {
        if (!mobileMenuButton) console.error("Mobile menu button not found.");
        if (!mobileNavMenu) console.error("Mobile nav menu container not found (expected #mobile-nav-menu).");
    }


    // --- Active Section Highlighting on Scroll ---
    const sections = document.querySelectorAll('main section[id]');
    // Re-select navLinks here to ensure we are working with a fresh NodeList for this specific functionality
    const allHeaderNavLinks = document.querySelectorAll('header nav a[href^="#"]');
    const scrollOffset = 100; // Offset to trigger highlighting earlier

    function highlightActiveLink() {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + scrollOffset;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                currentSectionId = section.id;
            }
        });

        allHeaderNavLinks.forEach(link => {
            link.classList.remove('active');
            // Check if the link's href matches #sectionId
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveLink);
    highlightActiveLink(); // Initial call to highlight link on page load


    // --- Basic Scroll-Triggered Animations (Intersection Observer) ---
    // Elements that should be animated need the class 'animate-on-scroll' in HTML
    // CSS needs to define the initial state (e.g., opacity: 0, transform: translateY(20px))
    // and the '.is-visible' state (e.g., opacity: 1, transform: translateY(0))
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: stop observing after the animation has played once
                    // observer.unobserve(entry.target);
                }
                // Optional: remove 'is-visible' when scrolling out of view if you want animations to replay
                // else {
                //     entry.target.classList.remove('is-visible');
                // }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
            // rootMargin: "-50px 0px -50px 0px" // Example: adjust trigger area
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        console.log("No elements with '.animate-on-scroll' found for Intersection Observer.");
    }

});
