// components/Reveal.jsx
import React from 'react';
import useReveal from '../hooks/useReveal';
import './Reveal.css';

const Reveal = ({ as: Tag = 'div', variant = 'fade-up', delay = 0, className = '', children, ...rest }) => {
  const [ref, inView] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
