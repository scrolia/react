"use client";

import type * as React from "react";

import { useScrollCore } from "#/contexts/scrollcore";
import { getComponentProps } from "#/functions/props";
import { useLengthHandler } from "#/hooks/length";
import { useScrollHandler } from "#/hooks/scroll";

/** Props for the `Container` component. */
type ContainerProps = React.ComponentProps<"div">;

/** Container component. */
const Container = (props: ContainerProps): React.JSX.Element => {
    useLengthHandler();
    useScrollHandler();

    const {
        options: { plugins },
    } = useScrollCore();

    const p: ContainerProps = getComponentProps({
        name: "container",
        props,
        plugins,
    });

    return <div {...p}>{p.children}</div>;
};

export type { ContainerProps };
export { Container };
