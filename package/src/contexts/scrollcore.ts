"use client";

import type { CompleteOptions } from "#/@types/options";

import * as React from "react";

/** Options for the `ScrollCore` context. */
type ScrollCoreOptions = CompleteOptions;

/** States for the `ScrollCore` context. */
type ScrollCoreStates = {
    hvTrack: boolean;
    setHvTrack: React.Dispatch<React.SetStateAction<boolean>>;
    hvThumb: boolean;
    setHvThumb: React.Dispatch<React.SetStateAction<boolean>>;
    total: React.RefObject<number>;
    view: React.RefObject<number>;
    viewOffset: React.RefObject<number>;
    scrollbarLength: number;
    setScrollbarLength: React.Dispatch<React.SetStateAction<number>>;
    scrollbarOffset: number;
    setScrollbarOffset: React.Dispatch<React.SetStateAction<number>>;
};

/** Core for internal logic. */
type ScrollCore = {
    options: ScrollCoreOptions;
    contentRef: React.RefObject<HTMLDivElement | null>;
    x: ScrollCoreStates;
    y: ScrollCoreStates;
};

/** `ScrollCore` context. */
const ScrollCoreContext: React.Context<ScrollCore | null> =
    React.createContext<ScrollCore | null>(null);

/** Hook for using the `ScrollCore` context. */
const useScrollCore = (): ScrollCore => {
    const core: ScrollCore | null = React.useContext(ScrollCoreContext);

    if (core === null) {
        throw new Error("useScrollCore must be used within a provider");
    }

    return core;
};

export type { ScrollCoreOptions, ScrollCoreStates, ScrollCore };
export { ScrollCoreContext, useScrollCore };
