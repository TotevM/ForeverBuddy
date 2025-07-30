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
        
        if (success) {
            success.style.display = 'block';
            success.style.opacity = '0';
            success.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                success.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                success.style.opacity = '1';
                success.style.transform = 'translateY(0)';
            }, 10);
            
            setTimeout(() => {
                success.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                success.style.opacity = '0';
                success.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    success.style.display = 'none';
                }, 500);
            }, 3000);
        }
        
        form.reset();
    });
}); 