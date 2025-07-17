import type { Options } from "@scrolia/react";

import { Scrollbar as S } from "@scrolia/react";

type ScrollbarProps = Pick<Options, "disabled" | "page"> & {
    children?: React.ReactNode;
};

const Scrollbar = (props: ScrollbarProps): React.JSX.Element => {
    const { disabled, page, children } = props;

    return (
        <S.Provider
            disabled={disabled}
            page={page}
        >
            <S.Container style={container}>
                <S.Content
                    className="sla-nsb"
                    style={{
                        ...content,
                        ...(page ? {} : childContent),
                    }}
                >
                    {children}
                </S.Content>
                <S.TrackX
                    style={{
                        ...trackX,
                        ...(page ? {} : childTrack),
                    }}
                >
                    <S.ThumbX style={thumbX} />
                </S.TrackX>
                <S.TrackY
                    style={{
                        ...trackY,
                        ...(page ? {} : childTrack),
                    }}
                >
                    <S.ThumbY style={thumbY} />
                </S.TrackY>
            </S.Container>
        </S.Provider>
    );
};

const container: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
};

const content: React.CSSProperties = {
    ...container,
};

const childContent: React.CSSProperties = {
    overflow: "auto",
};

const track: React.CSSProperties = {
    position: "fixed",
    zIndex: 1,
};

const childTrack: React.CSSProperties = {
    position: "absolute",
};

const trackX: React.CSSProperties = {
    ...track,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "12px",
};

const trackY: React.CSSProperties = {
    ...track,
    top: 0,
    right: 0,
    width: "12px",
    height: "100%",
};

const thumb: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "#99999955",
};

const thumbX: React.CSSProperties = {
    ...thumb,
    height: "12px",
};

const thumbY: React.CSSProperties = {
    ...thumb,
    width: "12px",
};

export type { ScrollbarProps };
export { Scrollbar };
