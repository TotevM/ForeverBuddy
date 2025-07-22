document.addEventListener('DOMContentLoaded', () => {
    if (!window.location.pathname.includes('contact.html')) return;
    const form = document.querySelector('.enquiry-form');
    const success = document.querySelector('.form-success');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;
        form.querySelectorAll('input, textarea').forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.classList.add('shake');
                setTimeout(() => input.classList.remove('shake'), 400);
            }
        });
        if (!valid) return;
        form.style.opacity = 1;
        form.style.transition = 'opacity 0.5s';
        form.style.opacity = 0;
        setTimeout(() => {
            form.style.display = 'none';
            if (success) success.style.display = 'block';
        }, 500);
    });
}); 