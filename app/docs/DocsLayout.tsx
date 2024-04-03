"use client";
import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const DocumentationLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    useEffect(() => {
        require('flowbite');
    }, []);

    return (
        <div className="flex bg-gray-100 dark:bg-gray-800">
            <Sidebar />
            <main className="flex-1 p-4">
                {children}
            </main>
        </div>
    );
};

export default DocumentationLayout;
