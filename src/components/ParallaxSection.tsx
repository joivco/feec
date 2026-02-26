import { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  imageSrc?: string;
  videoSrc?: string;
  children?: React.ReactNode;
  height?: string;
  overlay?: boolean;
  pixelate?: boolean;
}

export const ParallaxSection = ({ 
  imageSrc, 
  videoSrc,
  children, 
  height = "h-screen", 
  overlay = true,
  pixelate = false
}: ParallaxSectionProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (parallaxRef.current) observer.observe(parallaxRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!imageSrc) return; // Skip parallax for video

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
  }, [imageSrc]);

  return (
    <div 
      ref={parallaxRef} 
      className={`parallax-container ${height} relative flex items-center justify-center`}
    >
      {videoSrc ? (
        <video 
          src={videoSrc} 
          autoPlay 
          loop 
          muted 
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            pixelate && !isVisible ? 'pixelate-heavy' : pixelate && isVisible ? 'pixelate-reveal' : ''
          }`}
        />
      ) : imageSrc ? (
        <img 
          src={imageSrc} 
          alt="" 
          className="parallax-image scale-110"
        />
      ) : null}
      {overlay && <div className="parallax-overlay" />}
      {children && (
        <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-4">
          {children}
        </div>
      )}
    </div>
  );
};
