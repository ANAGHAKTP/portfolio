document.addEventListener('DOMContentLoaded', function () {
    // Interactive Education Timeline
    const timelineToggles = document.querySelectorAll('.timeline-toggle');
    timelineToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            const item = toggle.closest('.timeline-item');
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                document.querySelectorAll('.timeline-item.active').forEach(activeItem => {
                    activeItem.classList.remove('active');
                });
                item.classList.add('active');
            }
        });
    });
    // Interactive Experience Timeline
    const expToggles = document.querySelectorAll('.exp-toggle');
    expToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            const card = toggle.closest('.exp-card');
            if (card.classList.contains('active')) {
                card.classList.remove('active');
            } else {
                document.querySelectorAll('.exp-card.active').forEach(activeCard => {
                    activeCard.classList.remove('active');
                });
                card.classList.add('active');
            }
        });
    });
    // Contact form real-time validation
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    function validateName() {
        if (nameInput.value.trim().length < 2) {
            nameError.textContent = "Please enter your name.";
            return false;
        } else {
            nameError.textContent = "";
            return true;
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
    }

    function validateMessage() {
        if (messageInput.value.trim().length < 10) {
            messageError.textContent = "Message should be at least 10 characters.";
            return false;
        } else {
            messageError.textContent = "";
            return true;
        }
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    // EmailJS integration for contact form
    (function() {
        // Replace these with your actual EmailJS values
        const EMAILJS_SERVICE_ID = 'your_service_id';
        const EMAILJS_TEMPLATE_ID = 'your_template_id';
        const EMAILJS_PUBLIC_KEY = 'your_public_key';

        // Initialize EmailJS
        if (window.emailjs) {
            emailjs.init(EMAILJS_PUBLIC_KEY);
        }

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            const submitButton = contactForm.querySelector('button[type="submit"]');
            // Create feedback message element
            let feedbackMsg = document.createElement('div');
            feedbackMsg.id = 'form-feedback';
            feedbackMsg.style.marginTop = '15px';
            feedbackMsg.style.fontWeight = 'bold';
            contactForm.appendChild(feedbackMsg);

            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // Validate again before sending
                let valid = true;
                if (typeof validateName === 'function' && !validateName()) valid = false;
                if (typeof validateEmail === 'function' && !validateEmail()) valid = false;
                if (typeof validateMessage === 'function' && !validateMessage()) valid = false;
                if (!valid) return;

                // Show loading state
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
                feedbackMsg.textContent = '';
                feedbackMsg.style.color = '';

                // Prepare params for EmailJS
                const params = {
                    from_name: contactForm.name.value,
                    from_email: contactForm.email.value,
                    message: contactForm.message.value
                };

                emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
                    .then(function(response) {
                        feedbackMsg.textContent = 'Message sent successfully!';
                        feedbackMsg.style.color = 'green';
                        contactForm.reset();
                    }, function(error) {
                        feedbackMsg.textContent = 'Failed to send message. Please try again later.';
                        feedbackMsg.style.color = 'red';
                    })
                    .finally(function() {
                        submitButton.disabled = false;
                        submitButton.textContent = 'Send Message';
                    });
            });
        }
    })();

    // Animated skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-level');
    const skillsSection = document.querySelector('.skills-bars');
    let skillsAnimated = false;
    function animateSkills() {
        if (!skillsSection) return;
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100 && !skillsAnimated) {
            skillBars.forEach(bar => {
                bar.style.width = bar.dataset.level;
            });
            skillsAnimated = true;
        } else if (sectionTop > windowHeight && skillsAnimated) {
            skillBars.forEach(bar => {
                bar.style.width = '0';
            });
            skillsAnimated = false;
        }
    }
    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Initial check

    // Project Modal Popups
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');
    const modalTech = document.getElementById('modal-tech');
    const modalLinks = document.getElementById('modal-links');
    const closeModal = document.querySelector('.close-modal');

    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent link clicks from triggering modal
            if (e.target.closest('a')) return;
            modal.style.display = 'flex';
            modalImg.src = card.dataset.img;
            modalTitle.textContent = card.dataset.title;
            modalDesc.textContent = card.dataset.description;
            // Tech badges
            modalTech.innerHTML = '';
            if (card.dataset.tech) {
                card.dataset.tech.split(',').forEach(tech => {
                    const span = document.createElement('span');
                    span.className = 'tech-badge';
                    span.textContent = tech.trim();
                    modalTech.appendChild(span);
                });
            }
            // Links
            modalLinks.innerHTML = '';
            if (card.dataset.github && card.dataset.github !== '#') {
                const githubLink = document.createElement('a');
                githubLink.href = card.dataset.github;
                githubLink.target = '_blank';
                githubLink.innerHTML = '<i class="fab fa-github"></i> GitHub';
                modalLinks.appendChild(githubLink);
            }
            if (card.dataset.demo && card.dataset.demo !== '#') {
                const demoLink = document.createElement('a');
                demoLink.href = card.dataset.demo;
                demoLink.target = '_blank';
                demoLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Demo';
                modalLinks.appendChild(demoLink);
            }
        });
    });
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}); 