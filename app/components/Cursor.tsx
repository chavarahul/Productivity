'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
interface CursorProps {
  children?: React.ReactNode;
}

const Cursor: React.FC<CursorProps> = ({ children }) => {
  const [cursorColor, setCursorColor] = useState<string>('black');
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0
      });
      const [cursorVariant, setCursorVariant] = useState<"default" | "text">("default");
    
      useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
          const backgroundColor = window.getComputedStyle(document.body).backgroundColor;

          setCursorColor(backgroundColor === 'white' ? 'black' : 'white');
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          });
        };
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        };
      }, []);
      const variants :any= {
        default: {
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        },
        text: {
          height: 150,
          width: 150,
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
          backgroundColor: "yellow",
          mixBlendMode: "difference"
        }
      };
       const textEnter = () => setCursorVariant("text");
      const textLeave = () => setCursorVariant("default");
  return (
    <>
         <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
      {children} {/* Render children */}
    </>
  );
};

export default Cursor;
