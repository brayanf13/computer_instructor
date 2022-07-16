import React from 'react';

import './styles.css';

interface ButtonProps {
  text: string;
  typeButton: 'button' | 'submit' | 'reset' | undefined;
  id?: string;
}

export function Button({ text, typeButton, id }: ButtonProps) {
  return (
    <>
      <button id={id} type={typeButton}>
        {text}
      </button>
    </>
  );
}

export default Button;
