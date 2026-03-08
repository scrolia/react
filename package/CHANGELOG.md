## Next

### What's Changed

- optimize internal states logic

## 0.6.0 (2025-08-09)

### Breaking Changes

- remove default styles
- remove Original `Scrollbar` component
- remove all previous options
- all components passed into `Scrollbar` object

### What's New

- headless by default
- add `Provider` component
- `Provider` component now accepts the following props:
    - `disabled`
    - `page`
    - `plugins`
    - `children`

### Migrating from 0.5.0 to 0.6.0

Import `Scrollbar` instead:

```diff
- import {
-    Container,
-    Content,
-    TrackX,
-    TrackY,
-    ThumbX,
-    ThumbY,
- } from "@scrolia/react";
+ import { Scrollbar as S } from "@scrolia/react";
```

`Provider` component required:

```diff
- <Container>
-     <Content>{/* */}</Content>
-     <TrackX>
-         <ThumbX />
-     </TrackX>
-     <TrackY>
-         <ThumbY />
-     </TrackY>
- </Container>
+ <S.Provider>
+     <S.Container>
+         <S.Content>{/* */}</S.Content>
+         <S.TrackX>
+             <S.ThumbX />
+         </S.TrackX>
+         <S.TrackY>
+             <S.ThumbY />
+         </S.TrackY>
+ </S.Provider>
```

## 0.5.0 (2025-06-20)

### What's New

- add sourcemap support for CSS

### What's Changed

- avoid `NaN` value to be passed to CSS style property
- remove `@scrolia/shared` from dependencies

## 0.4.0 (2025-04-17)

### Breaking Changes

- remove `PageScrollbar` and `ComponentScrollbar` component
- move options:
    - `disabled`
- remove options:
    - `position`
    - `color`
    - `colorHover`
    - `colorActive`
    - `containerProps`
    - `contentProps`
    - `trackXProps`
    - `trackYProps`
    - `thumbXProps`
    - `thumbYProps` 
- remove `useDeviceEnvironment` hook

### What's New

- add components:
    - `Container`
    - `Content`
    - `TrackX`
    - `TrackY`
    - `ThumbX`
    - `ThumbY`
    - `Scrollbar`
- add `page` option
- add `headless` option
- add `setScrollbarLength` option
- add `activeTrackClassName` option
- add `activeThumbClassName` option
- add `x` object option
- add `y` object option
- add sourcemap support

### Migrating from 0.3.0 to 0.4.0

For page scrollbar:

```diff
import type * as React from "react";

- import { PageScrollbar } from "@scrolia/react";
+ import { Scrollbar } from "@scrolia/react";

const App = (): React.JSX.Element => {
    return (
        <>
-           <PageScrollbar>
+           <Scrollbar page>
                <div>Content</div>
-           </PageScrollbar>
+           </Scrollbar>
        </>
    );
}
```

For component scrollbar:

```diff
import type * as React from "react";

- import { ComponentScrollbar } from "@scrolia/react";
+ import { Scrollbar } from "@scrolia/react";

const Component = (): React.JSX.Element => {
    return (
        <div>
-           <ComponentScrollbar>
+           <Scrollbar>
                <div>Content</div>
-           </ComponentScrollbar>
+           </Scrollbar>
        </div>
    );
}
```

## 0.3.0 (2024-12-18)

### Breaking Changes

- remove `enable` prop, use `disabled` prop instead
- rename `colorDrag` to `colorActive`
- update `useDeviceEnvironment` hook for the new prop

### What's New

- add `disabled` prop
- component now require the CSS to be imported

## 0.2.2 (2024-12-10)

### What's Changed

- fix on the scrollbar update function
- remove unused track and thumb on specific position

## 0.2.1 (2024-12-01)

### What's Changed

- fix on styling
- better support for the scrollbar on navigation
- performance optimization

## 0.2.0 (2024-11-28)

### What's New

- add support for ES Module
- add `useDeviceEnvironment` hook
- add `enable` option

### What's Changed

- support all environments by default

## 0.1.1 (2024-05-30)

### What's Changed

- fix the issue that the scrollbar do not update after popstate
- avoid update on popstate event in same URL
 
## 0.1.0 (2024-05-30)

initial release
