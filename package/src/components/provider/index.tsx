"use client";

import type { Format } from "ts-vista";

import type { Options } from "#/@types/options";
import type { ScrollCoreStates } from "#/contexts/scrollcore";

import * as React from "react";

import { ScrollCoreContext, useScrollCoreStates } from "#/contexts/scrollcore";

/** Props for the `Provider` component. */
type ProviderProps = Format<
    Options & {
        children?: React.ReactNode;
    }
>;

/** Provider component. */
const Provider = (options: ProviderProps): React.JSX.Element => {
    const contentRef = React.useRef<HTMLDivElement | null>(null);

    const x: ScrollCoreStates = useScrollCoreStates();
    const y: ScrollCoreStates = useScrollCoreStates();

    return (
        <ScrollCoreContext
            value={{
                options: {
                    ...options,
                    disabled: options.disabled ?? false,
                    page: options.page ?? false,
                    plugins: options.plugins ?? [],
                },
                contentRef,
                x,
                y,
            }}
        >
            {options.children}
        </ScrollCoreContext>
    );
};

export type { ProviderProps };
export { Provider };
