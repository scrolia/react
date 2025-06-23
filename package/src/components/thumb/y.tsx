"use client";

import * as React from "react";

import { useScrollCore } from "#/contexts/scrollcore";
import { useThumbHandlerY } from "#/hooks/thumb/y";

/** Props for the `ThumbY` component. */
type ThumbYProps = React.ComponentProps<"div">;

/** Vertical thumb component. */
const ThumbY = (props: ThumbYProps): React.JSX.Element => {
    const { children, ...p } = props;

    const {
        y: { setHvThumb, scrollbarLength, scrollbarOffset },
    } = useScrollCore();

    React.useEffect((): void => {
        setHvThumb(true);
    }, [
        setHvThumb,
    ]);

    const { onPointerDown } = useThumbHandlerY();

    const handlePointerDown = (
        event: React.PointerEvent<HTMLDivElement>,
    ): void => {
        onPointerDown(event);
        p.onPointerDown?.(event);
    };

    const thumbStyle: React.CSSProperties = {
        ...p.style,
        height: Number.isNaN(scrollbarLength) ? 0 : scrollbarLength,
        top: Number.isNaN(scrollbarOffset) ? 0 : scrollbarOffset,
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

export type { ThumbYProps };
export { ThumbY };
