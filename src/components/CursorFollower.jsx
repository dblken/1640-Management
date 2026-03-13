import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CursorFollower() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for smooth delay/lag
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if mobile (disable cursor)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.cursor-pointer') || 
        target.closest('.group');
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        left: 0,
        top: 0,
      }}
      className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      <motion.div
        animate={{
          scale: isHovered ? 4 : 1,
          backgroundColor: isHovered ? 'transparent' : '#C9A84C',
          borderColor: '#C9A84C',
          borderWidth: isHovered ? '1.5px' : '0px',
          boxShadow: isHovered 
            ? '0 0 20px rgba(201, 168, 76, 0.4)' 
            : '0 0 10px rgba(201, 168, 76, 0.4)',
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-5 h-5 rounded-full"
      />
    </motion.div>
  );
}
