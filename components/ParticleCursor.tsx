'use client';

import { useEffect, useRef } from 'react';

export function ParticleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles: any[] = [];
    let mouse = { x: -100, y: -100 };
    let delayedMouse = { x: -100, y: -100 };
    let isMoving = false;
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMoving = true;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        isMoving = false;
      }, 100);

      // Spawn particles on move
      if (Math.random() > 0.5) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          size: Math.random() * 2 + 0.5,
          color: Math.random() > 0.5 ? '#00E5FF' : '#A855F7' // Cyan or Purple
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Lerp delayed mouse
      delayedMouse.x += (mouse.x - delayedMouse.x) * 0.15;
      delayedMouse.y += (mouse.y - delayedMouse.y) * 0.15;

      // Draw ambient glow around delayed mouse
      const gradient = ctx.createRadialGradient(
        delayedMouse.x, delayedMouse.y, 0,
        delayedMouse.x, delayedMouse.y, 200
      );
      gradient.addColorStop(0, 'rgba(0, 229, 255, 0.08)');
      gradient.addColorStop(1, 'rgba(0, 229, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw cursor ring
      ctx.beginPath();
      ctx.arc(delayedMouse.x, delayedMouse.y, 12, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw cursor dot
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#00E5FF';
      ctx.fill();

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.015; // Fade out speed

        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Spawn idle particles if not moving
      if (!isMoving && Math.random() > 0.9) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 20,
          y: mouse.y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5 - 0.5, // Float up slightly
          life: 1,
          size: Math.random() * 1.5 + 0.5,
          color: '#00E5FF'
        });
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100] hidden md:block"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
