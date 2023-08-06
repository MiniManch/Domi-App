import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const AnimateOnScrollWrapper = forwardRef((props, ref) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        elementRef.current.classList.add('animate__animated', `animate__${props.animation}`);
        elementRef.current.style.animationDuration = `${props.delay}s`;
        elementRef.current.classList.remove('not-visible');
      } else {
        elementRef.current.classList.remove('animate__animated', `animate__${props.animation}`);
        elementRef.current.classList.add('not-visible');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.animation, props.delay]);

  useImperativeHandle(ref, () => ({
    triggerAnimation: () => {
      if (!elementRef.current) return;
      elementRef.current.classList.add('animate__animated', `animate__${props.animation}`);
      elementRef.current.style.animationDuration = `${props.delay}s`;
      elementRef.current.classList.remove('not-visible');
    },
  }));

  return (
    <div className={`not-visible ${props.className}`} ref={elementRef}>
      {props.children}
    </div>
  );
});

export default AnimateOnScrollWrapper;
