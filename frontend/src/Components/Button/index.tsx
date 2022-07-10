import React from 'react';

import './styles.css';

interface ButtonProps {
  text: string;
  typeButton: 'button' | 'submit' | 'reset' | undefined;
}

export function Button({ text, typeButton }: ButtonProps) {
  return (
    <>
      <button type={typeButton}>{text}</button>
    </>
  );
}

export default Button;
