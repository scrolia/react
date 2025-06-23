"use client";

import * as React from "react";

import { useScrollCore } from "#/contexts/scrollcore";
import { useThumbHandlerX } from "#/hooks/thumb/x";

/** Props for the `ThumbX` component. */
type ThumbXProps = React.ComponentProps<"div">;

/** Horizontal thumb component. */
const ThumbX = (props: ThumbXProps): React.JSX.Element => {
    const { children, ...p } = props;

    const {
        x: { setHvThumb, scrollbarLength, scrollbarOffset },
    } = useScrollCore();

    React.useEffect((): void => {
        setHvThumb(true);
    }, [
        setHvThumb,
    ]);

    const { onPointerDown } = useThumbHandlerX();

    const handlePointerDown = (
        event: React.PointerEvent<HTMLDivElement>,
    ): void => {
        onPointerDown(event);
        p.onPointerDown?.(event);
    };

    const thumbStyle: React.CSSProperties = {
        ...p.style,
        width: Number.isNaN(scrollbarLength) ? 0 : scrollbarLength,
        left: Number.isNaN(scrollbarOffset) ? 0 : scrollbarOffset,
    };

    return (
        <>
            <div
                {...p}
                style={thumbStyle}
                onPointerDown={handlePointerDown}
            >
                {children}
            </div>
        </>
    );
};

export type { ThumbXProps };
export { ThumbX };
