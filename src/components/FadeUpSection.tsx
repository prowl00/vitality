'use client';

import { ReactNode } from 'react';
import { useFadeUp } from '@/hooks/useFadeUp';

interface FadeUpSectionProps {
  children: ReactNode;
  className?: string;
}

export default function FadeUpSection({ children, className }: FadeUpSectionProps) {
  const ref = useFadeUp();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
