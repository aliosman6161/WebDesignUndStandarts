    (function() {
        'use strict';
        
        // Canvas-Animation Setup
        const canvas = document.getElementById('telemetryCanvas');
        const ctx = canvas.getContext('2d');
        
        // Überprüfe Reduced Motion Präferenz
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        // Animation State
        let animationId;
        let speed = 0;
        let targetSpeed = 180;
        let acceleration = 0.5;
        
        // Canvas-Größe für Retina-Displays
        const dpr = window.devicePixelRatio || 1;
        canvas.width = 400 * dpr;
        canvas.height = 400 * dpr;
        canvas.style.width = '400px';
        canvas.style.height = '400px';
        ctx.scale(dpr, dpr);
        
        /**
         * Zeichnet den Tachometer-Hintergrund
         */
        function drawSpeedometer() {
            const centerX = 200;
            const centerY = 200;
            const radius = 150;
            
            // Clear canvas
            ctx.clearRect(0, 0, 400, 400);
            
            // Äußerer Ring
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 20;
            ctx.stroke();
            
            // Geschwindigkeitsbereich (0-260 km/h)
            const startAngle = -Math.PI * 1.25;
            const endAngle = Math.PI * 0.25;
            
            // Hintergrund-Arc
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius - 10, startAngle, endAngle);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 40;
            ctx.stroke();
            
            // Aktuelle Geschwindigkeit Arc
            const speedPercentage = Math.min(speed / 260, 1);
            const currentAngle = startAngle + (endAngle - startAngle) * speedPercentage;
            
            // Gradient für Geschwindigkeitsanzeige
            const gradient = ctx.createLinearGradient(0, 0, 400, 400);
            gradient.addColorStop(0, '#c41e3a');
            gradient.addColorStop(1, '#ff6b6b');
            
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius - 10, startAngle, currentAngle);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 40;
            ctx.lineCap = 'round';
            ctx.stroke();
            
            // Geschwindigkeitsmarkierungen
            for (let i = 0; i <= 260; i += 20) {
                const angle = startAngle + (endAngle - startAngle) * (i / 260);
                const x1 = centerX + Math.cos(angle) * (radius - 40);
                const y1 = centerY + Math.sin(angle) * (radius - 40);
                const x2 = centerX + Math.cos(angle) * (radius - 50);
                const y2 = centerY + Math.sin(angle) * (radius - 50);
                
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.lineWidth = i % 40 === 0 ? 3 : 1;
                ctx.stroke();
                
                // Beschriftungen bei wichtigen Markierungen
                if (i % 40 === 0) {
                    ctx.save();
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                    ctx.font = '12px system-ui, -apple-system, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    const textX = centerX + Math.cos(angle) * (radius - 70);
                    const textY = centerY + Math.sin(angle) * (radius - 70);
                    ctx.fillText(i.toString(), textX, textY);
                    ctx.restore();
                }
            }
            
            // Zentrale Geschwindigkeitsanzeige
            ctx.save();
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 48px system-ui, -apple-system, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(Math.round(speed).toString(), centerX, centerY - 20);
            
            ctx.font = '16px system-ui, -apple-system, sans-serif';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.fillText('km/h', centerX, centerY + 20);
            ctx.restore();
            
            // Zusätzliche Info
            ctx.save();
            ctx.font = '12px system-ui, -apple-system, sans-serif';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.textAlign = 'center';
            ctx.fillText('TELEMETRIE AKTIV', centerX, centerY + 100);
            ctx.restore();
        }
        
        /**
         * Animations-Loop
         */
        function animate() {
            // Update Geschwindigkeit mit realistischer Beschleunigung
            if (Math.abs(speed - targetSpeed) > 0.5) {
                if (speed < targetSpeed) {
                    speed += acceleration;
                } else {
                    speed -= acceleration * 2; // Schnelleres Bremsen
                }
            } else {
                // Neues zufälliges Ziel setzen
                targetSpeed = Math.random() * 240 + 20;
                acceleration = Math.random() * 0.5 + 0.3;
            }
            
            // Zeichne Frame
            drawSpeedometer();
            
            // Nächster Frame (nur wenn Reduced Motion nicht aktiv)
            if (!prefersReducedMotion) {
                animationId = requestAnimationFrame(animate);
            }
        }
        
        // Starte Animation oder zeige statisches Bild
        if (prefersReducedMotion) {
            // Zeige statisches Bild bei Reduced Motion
            speed = 120;
            drawSpeedometer();
        } else {
            // Starte Animation
            animate();
        }
        
        // Cleanup bei Seiten-Verlassen
        window.addEventListener('beforeunload', function() {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        });
        
        // Pause Animation wenn Canvas nicht sichtbar
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !prefersReducedMotion) {
                    if (!animationId) {
                        animate();
                    }
                } else {
                    if (animationId) {
                        cancelAnimationFrame(animationId);
                        animationId = null;
                    }
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(canvas);
        
        // Active Navigation Highlighting
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
        
        function updateActiveNav() {
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(function(section) {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');
                
                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.forEach(function(link) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
        
        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();
        
    })();