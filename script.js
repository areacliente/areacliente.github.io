// GERADOR DE BOLINHAS PEQUENAS
    document.addEventListener('DOMContentLoaded', function() {
        const bubblesContainer = document.querySelector('.bubbles-container-light');
        const bubbleCount = 80; // Mais bolinhas, mas menores
        
        // Criar bolinhas pequenas
        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble-light';
            
            // Tamanho bem pequeno: entre 3px e 15px
            const size = Math.random() * 12 + 3;
            
            // Posição horizontal aleatória
            const left = Math.random() * 100;
            
            // Duração mais lenta para parecerem flutuando suavemente
            const duration = Math.random() * 25 + 15;
            
            // Atraso inicial aleatório
            const delay = Math.random() * 10;
            
            // Opacidade variável
            const opacity = Math.random() * 0.4 + 0.3;
            
            // Estilo das bolinhas
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${left}%`;
            bubble.style.animationDuration = `${duration}s`;
            bubble.style.animationDelay = `${delay}s`;
            bubble.style.opacity = opacity;
            
            // Efeito de movimento lateral suave
            const lateralMovement = (Math.random() - 0.5) * 40;
            bubble.style.animation = `bubbleFloatLight ${duration}s linear ${delay}s infinite`;
            
            // Adicionar bolinha ao container
            bubblesContainer.appendChild(bubble);
            
            // Animar movimento lateral
            let currentX = 0;
            const speed = (Math.random() - 0.5) * 0.5;
            
            function moveBubble() {
                currentX += speed;
                bubble.style.transform = `translateX(${currentX}px) translateY(0) scale(1)`;
                requestAnimationFrame(moveBubble);
            }
            
            // Iniciar movimento lateral suave
            setTimeout(moveBubble, delay * 1000);
        }
        
        // Adicionar índice para animação das letras
        const letters = document.querySelectorAll('.ambev-line-light .letter-light');
        letters.forEach((letter, index) => {
            letter.style.setProperty('--index', index);
        });
        
        // Efeito de mouse sutil nas bolinhas
        document.addEventListener('mousemove', (e) => {
            const bubbles = document.querySelectorAll('.bubble-light');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            bubbles.forEach(bubble => {
                const rect = bubble.getBoundingClientRect();
                const bubbleX = rect.left + rect.width / 2;
                const bubbleY = rect.top + rect.height / 2;
                
                const distanceX = mouseX - bubbleX;
                const distanceY = mouseY - bubbleY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                
                // Efeito sutil apenas quando muito perto
                if (distance < 80) {
                    const force = (80 - distance) / 80;
                    const moveX = (distanceX / distance) * force * 8;
                    const moveY = (distanceY / distance) * force * 8;
                    
                    bubble.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
                    bubble.style.transition = 'transform 0.3s ease';
                } else {
                    bubble.style.transform = 'translate(0, 0) scale(1)';
                }
            });
        });
        
        // Efeito de parallax suave nas bolinhas
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.1; // Muito suave
            
            bubblesContainer.style.transform = `translate3d(0px, ${rate}px, 0px)`;
            bubblesContainer.style.transition = 'transform 0.1s ease';
        });
        
        // Animar entrada dos elementos principais
        const elements = [
            document.querySelector('.ambev-line-light'),
            document.querySelector('.badge-light'),
            document.querySelector('.main-title-light'),
            document.querySelector('.subtitle-light'),
            document.querySelector('.description-light')
        ];
        
        elements.forEach((element, index) => {
            if (element) {
                element.style.animation = `fadeInUpLight 0.8s ease-out ${index * 0.15}s both`;
            }
        });
        
        // Efeito de respiração suave no título
        const mainTitle = document.querySelector('.main-title-light');
        if (mainTitle) {
            setInterval(() => {
                mainTitle.style.transform = 'scale(1.01)';
                setTimeout(() => {
                    mainTitle.style.transform = 'scale(1)';
                }, 1000);
            }, 3000);
        }
        
        // Reset das bolinhas ao redimensionar (menos agressivo)
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                bubblesContainer.innerHTML = '';
                for (let i = 0; i < bubbleCount; i++) {
                    const bubble = document.createElement('div');
                    bubble.className = 'bubble-light';
                    
                    const size = Math.random() * 12 + 3;
                    const left = Math.random() * 100;
                    const duration = Math.random() * 25 + 15;
                    const delay = Math.random() * 10;
                    const opacity = Math.random() * 0.4 + 0.3;
                    
                    bubble.style.width = `${size}px`;
                    bubble.style.height = `${size}px`;
                    bubble.style.left = `${left}%`;
                    bubble.style.animationDuration = `${duration}s`;
                    bubble.style.animationDelay = `${delay}s`;
                    bubble.style.opacity = opacity;
                    
                    bubblesContainer.appendChild(bubble);
                }
            }, 200);
        });
    });



        // Função para carregar imagens quando disponíveis
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Site AMBEV carregado!');
            


            // Corrigir link do menu para a seção de cadastro
            const cadastroLink = document.querySelector('nav a[href="#registration"]');
            if (cadastroLink) {
                cadastroLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.getElementById('registration').scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            }
        });
    


    // Animação avançada de contagem
    document.addEventListener('DOMContentLoaded', function() {
        const counters = document.querySelectorAll('.counter');
        
        const animateCounter = (counter, target, hasPlus = false, isPercent = false) => {
            let current = 0;
            const duration = 2000; // 2 segundos
            const increment = target / (duration / 16); // 60fps
            const startTime = Date.now();
            
            const updateCounter = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function para animação suave
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                current = target * easeOutQuart;
                
                if (isPercent) {
                    counter.textContent = Math.floor(current);
                } else if (hasPlus) {
                    counter.textContent = Math.floor(current).toLocaleString('pt-BR');
                } else {
                    counter.textContent = Math.floor(current);
                }
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    // Garantir que termine no valor exato
                    if (isPercent) {
                        counter.textContent = '100';
                    } else if (hasPlus) {
                        counter.textContent = target.toLocaleString('pt-BR');
                    } else {
                        counter.textContent = target;
                    }
                }
            };
            
            updateCounter();
        };

        // Observer para animar quando a seção estiver visível
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(counter => {
                        const parent = counter.closest('.stat-premium-number');
                        const target = parseInt(parent.getAttribute('data-target'));
                        const hasPlus = parent.querySelector('.plus') !== null;
                        const isPercent = parent.querySelector('.percent') !== null;
                        
                        // Reset para 0 antes de começar
                        counter.textContent = '0';
                        
                        // Pequeno delay entre cada contador para efeito em cascata
                        setTimeout(() => {
                            animateCounter(counter, target, hasPlus, isPercent);
                        }, parent.dataset.index * 200);
                    });
                    
                    // Adicionar índice para delay em cascata
                    document.querySelectorAll('.stat-premium-number').forEach((el, index) => {
                        el.dataset.index = index;
                    });
                    
                    observer.disconnect();
                }
            });
        }, { 
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });

        observer.observe(document.querySelector('.impact-premium-section'));
        
        // Efeito de parallax suave nos cards
        document.querySelectorAll('.stat-premium-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateY = (x - centerX) / 25;
                const rotateX = (centerY - y) / 25;
                
                card.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(-15px) rotateX(5deg)';
            });
        });
    });



    // Animação para os cards de características
    document.addEventListener('DOMContentLoaded', function() {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach((card, index) => {
            // Delay para aparecer em sequência
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
            
            // Efeito de brilho ao passar o mouse
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 15px 40px rgba(255, 215, 0, 0.15), 0 0 0 1px #ffd700';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = '0 15px 40px rgba(0, 31, 63, 0.1)';
            });
        });
        
        // Efeito 3D na imagem
        const imageFrame = document.querySelector('.image-frame');
        if (imageFrame) {
            imageFrame.addEventListener('mousemove', (e) => {
                const rect = imageFrame.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateY = (x - centerX) / 50;
                const rotateX = (centerY - y) / 50;
                
                imageFrame.style.transform = `perspective(1000px) rotateY(${-5 + rotateY}deg) rotateX(${rotateX}deg)`;
            });
            
            imageFrame.addEventListener('mouseleave', () => {
                imageFrame.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(0deg)';
            });
        }
        
        // Animar os pontos decorativos
        const dots = document.querySelectorAll('.decoration-dot');
        dots.forEach((dot, index) => {
            dot.style.animationDelay = `${index * -1}s`;
        });
    });



    // Efeito de onda animada
    document.addEventListener('DOMContentLoaded', function() {
        const wave = document.querySelector('.footer-wave');
        
        // Efeito parallax suave na onda
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            wave.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        });
        
        // Animação dos links do menu
        const footerLinks = document.querySelectorAll('.footer-link');
        footerLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.paddingLeft = '25px';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.paddingLeft = '20px';
            });
        });
        
        // Efeito de brilho nos ícones sociais
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 5px 15px rgba(255, 215, 0, 0.3)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        });
        
        // Smooth scroll para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
    
    // Pegar elementos
    const modal = document.getElementById('modalCadastro');
    const registerButtons = document.querySelectorAll('.register-btn');
    const closeBtn = document.querySelector('.modal-close');

    // Função para abrir
    function abrirJanela(e) {
        e.preventDefault(); // Não deixa a tela pular
        modal.classList.add('active'); // Mostra a janela
    }

    // Função para fechar
    window.fecharModal = function() {
        modal.classList.remove('active');
    }

    // Adiciona o evento de clique em CADA botão dos cards
    registerButtons.forEach(btn => {
        btn.addEventListener('click', abrirJanela);
    });

    // Fechar se clicar fora da caixinha branca
    modal.addEventListener('click', (e) => {
        if (e.target === modal) fecharModal();
    });

});