"use client";

import * as React from "react";

import { useScrollCore } from "#/contexts/scrollcore";
import { getComponentProps } from "#/functions/props";

/** Props for the `TrackY` component. */
type TrackYProps = React.ComponentProps<"div">;

/** Vertical track component. */
const TrackY = (props: TrackYProps): React.JSX.Element => {
    const {
        options: { disabled, plugins },
        y: { setHvTrack },
    } = useScrollCore();

    const p: TrackYProps = getComponentProps({
        name: "trackY",
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

export type { TrackYProps };
export { TrackY };
