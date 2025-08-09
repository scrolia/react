[@scrolia/react](../README.md) / Scrollbar

# Variable: Scrollbar

```ts
const Scrollbar: object;
```

Defined in: [package/src/index.ts:10](https://github.com/scrolia/react/blob/bef514f38138f6c060ddd0fad9edaba13d77962a/package/src/index.ts#L10)

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

###### page?

`boolean`

Whether the scrollbar serve for a page.

By default, it is `false`.

###### plugins?

`object`[]

The plugins for the scrollbar.

By default, it is `[]`.

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
