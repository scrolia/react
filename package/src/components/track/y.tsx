"use client";

import type { ScrollCore } from "#/contexts/scrollcore";

import * as React from "react";

import { useScrollCore } from "#/contexts/scrollcore";

/** Props for the `TrackY` component. */
type TrackYProps = React.ComponentProps<"div">;

/** Vertical track component. */
const TrackY = (props: TrackYProps): React.JSX.Element => {
    const { children, ...p } = props;

    const core: ScrollCore = useScrollCore();

    const {
        options: { disabled },
        y,
    } = core;

    React.useEffect((): void => {
        y.setHvTrack(true);
    }, [
        y.setHvTrack,
    ]);

    if (disabled) return <></>;

    return (
        <>
            <div {...p}>{children}</div>
        </>
    );
};

export type { TrackYProps };
export { TrackY };
