"use client";

import type { Format } from "ts-vista";

import type { Options } from "#/@types/options";
import type { ScrollCoreOptions, ScrollCoreStatesOptions } from "#/contexts";

import { clsx } from "clsx";
import * as React from "react";

import { MARGIN } from "#/configs";
import { ScrollCoreContext } from "#/contexts";

/** Props for the `Container` component. */
type ContainerProps = Format<
    Options &
        React.HTMLAttributes<HTMLDivElement> & {
            ref?: React.Ref<HTMLDivElement>;
        }
>;

const defaultIndivOptions: ScrollCoreStatesOptions = {
    setScrollbarLength: (length: number): number => {
        return Math.max(10, length - MARGIN);
    },
    activeTrackClassName: false,
    activeThumbClassName: false,
};

/** Container component. */
const Container = (props: ContainerProps): React.JSX.Element => {
    const {
        disabled,
        page,
        headless,
        activeTrackClassName,
        activeThumbClassName,
        setScrollbarLength,
        x,
        y,
        children,
        ...p
    } = props;

    // options
    const o: ScrollCoreOptions = {
        disabled: disabled ?? false,
        page: page ?? false,
        headless: headless ?? false,
    };

    // individual options X
    const ioX: ScrollCoreStatesOptions = {
        ...x,
        setScrollbarLength:
            x?.setScrollbarLength ??
            setScrollbarLength ??
            defaultIndivOptions.setScrollbarLength,
        activeTrackClassName:
            x?.activeTrackClassName ??
            activeTrackClassName ??
            defaultIndivOptions.activeTrackClassName,
        activeThumbClassName:
            x?.activeThumbClassName ??
            activeThumbClassName ??
            defaultIndivOptions.activeThumbClassName,
    };

    // individual options Y
    const ioY: ScrollCoreStatesOptions = {
        ...y,
        setScrollbarLength:
            y?.setScrollbarLength ??
            setScrollbarLength ??
            defaultIndivOptions.setScrollbarLength,
        activeTrackClassName:
            y?.activeTrackClassName ??
            activeTrackClassName ??
            defaultIndivOptions.activeTrackClassName,
        activeThumbClassName:
            y?.activeThumbClassName ??
            activeThumbClassName ??
            defaultIndivOptions.activeThumbClassName,
    };

    const elRef = React.useRef<HTMLDivElement | null>(null);

    const [hvTrackX, setHvTrackX] = React.useState<boolean>(false);
    const [hvThumbX, setHvThumbX] = React.useState<boolean>(false);
    const [hvTrackY, setHvTrackY] = React.useState<boolean>(false);
    const [hvThumbY, setHvThumbY] = React.useState<boolean>(false);

    const timeoutX = React.useRef<number | null>(null);
    const timeoutY = React.useRef<number | null>(null);

    const totalX = React.useRef<number>(0);
    const totalY = React.useRef<number>(0);

    const viewX = React.useRef<number>(0);
    const viewY = React.useRef<number>(0);

    const viewOffsetX = React.useRef<number>(0);
    const viewOffsetY = React.useRef<number>(0);

    const [scrollbarLengthX, setScrollbarLengthX] = React.useState<number>(0);
    const [scrollbarLengthY, setScrollbarLengthY] = React.useState<number>(0);

    const [scrollbarOffsetX, setScrollbarOffsetX] = React.useState<number>(0);
    const [scrollbarOffsetY, setScrollbarOffsetY] = React.useState<number>(0);

    const isInitScrollX = React.useRef<boolean>(false);
    const isInitScrollY = React.useRef<boolean>(false);

    const [isActiveX, setIsActiveX] = React.useState<boolean>(false);
    const [isActiveY, setIsActiveY] = React.useState<boolean>(false);

    // override default scrollbar
    React.useEffect((): void => {
        if (o.disabled || o.headless) {
            document.documentElement.classList.remove("sla-nsb");
        } else if (o.page) {
            document.documentElement.classList.add("sla-nsb");
        }
    }, [
        o.headless,
        o.disabled,
        o.page,
    ]);

    // handle length
    React.useEffect((): (() => void) => {
        const setLength = (): void => {
            const fnX = (): void => {
                let total: number = 0;
                let view: number = 0;

                if (o.page) {
                    total = document.body.scrollWidth;
                    view = window.innerWidth;
                } else if (elRef.current) {
                    total = elRef.current.scrollWidth;
                    view = elRef.current.clientWidth;
                }

                if (totalX.current === total && viewX.current === view)
                    return void 0;

                totalX.current = total;
                viewX.current = view;

                // minimum 10px
                const lengthRaw: number = (view / total) * view;
                const length: number = ioX.setScrollbarLength(lengthRaw);

                // functions
                if (view >= total) {
                    setScrollbarLengthX(0);
                } else {
                    setScrollbarLengthX(length);
                }
            };

            const fnY = (): void => {
                let total: number = 0;
                let view: number = 0;

                if (o.page) {
                    total = document.body.scrollHeight;
                    view = window.innerHeight;
                } else if (elRef.current) {
                    total = elRef.current.scrollHeight;
                    view = elRef.current.clientHeight;
                }

                if (totalY.current === total && viewY.current === view)
                    return void 0;

                totalY.current = total;
                viewY.current = view;

                // minimum 10px
                const lengthRaw: number = (view / total) * view;
                const length: number = ioY.setScrollbarLength(lengthRaw);

                // functions
                if (view >= total) {
                    setScrollbarLengthY(0);
                } else {
                    setScrollbarLengthY(length);
                }
            };

            hvTrackX && hvThumbX && fnX();
            hvTrackY && hvThumbY && fnY();
        };

        setLength();

        if (o.page) {
            window.addEventListener("resize", setLength);
            window.addEventListener("scroll", setLength);
        } else if (elRef.current) {
            elRef.current.addEventListener("resize", setLength);
            elRef.current.addEventListener("scroll", setLength);
        }

        return (): void => {
            if (o.page) {
                window.removeEventListener("resize", setLength);
                window.removeEventListener("scroll", setLength);
            } else if (elRef.current) {
                elRef.current.removeEventListener("resize", setLength);
                elRef.current.removeEventListener("scroll", setLength);
            }
        };
    }, [
        hvTrackX,
        hvThumbX,
        hvTrackY,
        hvThumbY,
        o.page,
        ioX.setScrollbarLength,
        ioY.setScrollbarLength,
    ]);

    // handle scroll
    React.useEffect((): (() => void) => {
        const handleScroll = (): void => {
            const fnX = (): void => {
                if (!isInitScrollX.current) isInitScrollX.current = true;

                if (o.page) {
                    viewOffsetX.current = window.scrollX;
                } else if (elRef.current) {
                    viewOffsetX.current = elRef.current.scrollLeft;
                }

                const _offset: number =
                    (viewOffsetX.current / totalX.current) * viewX.current;

                // position: both
                // but scrolling in other position
                if (_offset === scrollbarOffsetX) return void 0;

                setScrollbarOffsetX(_offset);

                // reset timeout
                if (timeoutX.current) clearTimeout(timeoutX.current);

                setIsActiveX(true);

                timeoutX.current = setTimeout((): void => {
                    setIsActiveX(false);
                }, 1000);
            };

            const fnY = (): void => {
                if (!isInitScrollY.current) isInitScrollY.current = true;

                if (o.page) {
                    viewOffsetY.current = window.scrollY;
                } else if (elRef.current) {
                    viewOffsetY.current = elRef.current.scrollTop;
                }

                const _offset: number =
                    (viewOffsetY.current / totalY.current) * viewY.current;

                // position: both
                // but scrolling in other position
                if (_offset === scrollbarOffsetY) return void 0;

                setScrollbarOffsetY(_offset);

                // reset timeout
                if (timeoutY.current) clearTimeout(timeoutY.current);

                setIsActiveY(true);

                timeoutY.current = setTimeout((): void => {
                    setIsActiveY(false);
                }, 1000);
            };

            hvTrackX && hvThumbX && fnX();
            hvTrackY && hvThumbY && fnY();
        };

        if (o.page) {
            window.addEventListener("scroll", handleScroll);
        } else if (elRef.current) {
            elRef.current.addEventListener("scroll", handleScroll);
        }

        return (): void => {
            if (o.page) {
                window.removeEventListener("scroll", handleScroll);
            } else if (elRef.current) {
                elRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, [
        hvTrackX,
        hvThumbX,
        hvTrackY,
        hvThumbY,
        o.page,
        // x
        scrollbarOffsetX,
        // y
        scrollbarOffsetY,
    ]);

    React.useEffect((): void => {
        if (!isInitScrollX.current) return void 0;

        ioX.onActive?.({
            isActive: isActiveX,
        });
    }, [
        ioX.onActive,
        isActiveX,
    ]);

    React.useEffect((): void => {
        if (!isInitScrollY.current) return void 0;

        ioY.onActive?.({
            isActive: isActiveY,
        });
    }, [
        ioY.onActive,
        isActiveY,
    ]);

    const getClassName = (): string | undefined => {
        if (o.headless) return p.className;
        return clsx("sla", "sla-container", p.className);
    };

    return (
        <>
            <ScrollCoreContext
                value={{
                    options: o,
                    ref: elRef,
                    x: {
                        options: ioX,
                        hvTrack: hvTrackX,
                        setHvTrack: setHvTrackX,
                        hvThumb: hvThumbX,
                        setHvThumb: setHvThumbX,
                        timeout: timeoutX,
                        total: totalX,
                        view: viewX,
                        viewOffset: viewOffsetX,
                        scrollbarLength: scrollbarLengthX,
                        setScrollbarLength: setScrollbarLengthX,
                        scrollbarOffset: scrollbarOffsetX,
                        setScrollbarOffset: setScrollbarOffsetX,
                        isActive: isActiveX,
                        setIsActive: setIsActiveX,
                    },
                    y: {
                        options: ioY,
                        hvTrack: hvTrackY,
                        setHvTrack: setHvTrackY,
                        hvThumb: hvThumbY,
                        setHvThumb: setHvThumbY,
                        timeout: timeoutY,
                        total: totalY,
                        view: viewY,
                        viewOffset: viewOffsetY,
                        scrollbarLength: scrollbarLengthY,
                        setScrollbarLength: setScrollbarLengthY,
                        scrollbarOffset: scrollbarOffsetY,
                        setScrollbarOffset: setScrollbarOffsetY,
                        isActive: isActiveY,
                        setIsActive: setIsActiveY,
                    },
                }}
            >
                <div
                    {...p}
                    className={getClassName()}
                >
                    {children}
                </div>
            </ScrollCoreContext>
        </>
    );
};

export type { ContainerProps };
export { Container };
