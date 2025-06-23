import type * as React from "react";

import { Scrollbar } from "#/components/scrollbar";

import "#/styles/index.css";

export default ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): React.JSX.Element => {
    return (
        <html
            lang="en"
            className="nsb"
        >
            <body
                style={{
                    margin: 0,
                    padding: 0,
                }}
            >
                <Scrollbar page>{children}</Scrollbar>
            </body>
        </html>
    );
};
