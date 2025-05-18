        // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Header Scroll Effect
        const header = document.getElementById('header');
        const logo = document.querySelector('.logo');
        const navLinksItems = document.querySelector('.nav-links');
        const hamburgerMenu = document.querySelector('.hamburger');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                logo.classList.add('logo-scrolled');
                navLinksItems.classList.add('nav-links-scrolled');
                hamburgerMenu.classList.add('hamburger-scrolled');
            } else {
                header.classList.remove('scrolled');
                logo.classList.remove('logo-scrolled');
                navLinksItems.classList.remove('nav-links-scrolled');
                hamburgerMenu.classList.remove('hamburger-scrolled');
            }
        });

        // Back to Top Button
        const backToTopButton = document.querySelector('.back-to-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Animate Skill Bars on Scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkillBars() {
            skillBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
            });
        }

        // Check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }

        // Animate skill bars when skills section comes into view
        window.addEventListener('scroll', () => {
            const skillsSection = document.querySelector('.skills');
            if (isInViewport(skillsSection)) {
                animateSkillBars();
            }
        });

        // Testimonial Slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const dots = document.querySelectorAll('.dot');
        let currentSlide = 0;

        function showSlide(index) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            testimonialSlides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        prevBtn.addEventListener('click', () => {
            if (currentSlide === 0) {
                showSlide(testimonialSlides.length - 1);
            } else {
                showSlide(currentSlide - 1);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentSlide === testimonialSlides.length - 1) {
                showSlide(0);
            } else {
                showSlide(currentSlide + 1);
            }
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Auto slide testimonials
        setInterval(() => {
            if (currentSlide === testimonialSlides.length - 1) {
                showSlide(0);
            } else {
                showSlide(currentSlide + 1);
            }
        }, 5000);

        // Form Submission (Demo only)
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just log the values and show an alert
            console.log({ name, email, subject, message });
            
            // Clear form
            contactForm.reset();
            
            // Show success message (in a real app, you'd want to handle this better)
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        });

        // Initialize animations and effects
        document.addEventListener('DOMContentLoaded', () => {
            if (isInViewport(document.querySelector('.skills'))) {
                animateSkillBars();
            }
        });
