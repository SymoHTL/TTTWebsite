import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside id="default-sidebar"
               className="relative w-64 overflow-y-auto bg-gray-50 dark:bg-gray-800"
               aria-label="Sidebar">
            <div className="px-3 py-4">
                <ul className="space-y-2 font-medium">
                    <li>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span>Server Setup</span>
                        </div>
                        <ul className="pl-4">
                            <li>
                                <Link href="/docs/game-setup/steam-setup">
                                    <span className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                                        Steam Setup
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/game-setup/server-setup">
                                    <span className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                                        Server Setup
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
