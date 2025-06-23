"use client";

import type { ScrollCore } from "#/contexts/scrollcore";

import * as React from "react";

import { useScrollCore } from "#/contexts/scrollcore";

/** Props for the `TrackX` component. */
type TrackXProps = React.ComponentProps<"div">;

/** Horizontal track component. */
const TrackX = (props: TrackXProps): React.JSX.Element => {
    const { children, ...p } = props;

    const core: ScrollCore = useScrollCore();

    const {
        options: { disabled },
        x,
    } = core;

    React.useEffect((): void => {
        x.setHvTrack(true);
    }, [
        x.setHvTrack,
    ]);

    if (disabled) return <></>;

    return (
        <>
            <div {...p}>{children}</div>
        </>
    );
};

export type { TrackXProps };
export { TrackX };
