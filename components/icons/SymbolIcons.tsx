import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const PsiIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M12 4v16M8 4h8M8 12h8"/>
    </svg>
);

export const InfinityIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M12 12c-3.314 0-6-1.79-6-4s2.686-4 6-4 6 1.79 6 4-2.686 4-6 4zm0 0c3.314 0 6 1.79 6 4s-2.686 4-6 4-6-1.79-6-4 2.686-4 6-4z"/>
    </svg>
);

export const RecursionIcon: React.FC<IconProps> = ({ className, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M16.89 6.27A8 8 0 1 0 20 12"/>
        <path d="M7.11 17.73A8 8 0 1 0 4 12"/>
        <path d="M12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </svg>
);
