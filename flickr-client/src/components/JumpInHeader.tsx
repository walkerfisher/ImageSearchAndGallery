import React, { useEffect, useState } from 'react';

interface JumpInHeaderProps {
  text: string;
}

const JumpInHeader: React.FC<JumpInHeaderProps> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <h1>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="letter"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default JumpInHeader;