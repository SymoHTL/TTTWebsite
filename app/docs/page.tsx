"use client";
import React from 'react';
import DocumentationLayout from './DocsLayout';

const DocHomePage = () => {
    return (
        <DocumentationLayout>
            <section id="introduction" className="mb-8">
                <h1 className="text-2xl font-bold dark:text-white">To get started select a Topic from the sidebar</h1>
            </section>
        </DocumentationLayout>
    );
};

export default DocHomePage;
