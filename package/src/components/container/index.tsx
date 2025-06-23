"use client";

import type * as React from "react";

import { useSetLength } from "#/hooks/length";
import { useHandleScroll } from "#/hooks/scroll";

/** Props for the `Container` component. */
type ContainerProps = React.ComponentProps<"div">;

/** Container component. */
const Container = (props: ContainerProps): React.JSX.Element => {
    useSetLength();
    useHandleScroll();

    return (
        <>
            <div {...props}>{props.children}</div>
        </>
    );
};

export type { ContainerProps };
export { Container };
