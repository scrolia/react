"use client";

import type { ScrollCore } from "#/contexts";

import { clsx } from "clsx";
import * as React from "react";

import { useScrollCore } from "#/contexts";

/** Props for the `TrackX` component. */
type TrackXProps = React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
};

/** Horizontal track component. */
const TrackX = (props: TrackXProps): React.JSX.Element => {
    const { children, ...p } = props;

    const core: ScrollCore = useScrollCore();

    const {
        options: { disabled, page, headless },
        x,
    } = core;

    React.useEffect((): void => {
        x.setHvTrack(true);
    }, [
        x.setHvTrack,
    ]);

    const getClassName = (): string | undefined => {
        if (headless)
            return clsx(
                x.isActive &&
                    x.options.activeTrackClassName !== false &&
                    x.options.activeTrackClassName,
                p.className,
            );
        return clsx("sla-track", !page && "sla-child", "sla-x");
    };

    if (disabled) return <></>;

    return (
        <>
            <div
                {...p}
                className={getClassName()}
            >
                {children}
            </div>
        </>
    );
};

export type { TrackXProps };
export { TrackX };
