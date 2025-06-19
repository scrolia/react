import type * as React from "react";

import { Scrollbar } from "@scrolia/react";

import "@scrolia/react/css";

export default ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): React.JSX.Element => {
    return (
        <html lang="en">
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
