[< Back](../README.md)

# Scrolia React

This is the documentation for Scrolia React.

## Installation

Install this package as a dependency in the project:

```sh
# npm
npm i @scrolia/react

# Yarn
yarn add @scrolia/react

# pnpm
pnpm add @scrolia/react

# Deno
deno add npm:@scrolia/react

# Bun
bun add @scrolia/react
```

## Usage

A basic usage example:

```tsx
import type * as React from "react";
import type { Options } from "@scrolia/react";

import { Scrollbar as S } from "@scrolia/react";

type ScrollbarProps = Pick<Options, "disabled" | "page"> & {
    children?: React.ReactNode;
};

const Scrollbar = (
    props: ScrollbarProps,
): React.JSX.Element => {
    const { children, ...p } = props;

    return (
        <S.Provider {...p}>
            <S.Container>
                <S.Content>
                    {children}
                </S.Content>
                <S.TrackX>
                    <S.ThumbX />
                </S.TrackX>
                <S.TrackY>
                    <S.ThumbY />
                </S.TrackY>
            </S.Container>
        </S.Provider>
    );
};

export type { ScrollbarProps };
export { Scrollbar };
```

Apply styles to the components using the preferred styling solution:

```css
.sla-nsb {
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
}

.sla {
    &.sla-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .sla-content {
        position: relative;
        width: 100%;
        height: 100%;
        
        &.sla-child {
            overflow: scroll;
        }
    }

    .sla-track {
        position: fixed;
        z-index: 1;

        &.sla-child {
            position: absolute;
        }

        &.sla-x {
            bottom: 0;
            left: 0;
            width: 100%;
            height: 12px;
        }

        &.sla-y {
            top: 0;
            right: 0;
            width: 12px;
            height: 100%;
        }
    }

    .sla-thumb {
        position: absolute;
        background-color: #99999955;

        &.sla-x {
            height: 12px;
        }

        &.sla-y {
            width: 12px;
        }
    }
}
```

```tsx
import type * as React from "react";
import type { Options } from "@scrolia/react";

import { Scrollbar as S } from "@scrolia/react";
import clsx from "clsx";

type ScrollbarProps = Pick<Options, "disabled" | "page"> & {
    children?: React.ReactNode;
};

const Scrollbar = (
    props: ScrollbarProps,
): React.JSX.Element => {
    const { children, ...p } = props;

    return (
        <S.Provider {...p}>
            <S.Container
                className={clsx(
                    "sla", 
                    "sla-container",
                )}
            >
                <S.Content
                    className={clsx(
                        "sla-content",
                        !p.page && "sla-child",
                    )}
                >
                    {children}
                </S.Content>
                <S.TrackX
                    className={clsx(
                        "sla-track",
                        !p.page && "sla-child",
                        "sla-x",
                    )}
                >
                    <S.ThumbX
                        className={clsx(
                            "sla-thumb",
                            "sla-x",
                        )}
                    />
                </S.TrackX>
                <S.TrackY
                    className={clsx(
                        "sla-track",
                        !p.page && "sla-child",
                        "sla-y",
                    )}
                >
                    <S.ThumbY
                        className={clsx(
                            "sla-thumb",
                            "sla-y",
                        )}
                    />
                </S.TrackY>
            </S.Container>
        </S.Provider>
    );
};

export type { ScrollbarProps };
export { Scrollbar };
```
