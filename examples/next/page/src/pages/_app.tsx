import type { AppProps } from "next/app";
import type * as React from "react";

import { Scrollbar } from "@scrolia/react";

import "@scrolia/react/css";

export default ({ Component, pageProps }: AppProps): React.JSX.Element => {
    return (
        <>
            <Scrollbar page>
                <Component {...pageProps} />
            </Scrollbar>
        </>
    );
};
