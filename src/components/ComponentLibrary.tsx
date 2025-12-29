import React, { useState } from 'react';
import { ComponentDetail } from './ComponentDetail';
import { TracesDemo } from './demos/TracesDemo';

type ComponentId = 'traces' | null;

export const ComponentLibrary: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<ComponentId>(null);

    const renderDetail = () => {
        switch (selectedComponent) {
            case 'traces':
                return (
                    <ComponentDetail
                        title="AI Observability"
                        description="Live traces and monitoring for AI agent requests, including token usage, costs, and latency."
                        onBack={() => setSelectedComponent(null)}
                    >
                        <TracesDemo />
                    </ComponentDetail>
                );
            default:
                return null;
        }
    };

    if (selectedComponent) {
        return renderDetail();
    }

    return (
        <section className="w-full animate-fade-in pb-20">
            <div className="w-full mb-12 text-left">
                <h1 className="text-3xl font-normal leading-tight mb-3 text-ink">
                    Component Library
                </h1>
                <p className="text-subtle text-base leading-relaxed">
                    A collection of reusable UI components and design patterns.
                </p>
            </div>

            {/* AI Observability Section */}
            <div>
                <h2 className="text-sm font-medium text-subtle uppercase tracking-wide mb-6 border-b border-gray-100 pb-2">
                    AI Observability
                </h2>
                <div className="flex flex-wrap gap-6 w-full">
                    {/* AI Observability */}
                    <div
                        onClick={() => setSelectedComponent('traces')}
                        className="group cursor-pointer block w-full sm:w-[48%] md:w-[160px]"
                    >
                        <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-3 flex items-center justify-center">
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-16 h-1.5 bg-indigo-400 rounded-full opacity-80"></div>
                                <div className="w-12 h-1.5 bg-purple-400 rounded-full opacity-60"></div>
                                <div className="w-14 h-1.5 bg-indigo-400 rounded-full opacity-80"></div>
                                <div className="w-10 h-1.5 bg-purple-400 rounded-full opacity-60"></div>
                                <div className="w-16 h-1.5 bg-indigo-400 rounded-full opacity-80"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-0.5 text-left">
                            <h2 className="font-medium text-sm group-hover:underline underline-offset-4 decoration-1 decoration-gray-300">
                                AI Observability
                            </h2>
                            <p className="text-subtle text-[11px] uppercase tracking-wide">Traces</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
