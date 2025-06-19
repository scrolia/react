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

Import CSS for the default styles:

```ts
import "@scrolia/react/css";
// or
import "@scrolia/react/dist/index.css";
```

For page scrollbar:

```tsx
import type * as React from "react";

import { Scrollbar } from "@scrolia/react";

const Page = (): React.JSX.Element => {
    return (
        <>
            <Scrollbar page>
                <div>Content</div>
            </Scrollbar>
        </>
    );
};
```

For component scrollbar:

```tsx
import type * as React from "react";

import { Scrollbar } from "@scrolia/react";

const Component = (): React.JSX.Element => {
    return (
        <>
            <div>
                <Scrollbar>
                    <div>Content</div>
                </Scrollbar>
            </div>
        </>
    );
};
```

For scrollbar colors customization, overwrite the following CSS variables:

```css
:root {
    --scrollbar-base: #99999955;
    --scrollbar-hover: #99999977;
    --scrollbar-active: #99999999;
}
```

For more customization:

> `headless` option will remove all the default styles

```tsx
import type * as React from "react";

import {
    Container,
    Content,
    TrackX,
    ThumbX,
    TrackY,
    ThumbY,
} from "@scrolia/react";

type ScrollbarProps = Omit<Options, "headless"> & {
    children?: React.ReactNode;
};

const Scrollbar = (
    props: ScrollbarProps,
): React.JSX.Element => {
    const { children, ...p } = props;

    return (
        <>
            <Container {...p} headless>
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
}
```
