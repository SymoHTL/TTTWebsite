"use client";
import React from 'react';
import DocumentationLayout from '../../DocsLayout';
import CodeBlock from '../../../components/CodeBlock';
import Link from "next/link";

const SteamSetup = () => {

    return (
        <DocumentationLayout>
            <section id="introduction" className="mb-8">
                <h1 className="text-2xl font-bold dark:text-white">Steam setup</h1>

                <p className="text-gray-600 dark:text-gray-300">We recommend creating a new user for running the server. This user should not have root privileges. This is a security measure to prevent the server from being able to modify system files.</p>
                <CodeBlock code={"adduser steam"} language="bash"/>
                <CodeBlock code={"usermod -aG sudo steam"} language="bash"/>
                <CodeBlock code={"su - steam"} language="bash"/>
            </section>

            <section id="steamcmd" className="mb-8">
                <h2 className="text-2xl font-bold dark:text-white">SteamCMD</h2>
                <p className="text-gray-600 dark:text-gray-300">SteamCMD
                    The dedicated server is available for both Linux and Windows platforms. For both platforms, SteamCMD is used to download the server files. Refer to that page for detailed instructions on its installation and usage.</p>
                <Link href={"https://developer.valvesoftware.com/wiki/SteamCMD"} passHref>
                    <span className="text-blue-500 hover:underline">SteamCMD</span>
                </Link>

                <p className="text-gray-600 dark:text-gray-300">After that you need to create the directory for the server files and download the server files.</p>

                <CodeBlock code={"mkdir /home/steam/traitors_gambit"} language="bash"/>

                <p className="text-gray-600 dark:text-gray-300">Launch SteamCMD on your host and use it to download the server files.</p>

                <CodeBlock code={`Steam> login anonymous
Steam> force_install_dir "/home/steam/traitors_gambit"
Steam> app_update 2924290 validate
Steam> exit`} language="bash"/>

                <p className="text-gray-600 dark:text-gray-300">Or</p>

                <CodeBlock code={`steamcmd +login anonymous +force_install_dir "/home/steam/traitors_gambit" +app_update 2924290 +quit`} language="bash"/>



            </section>

            {/* Add more sections as needed */}
        </DocumentationLayout>
    );
};

export default SteamSetup;
