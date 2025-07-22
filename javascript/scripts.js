document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Testimonial Carousel
const testimonials = document.querySelectorAll('.testimonial-carousel .testimonial');
const prevBtn = document.querySelector('.prev-testimonial');
const nextBtn = document.querySelector('.next-testimonial');
let currentTestimonial = 0;
let testimonialInterval;

function showTestimonial(index) {
    testimonials.forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function startTestimonialRotation() {
    testimonialInterval = setInterval(nextTestimonial, 4000);
}

function stopTestimonialRotation() {
    clearInterval(testimonialInterval);
}

if (testimonials.length > 0) {
    showTestimonial(currentTestimonial);
    startTestimonialRotation();
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            stopTestimonialRotation();
            prevTestimonial();
            startTestimonialRotation();
        });
        nextBtn.addEventListener('click', () => {
            stopTestimonialRotation();
            nextTestimonial();
            startTestimonialRotation();
        });
    }
}

// Enquiry Form Submission
const enquiryForm = document.querySelector('.enquiry-form');
const formSuccess = document.querySelector('.form-success');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        enquiryForm.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
    });
}