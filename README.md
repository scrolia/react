# Scrolia

A customizable scrollbar component.

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

## Quick Start

To create a scrollbar, use the following code:

```tsx
import type * as React from "react";

import { Scrollbar } from "@scrolia/react";

import "@scrolia/react/css";

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

## Documentation

For the documentation, 
please refer to the [Documentation](./docs//README.md).

## APIs

For the APIs,
please refer to the [APIs](./apis/README.md).

## License

This project is licensed under the terms of the MIT license.
