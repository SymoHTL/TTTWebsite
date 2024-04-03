import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-200 dark:bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" passHref>
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer">Home</h1>
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/docs" passHref>
                                <span className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer">Documentation</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
