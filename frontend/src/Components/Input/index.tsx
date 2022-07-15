import React from 'react';

import './styles.css';

interface InputProps {
  id: string;
  type: string;
  placeholder?: string;
}

export function Input({ id, placeholder, type }: InputProps) {
  return (
    <>
      <input id={id} type={type} placeholder={placeholder} required />
    </>
  );
}
