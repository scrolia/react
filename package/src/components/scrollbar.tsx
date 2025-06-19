import type * as React from "react";
import type { Format } from "ts-vista";

import type { Options } from "#/@types/options";

import { Container } from "#/base/container";
import { Content } from "#/base/content";
import { ThumbX } from "#/base/thumb/x";
import { ThumbY } from "#/base/thumb/y";
import { TrackX } from "#/base/track/x";
import { TrackY } from "#/base/track/y";

/** Props for the `Scrollbar` component. */
type ScrollbarProps = Format<
    Pick<Options, "disabled" | "page"> & {
        children?: React.ReactNode;
    }
>;

/**
 * Scrollbar component.
 *
 * ### Example
 *
 * ```tsx
 * import type * as React from "react";
 *
 * import { Scrollbar } from "@scrolia/react";
 *
 * const App = (): React.JSX.Element => {
 *     return (
 *         <>
 *             <div>
 *                 <Scrollbar>
 *                     <div>Content</div>
 *                 </Scrollbar>
 *             </div>
 *         </>
 *     );
 * }
 * ```
 */
const Scrollbar = (props: ScrollbarProps): React.JSX.Element => {
    const { children, ...p } = props;

    return (
        <>
            <Container {...p}>
                <Content>{children}</Content>
                <TrackX>
                    <ThumbX />
                </TrackX>
                <TrackY>
                    <ThumbY />
                </TrackY>
            </Container>
        </>
    );
};

export type { ScrollbarProps };
export { Scrollbar };
