"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundCellsProps {
  children?: React.ReactNode;
  className?: string;
}

export const BackgroundCells = ({ children, className }: BackgroundCellsProps) => {
  return (
    <div className={cn("relative flex justify-center overflow-hidden h-full w-full", className)}>
      <BackgroundCellCore />
      {children && (
        <div className="relative z-[60] w-full">
          {children}
        </div>
      )}
    </div>
  );
};

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const size = 150;
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 w-full h-full"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Top fade gradient */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-[55]" />
        {/* Bottom fade gradient */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent z-[55]" />
        
        <div
          className="absolute inset-0 z-[45] bg-transparent"
          style={{
            maskImage: `radial-gradient(${size}px circle at ${mousePosition.x}px ${mousePosition.y}px, white, transparent)`,
            WebkitMaskImage: `radial-gradient(${size}px circle at ${mousePosition.x}px ${mousePosition.y}px, white, transparent)`,
            pointerEvents: "none",
          }}
        >
          <Pattern cellClassName="border-blue-600/30 relative z-[45]" />
        </div>
        <Pattern className="opacity-[0.3]" cellClassName="border-neutral-700" />
      </div>
    </div>
  );
};

interface PatternProps {
  className?: string;
  cellClassName?: string;
}

const Pattern = ({ className, cellClassName }: PatternProps) => {
  const x = new Array(60).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState<[number, number] | null>(null);

  return (
    <div className={cn("flex flex-row relative z-30 w-full h-full", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col relative z-20 border-b flex-1"
        >
          {row.map((column, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) +
                    Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.1, 0],
                  transition: { duration: distance * 0.2 },
                });
              }
            }, [clickedCell]);

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn(
                  "bg-transparent border-l border-b border-neutral-600/30 flex-1 group",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                  animate={controls}
                  className="relative h-10 w-full aspect-square"
                >
                  <div className="absolute inset-0 bg-[rgba(14,165,233,0.3)] rounded-sm" />
                  <div className="absolute inset-0 bg-[rgba(14,165,233,0.2)] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};