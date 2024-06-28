import React, { useEffect, useState } from 'react';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 100); // Adjust the speed of typing here (milliseconds per character)
      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText]);

  return <p>{displayedText}</p>;
};

export default Typewriter;
