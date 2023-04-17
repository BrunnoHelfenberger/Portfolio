export const animateLogo = () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Define o número de partículas
    const numParticles = 150;

    // Define o array para armazenar as partículas
    const particles = [];

    // Define a função para gerar partículas
    function createParticle() {
        // Define as propriedades aleatórias da partícula
        const particle = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 1,
            speedX: Math.random() * 2 - 1, // velocidade aleatória entre -1 e 1 para o eixo X
            speedY: Math.random() * 2 - 1, // velocidade aleatória entre -1 e 1 para o eixo Y
            color: 'rgba(255, 255, 255)',
            alpha: 0,
            fadeDirection: 1
        };

        // Adiciona a partícula ao array de partículas
        particles.push(particle);
    }

    // Cria as partículas
    for (let i = 0; i < numParticles; i++) {
        createParticle();
    }

    // Define a função para desenhar as partículas
    function drawParticles() {
        // Limpa o canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Desenha cada partícula
        particles.forEach((particle) => {
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, 3 * Math.PI);
            ctx.fill();
        });
    }

    // Define a função para atualizar as partículas
    function updateParticles() {
        // Atualiza a posição de cada partícula
        particles.forEach((particle, index) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Verifica se a partícula saiu da tela
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY *= -1;
            }

            // Verifica se houve colisão com outras partículas
            for (let i = index + 1; i < particles.length; i++) {
                const otherParticle = particles[i];
                const dx = otherParticle.x - particle.x;
                const dy = otherParticle.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < particle.size + otherParticle.size) {
                    // Inverte as direções das partículas para simular a colisão
                    particle.speedX *= -1;
                    particle.speedY *= -1;
                    otherParticle.speedX *= -1;
                    otherParticle.speedY *= -1;
                }
            }

        });



        // Verifica as colisões entre as partículas
        for (let i = 0; i < particles.length; i++) {
            const particleA = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const particleB = particles[j];
                const dx = particleB.x - particleA.x;
                const dy = particleB.y - particleA.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Verifica se as partículas estão colidindo
                if (distance < particleA.size + particleB.size) {
                    // Calcula a nova velocidade das partículas
                    const angle = Math.atan2(dy, dx);
                    const speedA = Math.sqrt(particleA.speedX * particleA.speedX + particleA.speedY * particleA.speedY);
                    const speedB = Math.sqrt(particleB.speedX * particleB.speedX + particleB.speedY * particleB.speedY);
                    const directionA = Math.atan2(particleA.speedY, particleA.speedX);
                    const directionB = Math.atan2(particleB.speedY, particleB.speedX);
                    const velocityAX = speedA * Math.cos(directionA - angle);
                    const velocityAY = speedA * Math.sin(directionA - angle);
                    const velocityBX = speedB * Math.cos(directionB - angle);
                    const velocityBY = speedB * Math.sin(directionB - angle);
                    const finalVelocityAX = ((particleA.size - particleB.size) * velocityAX + (particleB.size + particleB.size) * velocityBX) / (particleA.size + particleB.size);
                    const finalVelocityAY = velocityAY;
                    const finalVelocityBX = ((particleA.size + particleA.size) * velocityAX + (particleB.size - particleA.size) * velocityBX) / (particleA.size + particleB.size);
                    const finalVelocityBY = velocityBY;

                    // Atualiza as velocidades das partículas
                    particleA.speedX = Math.cos(angle) * finalVelocityAX + Math.cos(angle + Math.PI / 2) * finalVelocityAY;
                    particleA.speedY = Math.sin(angle) * finalVelocityAX + Math.sin(angle + Math.PI / 2) * finalVelocityAY;
                    particleB.speedX = Math.cos(angle) * finalVelocityBX + Math.cos(angle + Math.PI / 2) * finalVelocityBY;
                    particleB.speedY = Math.sin(angle) * finalVelocityBX + Math.sin(angle + Math.PI / 2) * finalVelocityBY;
                }
            }
        }

        // Atualiza a posição de cada partícula
        particles.forEach((particle) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Verifica se a partícula saiu da tela
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY *= -1;
            }

            // Verifica se a partícula está em um estado de fade in ou fade out
            if (particle.fadeDirection === 1) {
                // Se a partícula está em fade in, aumenta a opacidade
                if (particle.alpha < 0.9) {
                    particle.alpha += 0.01;
                } else {
                    // Quando a partícula chega a 100% de opacidade, muda o fadeDirection para -1
                    particle.fadeDirection = -1;
                }

                // Verifica a colisão com outras partículas
                particles.forEach((otherParticle) => {
                    // Verifica se não é a mesma partícula
                    if (particle !== otherParticle) {
                        // Calcula a distância entre as duas partículas
                        const dx = particle.x - otherParticle.x;
                        const dy = particle.y - otherParticle.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        // Verifica se houve colisão
                        if (distance < particle.size + otherParticle.size) {
                            // Troca a direção da velocidade de ambas as partículas
                            particle.speedX *= -1;
                            particle.speedY *= -1;
                            otherParticle.speedX *= -1;
                            otherParticle.speedY *= -1;
                        }
                    }
                });
            }

            // Verifica se a partícula saiu da tela
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY *= -1;
            }

            // Verifica se a partícula está em um estado de fade in ou fade out
            if (particle.fadeDirection === 1) {
                // Se a partícula está em fade in, aumenta a opacidade
                if (particle.alpha < 0.8) {
                    particle.alpha += 0.005;
                } else {
                    // Quando a partícula chega a 100% de opacidade, muda o fadeDirection para -1
                    particle.fadeDirection = -1;
                }
            } else {
                // Se a partícula está em fade out, diminui a opacidade
                if (particle.alpha > 0.1) {
                    particle.alpha -= 0.005;
                } else {
                    // Quando a partícula chega a 0% de opacidade, muda o fadeDirection para 1
                    particle.fadeDirection = 1;
                }
            }

            // Atualiza a cor da partícula com a nova opacidade
            particle.color = `rgba(255, 255, 255, ${particle.alpha})`;
        });
    }

    // Define a função de animação
    function animate() {
        // Atualiza as partículas
        updateParticles();

        // Desenha as partículas
        drawParticles();

        // Chama a função de animação novamente
        requestAnimationFrame(animate);
    }

    // Inicia a animação
    animate();

}