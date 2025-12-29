import React from 'react';

interface SidebarProps {
    activeTab: 'work' | 'component-library';
    onTabChange: (tab: 'work' | 'component-library') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
    return (
        <aside className="w-full md:w-56 flex-none px-5 py-6 md:px-10 md:py-8 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start border-b md:border-b-0 border-gray-100 md:border-none bg-canvas z-40 sticky top-0 md:static">
            <a href="#" className="hover:opacity-60 transition-opacity md:mb-12">
                <img src="/media/wz.png" alt="William" className="h-6 md:h-8" />
            </a>
            <nav className="flex flex-row md:flex-col gap-6 md:gap-6">
                <button
                    onClick={() => onTabChange('work')}
                    className={`text-sm font-medium text-left transition-colors cursor-pointer ${activeTab === 'work' ? 'text-ink' : 'text-subtle hover:text-ink'
                        }`}
                >
                    Work
                </button>
                <button
                    onClick={() => onTabChange('component-library')}
                    className={`text-sm font-medium text-left transition-colors cursor-pointer ${activeTab === 'component-library' ? 'text-ink' : 'text-subtle hover:text-ink'
                        }`}
                >
                    Component Library
                </button>
            </nav>
        </aside>
    );
};
