import React from 'react';

export interface MarqueeProps {
  text?: string;
  quotes?: string[];
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  quotes,
  speed = 'normal', 
  direction = 'left',
  className = ''
}) => {
  const speedClass = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee',
    fast: 'animate-marquee-fast'
  }[speed];

  const directionClass = direction === 'right' ? 'reverse' : '';

  // Create content based on whether quotes or text is provided
  const renderContent = () => {
    if (quotes && quotes.length > 0) {
      return quotes.map((quote, index) => (
        <React.Fragment key={index}>
          <span className="px-4">{quote}</span>
          <span className="px-4 text-yellow-400">★</span>
        </React.Fragment>
      ));
    } else if (text) {
      return Array(10).fill(0).map((_, index) => (
        <span key={index} className="px-8">{text}</span>
      ));
    }
    return null;
  };

  return (
    <div className={`relative overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`flex ${speedClass} ${directionClass}`}>
        <div className="flex shrink-0">
          {renderContent()}
        </div>
        <div className="flex shrink-0">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Marquee;