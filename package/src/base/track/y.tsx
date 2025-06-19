"use client";

import type { ScrollCore } from "#/contexts";

import { clsx } from "clsx";
import * as React from "react";

import { useScrollCore } from "#/contexts";

/** Props for the `TrackY` component. */
type TrackYProps = React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
};

/** Vertical track component. */
const TrackY = (props: TrackYProps): React.JSX.Element => {
    const { children, ...p } = props;

    const core: ScrollCore = useScrollCore();

    const {
        options: { disabled, page, headless },
        y,
    } = core;

    React.useEffect((): void => {
        y.setHvTrack(true);
    }, [
        y.setHvTrack,
    ]);

    const getClassName = (): string | undefined => {
        if (headless)
            return clsx(
                y.isActive &&
                    y.options.activeTrackClassName !== false &&
                    y.options.activeTrackClassName,
                p.className,
            );
        return clsx("sla-track", !page && "sla-child", "sla-y");
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

export type { TrackYProps };
export { TrackY };
