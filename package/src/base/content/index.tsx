"use client";

import type { ScrollCore } from "#/contexts";

import { clsx } from "clsx";
import * as React from "react";

import { useScrollCore } from "#/contexts";

/** Props for the `Content` component. */
type ContentProps = React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
};

/** Content component. */
const Content = (props: ContentProps): React.JSX.Element => {
    const { children, ...p } = props;

    const core: ScrollCore = useScrollCore();

    const {
        ref,
        options: { disabled, page, headless },
    } = core;

    React.useImperativeHandle(p.ref, (): HTMLDivElement => {
        return ref.current as HTMLDivElement;
    }, [
        ref,
    ]);

    const getClassName = (): string | undefined => {
        if (headless) return p.className;
        return clsx(
            "sla-content",
            !disabled && "sla-nsb",
            !page && "sla-child",
            p.className,
        );
    };

    return (
        <>
            <div
                {...p}
                ref={core.ref}
                className={getClassName()}
            >
                {children}
            </div>
        </>
    );
};

export type { ContentProps };
export { Content };
