import type { ProviderProps } from "@scrolia/react";

import { Scrollbar as S } from "@scrolia/react";

type ScrollbarProps = ProviderProps;

const Scrollbar = (props: ScrollbarProps): React.JSX.Element => {
    const { children, ...p } = props;

    return (
        <S.Provider {...p}>
            <S.Container
                data-testid="container"
                style={container}
            >
                <S.Content
                    data-testid="content"
                    className="sla-nsb"
                    style={content}
                >
                    {children}
                </S.Content>
                <S.TrackX
                    data-testid="track-x"
                    style={{
                        ...trackX,
                        ...(p.page ? {} : childTrack),
                    }}
                >
                    <S.ThumbX
                        data-testid="thumb-x"
                        style={thumbX}
                    />
                </S.TrackX>
                <S.TrackY
                    data-testid="track-y"
                    style={{
                        ...trackY,
                        ...(p.page ? {} : childTrack),
                    }}
                >
                    <S.ThumbY
                        data-testid="thumb-y"
                        style={thumbY}
                    />
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
