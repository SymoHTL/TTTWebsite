"use client";
import React from 'react';
import DocumentationLayout from './DocsLayout';
import CodeBlock from '../components/CodeBlock';

const DocHomePage = () => {
    const sampleCode = `import React from 'react';\n\nfunction App() {\n  return <div>Hello World</div>;\n}\n\nexport default App;`;

    return (
        <DocumentationLayout>
            <section id="introduction" className="mb-8">
                <h1 className="text-2xl font-bold dark:text-white">To get started select a Topic from the sidebar</h1>
            </section>
        </DocumentationLayout>
    );
};

export default DocHomePage;
