"use client";
import React from 'react';
import DocumentationLayout from '../../DocsLayout';
import CodeBlock from '../../../components/CodeBlock';
import Table from '../../../components/Table';
import Link from "next/link";

const ServerSetup = () => {
    const colums = [
        {header: 'Port', accessor: 'port'},
        {header: 'Description', accessor: 'description'}];

    const data = [
        {port: '27015', description: 'Game server port'},
        {port: '27016', description: 'Steam Query port'}];



    return (
        <DocumentationLayout>
            <section id="introduction" className="mb-8">
                <h1 className="text-2xl font-bold dark:text-white">Server setup</h1>

            </section>

            <section id="network" className="mb-8">
                <h2 className="text-2xl font-bold dark:text-white">Network</h2>
                <p className="text-gray-600 dark:text-gray-300">The server listens for incoming connections on the ports listed below. Ensure your network configuration allows incoming connections to these ports and directs them to the host that will be running your dedicated server.</p>
                <Table columns={colums} data={data} className="my-2"></Table>
            </section>

            <section id="Configuration" className="mb-8">
                <h2 className="text-2xl font-bold dark:text-white">Configuration</h2>
                <p className="text-gray-600 dark:text-gray-300">Configurations files are located in the cfg folder, some files will be generated after first launch</p>



            </section>


            <section id="portforwarding" className="mb-8">
                <h2 className="text-2xl font-bold dark:text-white">Port Forwarding and Firewall</h2>

                <Link href={"https://portforward.com"} passHref>
                    <span className="text-blue-500 hover:underline">Port Forwarding</span>
                </Link>

                <p className="text-gray-600 dark:text-gray-300">For your server to become visible in both the Ark server
                    lists and the Steam lists, do the following:</p>
                <br/>
                <section id="windowsfirewall" className="mb-8">
                    <h3 className="text-2xl font-bold dark:text-white">Windows Firewall</h3>
                    <ol type="1" className="list-decimal">
                        <li>
                            <p className="text-gray-600 dark:text-gray-300">If you&apos;re on Windows 10, click on Start and
                                search for &quot;wf.msc&quot; without the quotes. Click the &quot;Run as administrator&quot; option.</p>
                        </li>
                        <br/>
                        <li>
                            <p className="text-gray-600 dark:text-gray-300">Click &quot;Inbound Rules&quot; on the left panel,
                                then click &quot;New Rule...&quot; on the right panel.
                            </p>
                        </li>
                        <br/>
                        <li>
                            <p className="text-gray-600 dark:text-gray-300">When the New Inbound Rule Wizard opens up,
                                select Port, then Next.</p>
                        </li>
                        <br/>
                        <li>
                            <p className="text-gray-600 dark:text-gray-300">The wizard will present options for choosing
                                the protocol and specifying ports. Leave the default selection of the TCP protocol and
                                &quot;Specific local ports&quot;. List the ports you plan to forward into the box. Use a comma to
                                separate multiple ports. Select Next to continue.</p>
                        </li>
                        <br/>
                        <li>
                            <p className="text-gray-600 dark:text-gray-300">Select &quot;Allow the connection&quot; and continue
                                with the wizard.</p>
                        </li>
                        <br/>
                        <li>
                            <p className="text-gray-600 dark:text-gray-300">Make sure all of the boxes are selected for
                                where the rule applies.</p>
                        </li>
                        <br/>

                        <li>
                            <p className="text-gray-600 dark:text-gray-300">Enter a name (required) and a description
                                (optional). It is recommended to append the protocol (TCP or UDP) to the rule name.</p>
                        </li>
                        <br/>
                        <li>
                            <p className="text-gray-600 dark:text-gray-300">Repeat these steps. Make sure to enter your
                                steam browser/query port (27016 default) and game port (27015 default).</p>
                        </li>
                        <br/>
                        <li>
                            <p className="text-gray-600 dark:text-gray-300">When finished, you should have a rule for
                                TCP and a rule for UDP in the Inbound Rules section.</p>
                        </li>
                        <br/>
                        <li>
                            <p className="text-gray-600 dark:text-gray-300">This section and the port forwarding section
                                go hand in hand.</p>
                        </li>
                        <br/>
                        <li>
                            <p className="text-gray-600 dark:text-gray-300">Close the advanced firewall window and open
                                Windows Firewall again.</p>
                        </li>
                        <br/>
                        <li>
                            <p className="text-gray-600 dark:text-gray-300">Click &quot;Allow an app or feature through
                                Windows Firewall&quot;. Scroll down to Traitor&apos;s Gambit. Make sure all apps named Traitor&apos;s
                                Gambit have the Private and Public boxes checked.</p>
                        </li>
                        <br/>
                        <li>
                            <p className="text-gray-600 dark:text-gray-300">
                                You&apos;re done. If your ports don&apos;t work when you forward them, you can edit your Firewall
                                inbound rules by going back to the advanced tab, selecting the Inbound Rules tab,
                                right-clicking the rules you created, then clicking properties.
                            </p>
                        </li>
                    </ol>

                </section>

            </section>
        </DocumentationLayout>
);
};

export default ServerSetup;
