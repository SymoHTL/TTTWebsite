import React from 'react';
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// Choose a theme that suits your preference
// @ts-ignore
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language }: Readonly<{ code: string; language: string }>) => {
    const [isCopied, setIsCopied] = React.useState(false);

    const onCopy = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="relative group">
            <SyntaxHighlighter language={language} style={vscDarkPlus}>
                {code}
            </SyntaxHighlighter>
            <CopyToClipboard text={code} onCopy={onCopy}>
                <button className="absolute top-2 right-2 text-xs text-white bg-blue-500 hover:bg-blue-600 rounded px-2 py-1">
                    {isCopied ? 'Copied' : 'Copy'}
                </button>
            </CopyToClipboard>
        </div>
    );
};

export default CodeBlock;
