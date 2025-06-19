import type { Options } from "@scrolia/react";

import type { SystemStyleObject } from "#/panda/types";

import {
    Container,
    Content,
    ThumbX,
    ThumbY,
    TrackX,
    TrackY,
} from "@scrolia/react";
import clsx from "clsx";

import { css } from "#/panda/css";

type ScrollbarProps = Pick<Options, "disabled" | "page"> & {
    children?: React.ReactNode;
};

const Scrollbar = (props: ScrollbarProps): React.JSX.Element => {
    const { children, ...p } = props;

    return (
        <>
            <Container
                {...p}
                headless
                activeThumbClassName={"active"}
                className={css(container)}
            >
                <Content
                    className={clsx(
                        "nsb",
                        css(container, !p.page && childContent),
                    )}
                >
                    {children}
                </Content>
                <TrackX className={css(track, !p.page && childTrack, trackX)}>
                    <ThumbX className={clsx("thumb", css(thumb, thumbX))} />
                </TrackX>
                <TrackY className={css(track, !p.page && childTrack, trackY)}>
                    <ThumbY className={clsx("thumb", css(thumb, thumbY))} />
                </TrackY>
            </Container>
        </>
    );
};

const container: SystemStyleObject = css.raw({
    position: "relative",
    width: "100%",
    height: "100%",
    minWidth: "inherit",
    minHeight: "inherit",
    maxWidth: "inherit",
    maxHeight: "inherit",
});

const childContent: SystemStyleObject = css.raw({
    overflow: "scroll",
});

const track: SystemStyleObject = css.raw({
    zIndex: 1,
    position: "fixed",
    "&:hover .thumb": {
        opacity: 1,
    },
});

const childTrack: SystemStyleObject = css.raw({
    position: "absolute",
});

const trackX: SystemStyleObject = css.raw({
    left: 0,
    bottom: 0,
    width: "100%",
    height: "16px",
});

const trackY: SystemStyleObject = css.raw({
    top: 0,
    right: 0,
    width: "16px",
    height: "100%",
});

const thumb: SystemStyleObject = css.raw({
    position: "absolute",
    opacity: 0,
    borderRadius: "20px",
    backgroundColor: "#99999955",
    transition: "background-color 0.2s, opacity 0.2s",
    _hover: {
        opacity: 1,
        backgroundColor: "#99999977",
    },
    _active: {
        opacity: 1,
        backgroundColor: "#99999999",
    },
    "&.active": {
        opacity: 1,
    },
});

const thumbX: SystemStyleObject = css.raw({
    width: "calc(100% - 10px)",
    height: "10px",
    marginTop: "2.5px",
    marginLeft: "5px",
    marginBottom: "2.5px",
});

const thumbY: SystemStyleObject = css.raw({
    width: "10px",
    height: "calc(100% - 10px)",
    marginTop: "5px",
    marginLeft: "2.5px",
    marginRight: "2.5px",
});

export type { ScrollbarProps };
export { Scrollbar };
