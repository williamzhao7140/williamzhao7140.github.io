import React from 'react';

interface ComponentDetailProps {
    title: string;
    description: string;
    onBack: () => void;
    children: React.ReactNode;
}

export const ComponentDetail: React.FC<ComponentDetailProps> = ({ title, description, onBack, children }) => {
    return (
        <div className="w-full animate-fade-in">
            <button
                onClick={onBack}
                className="mb-6 text-subtle hover:text-ink text-sm flex items-center gap-2 transition-colors group cursor-pointer"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-x-0.5 transition-transform">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Library
            </button>

            <div className="mb-8">
                <h1 className="text-3xl font-normal leading-tight mb-2 text-ink">
                    {title}
                </h1>
                <p className="text-subtle text-base">
                    {description}
                </p>
            </div>

            {/* Content */}
            {children}
        </div>
    );
};
