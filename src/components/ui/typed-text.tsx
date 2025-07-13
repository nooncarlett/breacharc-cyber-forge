import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
}

const TypedText = ({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 2000,
  loop = true,
  showCursor = true,
  cursorChar = '|',
  className = '',
}: TypedTextProps) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    try {
      typedRef.current = new Typed(elementRef.current, {
        strings,
        typeSpeed,
        backSpeed,
        backDelay,
        loop,
        showCursor,
        cursorChar,
      });
    } catch (error) {
      console.error('Error initializing typed:', error);
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop, showCursor, cursorChar]);

  return <span ref={elementRef} className={className} />;
};

export default TypedText;