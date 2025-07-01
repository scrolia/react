"use client";

import * as React from "react";

import { useScrollCore } from "#/contexts/scrollcore";
import { getComponentProps } from "#/functions/props";

/** Props for the `Content` component. */
type ContentProps = React.ComponentProps<"div">;

/** Content component. */
const Content = (props: ContentProps): React.JSX.Element => {
    const {
        options: { plugins },
        contentRef,
    } = useScrollCore();

    const p: ContentProps = getComponentProps({
        name: "content",
        props,
        plugins,
    });

    React.useImperativeHandle(p.ref, (): HTMLDivElement => {
        return contentRef.current as HTMLDivElement;
    }, [
        contentRef,
    ]);

    return (
        <div
            {...p}
            ref={contentRef}
        >
            {p.children}
        </div>
    );
};

export type { ContentProps };
export { Content };
