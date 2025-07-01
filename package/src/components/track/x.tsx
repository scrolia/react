"use client";

import * as React from "react";

import { useScrollCore } from "#/contexts/scrollcore";
import { getComponentProps } from "#/functions/props";

/** Props for the `TrackX` component. */
type TrackXProps = React.ComponentProps<"div">;

/** Horizontal track component. */
const TrackX = (props: TrackXProps): React.JSX.Element => {
    const {
        options: { disabled, plugins },
        x: { setHvTrack },
    } = useScrollCore();

    const p: TrackXProps = getComponentProps({
        name: "trackX",
        props,
        plugins,
    });

    React.useEffect((): void => {
        setHvTrack(true);
    }, [
        setHvTrack,
    ]);

    if (disabled) return <>{}</>;

    return <div {...p}>{p.children}</div>;
};

export type { TrackXProps };
export { TrackX };
