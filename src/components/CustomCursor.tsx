"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // মাউস পজিশন ট্র্যাকিং
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // আউটার রিংয়ের জন্য স্মুথ স্প্রিং মোশন (ম্যাগনেটিক ট্রেইল ইফেক্ট)
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // লিংক, বাটন বা ক্লিকেবল এলিমেন্টে হোভার চেক করা
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("group")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* ১. আউটার নিয়ন গ্লোয়িং রিং (স্মুথ ফলোয়ার) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,
          borderColor: isHovered ? "#00F5FF" : "#A855F7",
          backgroundColor: isHovered ? "rgba(0, 245, 255, 0.05)" : "transparent",
          boxShadow: isHovered 
            ? "0 0 20px #00F5FF, inset 0 0 10px #00F5FF" 
            : "0 0 10px rgba(168, 85, 247, 0.4)",
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      />

      {/* ২. ইনার কোর শার্প ডট (নিয়ন সায়ান কালার) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#00F5FF] rounded-full pointer-events-none z-[9999] shadow-[0_0_8px_#00F5FF]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </>
  );
}