"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const CanvasRevealEffect = ({
  containerClassName,
  revealClassName,
  colors = [[255, 255, 255]],
  dotSize = 0.5,
  animationSpeed = 10,
}: {
  containerClassName?: string;
  revealClassName?: string;
  colors?: number[][];
  dotSize?: number;
  animationSpeed?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dots = useRef<any[]>([]);
  const colors_ = useRef<number[][]>(colors);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d")!;

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth * 2; // Higher resolution
      canvas.height = container.offsetHeight * 2; // Higher resolution
      ctx.scale(2, 2); // Scale for retina
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Dot {
      x: number;
      y: number;
      vy: number;
      targetRadius: number;
      currentRadius: number;
      color: number[];
      friction: number;
      acceleration: number;

      constructor(x: number, y: number, color: number[]) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.targetRadius = dotSize;
        this.currentRadius = 0;
        this.color = color;
        this.friction = 0.85; // Increased friction for smoother animation
        this.acceleration = 0.15; // Added acceleration for more responsive movement
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, 0.8)`; // Added slight transparency
        ctx.fill();
        ctx.closePath();
      }

      update() {
        const delta = this.targetRadius - this.currentRadius;
        this.vy += delta * this.acceleration;
        this.vy *= this.friction;
        this.currentRadius += this.vy;
        this.draw();
      }
    }

    const initDots = () => {
      dots.current = [];
      const gridSize = dotSize * 3; // Increased spacing between dots
      const numColumns = Math.floor(canvas.width / (2 * gridSize));
      const numRows = Math.floor(canvas.height / (2 * gridSize));

      for (let i = 0; i < numColumns; i++) {
        for (let j = 0; j < numRows; j++) {
          const x = i * gridSize + gridSize / 2;
          const y = j * gridSize + gridSize / 2;
          const colorIndex = Math.floor(Math.random() * colors_.current.length);
          const dot = new Dot(x, y, colors_.current[colorIndex]);
          dots.current.push(dot);
        }
      }
    };

    initDots();
    window.addEventListener("resize", initDots);

    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2);
      dots.current.forEach((dot) => dot.update());
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", initDots);
      cancelAnimationFrame(animationFrame);
    };
  }, [dotSize, animationSpeed]);

  return (
    <div ref={containerRef} className={cn("relative w-full h-full", containerClassName)}>
      <canvas
        ref={canvasRef}
        className={cn("absolute top-0 left-0 w-full h-full", revealClassName)}
        style={{ transform: 'scale(0.5)', transformOrigin: 'top left' }}
      />
    </div>
  );
};