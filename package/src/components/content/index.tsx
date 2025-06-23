"use client";

import * as React from "react";

import { useScrollCore } from "#/contexts/scrollcore";

/** Props for the `Content` component. */
type ContentProps = React.ComponentProps<"div">;

/** Content component. */
const Content = (props: ContentProps): React.JSX.Element => {
    const { children, ...p } = props;

    const { contentRef } = useScrollCore();

    React.useImperativeHandle(p.ref, (): HTMLDivElement => {
        return contentRef.current as HTMLDivElement;
    }, [
        contentRef,
    ]);

    return (
        <>
            <div
                {...p}
                ref={contentRef}
            >
                {children}
            </div>
        </>
    );
};

export type { ContentProps };
export { Content };
