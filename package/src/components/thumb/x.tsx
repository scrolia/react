"use client";

import * as React from "react";

import { useScrollCore } from "#/contexts/scrollcore";
import { getComponentProps } from "#/functions/props";
import { useThumbHandlerX } from "#/hooks/thumb/x";

/** Props for the `ThumbX` component. */
type ThumbXProps = React.ComponentProps<"div">;

/** Horizontal thumb component. */
const ThumbX = (props: ThumbXProps): React.JSX.Element => {
    const {
        options: { plugins },
        x: { setHvThumb, scrollbarLength, scrollbarOffset },
    } = useScrollCore();

    const p: ThumbXProps = getComponentProps({
        name: "thumbX",
        props,
        plugins,
    });

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
                {p.children}
            </div>
        </>
    );
};

export type { ThumbXProps };
export { ThumbX };
