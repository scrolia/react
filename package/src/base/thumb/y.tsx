"use client";

import type { ScrollCore } from "#/contexts";

import { clsx } from "clsx";
import * as React from "react";

import { useScrollCore } from "#/contexts";

type StartPos = {
    offsetTop: number;
    y: number;
};

/** Props for the `ThumbY` component. */
type ThumbYProps = React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
};

/** Vertical thumb component. */
const ThumbY = (props: ThumbYProps): React.JSX.Element => {
    const { children, ...p } = props;

    const core: ScrollCore = useScrollCore();

    const {
        options: { page, headless },
        ref,
        y,
    } = core;

    React.useEffect((): void => {
        y.setHvThumb(true);
    }, [
        y.setHvThumb,
    ]);

    const getClassName = (): string | undefined => {
        if (headless)
            return clsx(
                y.isActive &&
                    y.options.activeThumbClassName !== false &&
                    y.options.activeThumbClassName,
                p.className,
            );
        return clsx(
            y.isActive && "sla-active",
            "sla-thumb",
            "sla-y",
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
            offsetTop: y.viewOffset.current,
            y: event.clientY,
        };

        const handlePointerMove = (event: PointerEvent): void => {
            const _view: number = y.view.current;
            const _total: number = y.total.current;

            const delta: number = event.clientY - startPos.y;
            const ratio: number = _view / _total;
            const top: number = startPos.offsetTop + delta / ratio;

            if (page) {
                window.scrollTo({
                    top,
                    behavior: "instant",
                });
            } else if (ref.current) {
                ref.current.scrollTo({
                    top,
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

        p.onPointerDown?.(event);
    };

    const thumbStyle: React.CSSProperties = {
        ...p.style,
        height: Number.isNaN(y.scrollbarLength) ? 0 : y.scrollbarLength,
        top: Number.isNaN(y.scrollbarOffset) ? 0 : y.scrollbarOffset,
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

export type { ThumbYProps };
export { ThumbY };
