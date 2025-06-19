import type * as React from "react";

import { Head, Html, Main, NextScript } from "next/document";

export default (): React.JSX.Element => {
    return (
        <Html lang="en">
            <Head />
            <body
                style={{
                    margin: 0,
                    padding: 0,
                }}
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};
