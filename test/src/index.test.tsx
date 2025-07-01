import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Scrollbar } from "#/components/scrollbar";

const Content = (): React.JSX.Element => {
    return <div data-testid="content-block" />;
};

describe("Scrollbar test", (): void => {
    afterEach((): void => {
        cleanup();
    });

    it("should load elements", (): void => {
        render(
            <Scrollbar>
                <Content />
            </Scrollbar>,
        );
        expect(screen.queryByTestId("container")).not.toBeNull();
        expect(screen.queryByTestId("content")).not.toBeNull();
        expect(screen.queryByTestId("content-block")).not.toBeNull();
        expect(screen.queryByTestId("track-x")).not.toBeNull();
        expect(screen.queryByTestId("track-y")).not.toBeNull();
        expect(screen.queryByTestId("thumb-x")).not.toBeNull();
        expect(screen.queryByTestId("thumb-y")).not.toBeNull();
    });

    it("should be disabled", (): void => {
        render(
            <Scrollbar disabled>
                <Content />
            </Scrollbar>,
        );
        expect(screen.queryByTestId("container")).not.toBeNull();
        expect(screen.queryByTestId("content")).not.toBeNull();
        expect(screen.queryByTestId("content-block")).not.toBeNull();
        expect(screen.queryByTestId("track-x")).toBeNull();
        expect(screen.queryByTestId("track-y")).toBeNull();
        expect(screen.queryByTestId("thumb-x")).toBeNull();
        expect(screen.queryByTestId("thumb-y")).toBeNull();
    });
});
