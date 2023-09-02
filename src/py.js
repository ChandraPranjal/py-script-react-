import React from 'react';
import Head from 'next/head';

const Sample = ()  => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
                <script defer src="https://pyscript.net/latest/pyscript.js"></script>
            </Head>
            <py-config></py-config>
            <py-script>
                print(1)
            </py-script>
        </div>
    );
}

export default Sample;