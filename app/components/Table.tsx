import React from 'react';

const Table = ({ columns, data, className }: Readonly<{ columns: any[]; data: any[]; className?: string }>) => {
    return (
        <table className={`min-w-full leading-normal ${className}`}>
            <thead>
            <tr>
                {columns.map((column, index) => (
                    <th
                        key={index}
                        className="px-5 py-3 border-b-2 text-left text-xs font-semibold uppercase tracking-wider
                         bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600"
                    >
                        {column.header}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {columns.map((column, columnIndex) => (
                        <td
                            key={columnIndex}
                            className="px-5 py-5 border-b text-sm
                           bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 border-gray-200 dark:border-gray-600"
                        >
                            {row[column.accessor]}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
