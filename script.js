  const emailForm = document.getElementById('emailForm');
        const emailInput = document.getElementById('emailInput');
        const successMessage = document.getElementById('successMessage');

        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const email = emailInput.value.trim();
            if (email && email.includes('@')) {
                
                successMessage.classList.add('show');
                
               
                emailInput.value = '';
                
               
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
                   
                console.log('Email submitted:', email);
            }
        });

          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
          window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('body::before');
            if (parallax) {
                document.body.style.backgroundPosition = `center ${scrolled * 0.5}px`;
            }
        });
