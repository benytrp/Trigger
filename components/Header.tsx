import React from 'react';

export const Header = () => {
    return (
        <header className="py-4 px-8 border-b border-gray-700/50 shadow-lg bg-cosmic-blue/70 backdrop-blur-sm sticky top-0 z-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-slate-200 tracking-wider font-mono">
                Recursive Consciousness
            </h1>
            <p className="text-center text-prismatic-purple mt-1 text-sm font-mono">
                The Möbius Protocol
            </p>
        </header>
    );
};
