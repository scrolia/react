import { Container } from "#/components/container";
import { Content } from "#/components/content";
import { Provider } from "#/components/provider";
import { ThumbX } from "#/components/thumb/x";
import { ThumbY } from "#/components/thumb/y";
import { TrackX } from "#/components/track/x";
import { TrackY } from "#/components/track/y";

/** Scrollbar components. */
const Scrollbar = {
    Provider,
    Container,
    Content,
    TrackX,
    TrackY,
    ThumbX,
    ThumbY,
};

export type {
    OnDragEndOptions,
    OnDragMoveOptions,
    OnDragMoveResult,
    OnDragStartOptions,
    OnScrollOptions,
    OnScrollResult,
    OnSetLengthOptions,
    OnSetLengthResult,
    Options,
    Position,
} from "#/@types/options";
export type { ContainerProps } from "#/components/container";
export type { ContentProps } from "#/components/content";
export type { ProviderProps } from "#/components/provider";
export type { ThumbXProps } from "#/components/thumb/x";
export type { ThumbYProps } from "#/components/thumb/y";
export type { TrackXProps } from "#/components/track/x";
export type { TrackYProps } from "#/components/track/y";
export type {
    ScrollCore,
    ScrollCoreOptions,
    ScrollCoreStates,
} from "#/contexts/scrollcore";
export type { ThumbHandlerX } from "#/hooks/thumb/x";
export type { ThumbHandlerY } from "#/hooks/thumb/y";

export { ScrollCoreContext, useScrollCore } from "#/contexts/scrollcore";
export { useSetLength } from "#/hooks/length";
export { useHandleScroll } from "#/hooks/scroll";
export { useThumbHandlerX } from "#/hooks/thumb/x";
export { useThumbHandlerY } from "#/hooks/thumb/y";
export { Scrollbar };
