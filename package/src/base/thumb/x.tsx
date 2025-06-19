"use client";

import type { ScrollCore } from "#/contexts";

import { clsx } from "clsx";
import * as React from "react";

import { useScrollCore } from "#/contexts";

type StartPos = {
    offsetLeft: number;
    x: number;
};

/** Props for the `ThumbX` component. */
type ThumbXProps = React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
};

/** Horizontal thumb component. */
const ThumbX = (props: ThumbXProps): React.JSX.Element => {
    const { children, ...p } = props;

    const core: ScrollCore = useScrollCore();

    const {
        options: { page, headless },
        ref,
        x,
    } = core;

    React.useEffect((): void => {
        x.setHvThumb(true);
    }, [
        x.setHvThumb,
    ]);

    const getClassName = (): string | undefined => {
        if (headless)
            return clsx(
                x.isActive &&
                    x.options.activeThumbClassName !== false &&
                    x.options.activeThumbClassName,
                p.className,
            );
        return clsx(
            x.isActive && "sla-active",
            "sla-thumb",
            "sla-x",
            p.className,
        );
    };

    const handlePointerDown = (
        event: React.PointerEvent<HTMLDivElement>,
    ): void => {
        if (typeof window === "undefined") {
            p.onPointerDown?.(event);
            return void 0;
        }

        event.preventDefault();

        const startPos: StartPos = {
            offsetLeft: x.viewOffset.current,
            x: event.clientX,
        };

        const handlePointerMove = (event: PointerEvent): void => {
            const _view: number = x.view.current;
            const _total: number = x.total.current;

            const delta: number = event.clientX - startPos.x;
            const ratio: number = _view / _total;
            const left: number = startPos.offsetLeft + delta / ratio;

            if (page) {
                window.scrollTo({
                    left,
                    behavior: "instant",
                });
            } else if (ref.current) {
                ref.current.scrollTo({
                    left,
                    behavior: "instant",
                });
            }
        };

        const handlePointerUp = (): void => {
            if (typeof window === "undefined") return void 0;

            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);

        props.onPointerDown?.(event);
    };

    const thumbStyle: React.CSSProperties = {
        ...p.style,
        width: Number.isNaN(x.scrollbarLength) ? 0 : x.scrollbarLength,
        left: Number.isNaN(x.scrollbarOffset) ? 0 : x.scrollbarOffset,
    };

    return (
        <>
            <div
                {...p}
                className={getClassName()}
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
