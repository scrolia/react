import type * as React from "react";

import type { OnDragMoveResult } from "#/@types/options";

import { useScrollCore } from "#/contexts/scrollcore";

type StartPos = {
    viewOffset: number;
    pointerOffset: number;
};

/** Hook for thumb logic. */
const useThumbHandlerX = () => {
    const {
        options: { disabled, page, onDragStart, onDragMove, onDragEnd },
        contentRef,
        x: { hvTrack, hvThumb, total, view, viewOffset },
    } = useScrollCore();

    const onPointerDown = (event: React.PointerEvent<HTMLDivElement>): void => {
        event.preventDefault();

        const pointerOffset: number = event.clientX;

        const startPos: StartPos = {
            viewOffset: viewOffset.current,
            pointerOffset,
        };

        onDragStart?.({
            position: "x",
            isDisabled: disabled,
            isPage: page,
            isDefined: hvTrack && hvThumb,
            total: total.current,
            view: view.current,
            viewOffset: viewOffset.current,
            pointerOffset,
        });

        const handlePointerMove = (e: PointerEvent): void => {
            const _pointerOffset: number = e.clientX;

            const _total: number = total.current;
            const _view: number = view.current;

            const delta: number = _pointerOffset - startPos.pointerOffset;
            const ratio: number = _view / _total;

            const result: OnDragMoveResult | undefined = onDragMove?.({
                position: "x",
                isDisabled: disabled,
                isPage: page,
                isDefined: hvTrack && hvThumb,
                total: _total,
                view: _view,
                viewOffset: viewOffset.current,
                pointerOffset: _pointerOffset,
                viewOffsetInit: startPos.viewOffset,
                pointerOffsetInit: startPos.pointerOffset,
                delta,
                ratio,
            });

            let left: number;

            if (result?.scrollTo) {
                left = result.scrollTo;
            } else {
                left = startPos.viewOffset + delta / ratio;
            }

            if (page) {
                window.scrollTo({
                    left,
                    behavior: "instant",
                });
            } else if (contentRef.current) {
                contentRef.current.scrollTo({
                    left,
                    behavior: "instant",
                });
            }
        };

        const handlePointerUp = (e: PointerEvent): void => {
            onDragEnd?.({
                position: "x",
                isDisabled: disabled,
                isPage: page,
                isDefined: hvTrack && hvThumb,
                total: total.current,
                view: view.current,
                viewOffset: viewOffset.current,
                pointerOffset: e.clientX,
                viewOffsetInit: startPos.viewOffset,
                pointerOffsetInit: startPos.pointerOffset,
            });

            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);
    };

    return {
        onPointerDown,
    };
};

type ThumbHandlerX = ReturnType<typeof useThumbHandlerX>;

export type { ThumbHandlerX };
export { useThumbHandlerX };
