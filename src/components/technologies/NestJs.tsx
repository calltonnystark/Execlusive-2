import React from 'react';

export default function NestJs({ className }: { className?: string }) {
  return (
    <img src="/assets/logo.png" alt="skill logo" className={className ?? 'h-5 w-5 object-contain'} />
  );
}
