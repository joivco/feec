import { useEffect, useRef } from "react";

interface ParallaxSectionProps {
  imageSrc: string;
  children?: React.ReactNode;
  height?: string;
  overlay?: boolean;
}

export const ParallaxSection = ({ 
  imageSrc, 
  children, 
  height = "h-screen", 
  overlay = true 
}: ParallaxSectionProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      const parallaxImage = parallaxRef.current.querySelector('.parallax-image') as HTMLElement;
      if (parallaxImage) {
        parallaxImage.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={parallaxRef} className={`parallax-container ${height} relative flex items-center justify-center`}>
      <img 
        src={imageSrc} 
        alt="" 
        className="parallax-image scale-110"
      />
      {overlay && <div className="parallax-overlay" />}
      {children && (
        <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-4">
          {children}
        </div>
      )}
    </div>
  );
};