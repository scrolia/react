[@scrolia/react](../README.md) / Scrollbar

# Variable: Scrollbar

```ts
const Scrollbar: object;
```

Defined in: [package/src/index.ts:10](https://github.com/scrolia/react/blob/9c5681043194149a93fdeb05f7ee147606c0baa9/package/src/index.ts#L10)

Scrollbar components.

## Type declaration

### Container()

```ts
Container: (props) => Element;
```

Container component.

#### Parameters

##### props

`DetailedHTMLProps`

#### Returns

`Element`

### Content()

```ts
Content: (props) => Element;
```

Content component.

#### Parameters

##### props

`DetailedHTMLProps`

#### Returns

`Element`

### Provider()

```ts
Provider: (options) => Element;
```

Provider component.

#### Parameters

##### options

###### children?

`ReactNode`

###### disabled?

`boolean`

Whether disable the scrollbar.

By default, it is `false`.

###### onDragEnd?

(`options`) => `void`

The function to be called when the scrollbar is released.

###### onDragMove?

(`options`) => 
  \| `undefined`
  \| \{
  `scrollTo?`: `number`;
\}

The function to be called when the scrollbar is dragged and move.

###### onDragStart?

(`options`) => `void`

The function to be called when the scrollbar is being dragged.

###### onScroll?

(`options`) => 
  \| `undefined`
  \| \{
  `scrollbarOffset?`: `number`;
\}

The function to be called when the scrollbar is being scrolled.

###### onSetLength?

(`options`) => 
  \| `undefined`
  \| \{
  `scrollbarLength?`: `number`;
\}

The function to be called when the length of the scrollbar is being set.

###### page?

`boolean`

Whether the scrollbar serve for a page.

By default, it is `false`.

#### Returns

`Element`

### ThumbX()

```ts
ThumbX: (props) => Element;
```

Horizontal thumb component.

#### Parameters

##### props

`DetailedHTMLProps`

#### Returns

`Element`

### ThumbY()

```ts
ThumbY: (props) => Element;
```

Vertical thumb component.

#### Parameters

##### props

`DetailedHTMLProps`

#### Returns

`Element`

### TrackX()

```ts
TrackX: (props) => Element;
```

Horizontal track component.

#### Parameters

##### props

`DetailedHTMLProps`

#### Returns

`Element`

### TrackY()

```ts
TrackY: (props) => Element;
```

Vertical track component.

#### Parameters

##### props

`DetailedHTMLProps`

#### Returns

`Element`
