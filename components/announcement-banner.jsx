"use client";

import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

export default function AnnouncementBanner() {
  const contentRef = useRef(null);

  useEffect(() => {
    // Make sure the component is mounted in the browser environment
    if (typeof window === 'undefined') return;
    
    const content = contentRef.current;
    if (!content) return;
    
    // Add the keyframe animation to document
    if (!document.getElementById('marquee-keyframes')) {
      const style = document.createElement('style');
      style.id = 'marquee-keyframes';
      style.innerHTML = `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Calculate animation duration based on content width
    const calculateDuration = () => {
      const contentWidth = content.scrollWidth;
      const speed = 40; // pixels per second
      const duration = contentWidth / speed;
      
      // Ensure we have a reasonable duration
      const finalDuration = isNaN(duration) || duration <= 0 ? 15 : duration;
      content.style.animationDuration = `${finalDuration}s`;
    };
    
    // Initial calculation after a short delay to ensure content is rendered
    setTimeout(calculateDuration, 100);
    
    // Recalculate on resize
    window.addEventListener("resize", calculateDuration);
    
    return () => {
      window.removeEventListener("resize", calculateDuration);
    };
  }, []);

  return (
    <div className="w-full mb-[1rem] bg-[#1a1a1a] text-[#fafafa] py-2 overflow-hidden whitespace-nowrap">
      <div 
        ref={contentRef}
        className="inline-block whitespace-nowrap"
        style={{
          animation: "marquee linear infinite",
          animationDuration: "15s", // Initial duration, will be updated in useEffect
        }}
      >
        <div className="inline-flex items-center">
          <span className="mx-4">site&apos;s still getting a little makeover! feel free to peek around and enjoy the chaos</span>
          <Sparkles className="mx-2" size={20} />
          <span className="mx-4">site&apos;s still getting a little makeover! feel free to peek around and enjoy the chaos</span>
          <Sparkles className="mx-2" size={20} />
          <span className="mx-4">site&apos;s still getting a little makeover! feel free to peek around and enjoy the chaos</span>
          <Sparkles className="mx-2" size={20} />
          <span className="mx-4">site&apos;s still getting a little makeover! feel free to peek around and enjoy the chaos</span>
          <Sparkles className="mx-2" size={20} />
        </div>
      </div>
    </div>
  );
}