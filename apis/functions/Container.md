[@scrolia/react](../README.md) / Container

# Function: Container()

```ts
function Container(props): Element;
```

Defined in: package/src/base/container.tsx:31

Container component.

## Parameters

### props

#### about?

`string`

#### accessKey?

`string`

#### activeThumbClassName?

`string` \| `false`

The class name for thumb active state in headless mode.

By default, it is disabled with `false`.

#### activeTrackClassName?

`string` \| `false`

The class name for track active state in headless mode.

By default, it is disabled with `false`.

#### aria-activedescendant?

`string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### aria-atomic?

`Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### aria-autocomplete?

`"none"` \| `"list"` \| `"inline"` \| `"both"`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### aria-braillelabel?

`string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

**See**

aria-label.

#### aria-brailleroledescription?

`string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

**See**

aria-roledescription.

#### aria-busy?

`Booleanish`

#### aria-checked?

`boolean` \| `"true"` \| `"false"` \| `"mixed"`

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

**See**

 - aria-pressed
 - aria-selected.

#### aria-colcount?

`number`

Defines the total number of columns in a table, grid, or treegrid.

**See**

aria-colindex.

#### aria-colindex?

`number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

**See**

 - aria-colcount
 - aria-colspan.

#### aria-colindextext?

`string`

Defines a human readable text alternative of aria-colindex.

**See**

aria-rowindextext.

#### aria-colspan?

`number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

**See**

 - aria-colindex
 - aria-rowspan.

#### aria-controls?

`string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

**See**

aria-owns.

#### aria-current?

`boolean` \| `"page"` \| `"true"` \| `"false"` \| `"step"` \| `"location"` \| `"date"` \| `"time"`

Indicates the element that represents the current item within a container or set of related elements.

#### aria-describedby?

`string`

Identifies the element (or elements) that describes the object.

**See**

aria-labelledby

#### aria-description?

`string`

Defines a string value that describes or annotates the current element.

**See**

related aria-describedby.

#### aria-details?

`string`

Identifies the element that provides a detailed, extended description for the object.

**See**

aria-describedby.

#### aria-disabled?

`Booleanish`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

**See**

 - aria-hidden
 - aria-readonly.

#### aria-dropeffect?

`"copy"` \| `"link"` \| `"none"` \| `"execute"` \| `"move"` \| `"popup"`

Indicates what functions can be performed when a dragged object is released on the drop target.

**Deprecated**

in ARIA 1.1

#### aria-errormessage?

`string`

Identifies the element that provides an error message for the object.

**See**

 - aria-invalid
 - aria-describedby.

#### aria-expanded?

`Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### aria-flowto?

`string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### aria-grabbed?

`Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

**Deprecated**

in ARIA 1.1

#### aria-haspopup?

  \| `boolean`
  \| `"true"`
  \| `"false"`
  \| `"dialog"`
  \| `"grid"`
  \| `"listbox"`
  \| `"menu"`
  \| `"tree"`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### aria-hidden?

`Booleanish`

Indicates whether the element is exposed to an accessibility API.

**See**

aria-disabled.

#### aria-invalid?

`boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Indicates the entered value does not conform to the format expected by the application.

**See**

aria-errormessage.

#### aria-keyshortcuts?

`string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### aria-label?

`string`

Defines a string value that labels the current element.

**See**

aria-labelledby.

#### aria-labelledby?

`string`

Identifies the element (or elements) that labels the current element.

**See**

aria-describedby.

#### aria-level?

`number`

Defines the hierarchical level of an element within a structure.

#### aria-live?

`"off"` \| `"assertive"` \| `"polite"`

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### aria-modal?

`Booleanish`

Indicates whether an element is modal when displayed.

#### aria-multiline?

`Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### aria-multiselectable?

`Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### aria-orientation?

`"horizontal"` \| `"vertical"`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### aria-owns?

`string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

**See**

aria-controls.

#### aria-placeholder?

`string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### aria-posinset?

`number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**See**

aria-setsize.

#### aria-pressed?

`boolean` \| `"true"` \| `"false"` \| `"mixed"`

Indicates the current "pressed" state of toggle buttons.

**See**

 - aria-checked
 - aria-selected.

#### aria-readonly?

`Booleanish`

Indicates that the element is not editable, but is otherwise operable.

**See**

aria-disabled.

#### aria-relevant?

  \| `"text"`
  \| `"additions"`
  \| `"additions removals"`
  \| `"additions text"`
  \| `"all"`
  \| `"removals"`
  \| `"removals additions"`
  \| `"removals text"`
  \| `"text additions"`
  \| `"text removals"`

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

**See**

aria-atomic.

#### aria-required?

`Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### aria-roledescription?

`string`

Defines a human-readable, author-localized description for the role of an element.

#### aria-rowcount?

`number`

Defines the total number of rows in a table, grid, or treegrid.

**See**

aria-rowindex.

#### aria-rowindex?

`number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

**See**

 - aria-rowcount
 - aria-rowspan.

#### aria-rowindextext?

`string`

Defines a human readable text alternative of aria-rowindex.

**See**

aria-colindextext.

#### aria-rowspan?

`number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

**See**

 - aria-rowindex
 - aria-colspan.

#### aria-selected?

`Booleanish`

Indicates the current "selected" state of various widgets.

**See**

 - aria-checked
 - aria-pressed.

#### aria-setsize?

`number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**See**

aria-posinset.

#### aria-sort?

`"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Indicates if items in a table or grid are sorted in ascending or descending order.

#### aria-valuemax?

`number`

Defines the maximum allowed value for a range widget.

#### aria-valuemin?

`number`

Defines the minimum allowed value for a range widget.

#### aria-valuenow?

`number`

Defines the current value for a range widget.

**See**

aria-valuetext.

#### aria-valuetext?

`string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### autoCapitalize?

  \| `"off"`
  \| `"none"`
  \| `"on"`
  \| `"sentences"`
  \| `"words"`
  \| `"characters"`
  \| `string` & `object`

#### autoCorrect?

`string`

#### autoFocus?

`boolean`

#### autoSave?

`string`

#### children?

`ReactNode`

#### className?

`string`

#### color?

`string`

#### content?

`string`

#### contentEditable?

`Booleanish` \| `"inherit"` \| `"plaintext-only"`

#### contextMenu?

`string`

#### dangerouslySetInnerHTML?

\{
  `__html`: `string` \| `TrustedHTML`;
\}

#### dangerouslySetInnerHTML.__html

`string` \| `TrustedHTML`

#### datatype?

`string`

#### defaultChecked?

`boolean`

#### defaultValue?

`string` \| `number` \| readonly `string`[]

#### dir?

`string`

#### disabled?

`boolean`

Whether disable the scrollbar.

By default, it is `false`.

#### draggable?

`Booleanish`

#### enterKeyHint?

`"search"` \| `"enter"` \| `"done"` \| `"go"` \| `"next"` \| `"previous"` \| `"send"`

#### exportparts?

`string`

**See**

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes/exportparts](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts)

#### headless?

`boolean`

Whether enable headless mode.

By default, it is `false`.

#### hidden?

`boolean`

#### id?

`string`

#### inert?

`boolean`

**See**

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert

#### inlist?

`any`

#### inputMode?

  \| `"search"`
  \| `"none"`
  \| `"text"`
  \| `"tel"`
  \| `"url"`
  \| `"email"`
  \| `"numeric"`
  \| `"decimal"`

Hints at the type of data that might be entered by the user while editing the element or its contents

**See**

[https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)

#### is?

`string`

Specify that a standard HTML element should behave like a defined custom built-in element

**See**

[https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is)

#### itemID?

`string`

#### itemProp?

`string`

#### itemRef?

`string`

#### itemScope?

`boolean`

#### itemType?

`string`

#### lang?

`string`

#### nonce?

`string`

#### onAbort?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onAbortCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onAnimationEnd?

`AnimationEventHandler`\<`HTMLDivElement`\>

#### onAnimationEndCapture?

`AnimationEventHandler`\<`HTMLDivElement`\>

#### onAnimationIteration?

`AnimationEventHandler`\<`HTMLDivElement`\>

#### onAnimationIterationCapture?

`AnimationEventHandler`\<`HTMLDivElement`\>

#### onAnimationStart?

`AnimationEventHandler`\<`HTMLDivElement`\>

#### onAnimationStartCapture?

`AnimationEventHandler`\<`HTMLDivElement`\>

#### onAuxClick?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onAuxClickCapture?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onBeforeInput?

`InputEventHandler`\<`HTMLDivElement`\>

#### onBeforeInputCapture?

`FormEventHandler`\<`HTMLDivElement`\>

#### onBeforeToggle?

`ToggleEventHandler`\<`HTMLDivElement`\>

#### onBlur?

`FocusEventHandler`\<`HTMLDivElement`\>

#### onBlurCapture?

`FocusEventHandler`\<`HTMLDivElement`\>

#### onCanPlay?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onCanPlayCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onCanPlayThrough?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onCanPlayThroughCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onChange?

`FormEventHandler`\<`HTMLDivElement`\>

#### onChangeCapture?

`FormEventHandler`\<`HTMLDivElement`\>

#### onClick?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onClickCapture?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onCompositionEnd?

`CompositionEventHandler`\<`HTMLDivElement`\>

#### onCompositionEndCapture?

`CompositionEventHandler`\<`HTMLDivElement`\>

#### onCompositionStart?

`CompositionEventHandler`\<`HTMLDivElement`\>

#### onCompositionStartCapture?

`CompositionEventHandler`\<`HTMLDivElement`\>

#### onCompositionUpdate?

`CompositionEventHandler`\<`HTMLDivElement`\>

#### onCompositionUpdateCapture?

`CompositionEventHandler`\<`HTMLDivElement`\>

#### onContextMenu?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onContextMenuCapture?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onCopy?

`ClipboardEventHandler`\<`HTMLDivElement`\>

#### onCopyCapture?

`ClipboardEventHandler`\<`HTMLDivElement`\>

#### onCut?

`ClipboardEventHandler`\<`HTMLDivElement`\>

#### onCutCapture?

`ClipboardEventHandler`\<`HTMLDivElement`\>

#### onDoubleClick?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onDoubleClickCapture?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onDrag?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragCapture?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragEnd?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragEndCapture?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragEnter?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragEnterCapture?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragExit?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragExitCapture?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragLeave?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragLeaveCapture?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragOver?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragOverCapture?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragStart?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDragStartCapture?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDrop?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDropCapture?

`DragEventHandler`\<`HTMLDivElement`\>

#### onDurationChange?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onDurationChangeCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onEmptied?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onEmptiedCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onEncrypted?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onEncryptedCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onEnded?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onEndedCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onError?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onErrorCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onFocus?

`FocusEventHandler`\<`HTMLDivElement`\>

#### onFocusCapture?

`FocusEventHandler`\<`HTMLDivElement`\>

#### onGotPointerCapture?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onGotPointerCaptureCapture?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onInput?

`FormEventHandler`\<`HTMLDivElement`\>

#### onInputCapture?

`FormEventHandler`\<`HTMLDivElement`\>

#### onInvalid?

`FormEventHandler`\<`HTMLDivElement`\>

#### onInvalidCapture?

`FormEventHandler`\<`HTMLDivElement`\>

#### onKeyDown?

`KeyboardEventHandler`\<`HTMLDivElement`\>

#### onKeyDownCapture?

`KeyboardEventHandler`\<`HTMLDivElement`\>

#### onKeyPress?

`KeyboardEventHandler`\<`HTMLDivElement`\>

**Deprecated**

Use `onKeyUp` or `onKeyDown` instead

#### onKeyPressCapture?

`KeyboardEventHandler`\<`HTMLDivElement`\>

**Deprecated**

Use `onKeyUpCapture` or `onKeyDownCapture` instead

#### onKeyUp?

`KeyboardEventHandler`\<`HTMLDivElement`\>

#### onKeyUpCapture?

`KeyboardEventHandler`\<`HTMLDivElement`\>

#### onLoad?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onLoadCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onLoadedData?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onLoadedDataCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onLoadedMetadata?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onLoadedMetadataCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onLoadStart?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onLoadStartCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onLostPointerCapture?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onLostPointerCaptureCapture?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onMouseDown?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onMouseDownCapture?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onMouseEnter?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onMouseLeave?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onMouseMove?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onMouseMoveCapture?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onMouseOut?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onMouseOutCapture?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onMouseOver?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onMouseOverCapture?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onMouseUp?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onMouseUpCapture?

`MouseEventHandler`\<`HTMLDivElement`\>

#### onPaste?

`ClipboardEventHandler`\<`HTMLDivElement`\>

#### onPasteCapture?

`ClipboardEventHandler`\<`HTMLDivElement`\>

#### onPause?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onPauseCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onPlay?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onPlayCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onPlaying?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onPlayingCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onPointerCancel?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerCancelCapture?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerDown?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerDownCapture?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerEnter?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerLeave?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerMove?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerMoveCapture?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerOut?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerOutCapture?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerOver?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerOverCapture?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerUp?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onPointerUpCapture?

`PointerEventHandler`\<`HTMLDivElement`\>

#### onProgress?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onProgressCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onRateChange?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onRateChangeCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onReset?

`FormEventHandler`\<`HTMLDivElement`\>

#### onResetCapture?

`FormEventHandler`\<`HTMLDivElement`\>

#### onScroll?

`UIEventHandler`\<`HTMLDivElement`\>

#### onScrollCapture?

`UIEventHandler`\<`HTMLDivElement`\>

#### onScrollEnd?

`UIEventHandler`\<`HTMLDivElement`\>

#### onScrollEndCapture?

`UIEventHandler`\<`HTMLDivElement`\>

#### onSeeked?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onSeekedCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onSeeking?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onSeekingCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onSelect?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onSelectCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onStalled?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onStalledCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onSubmit?

`FormEventHandler`\<`HTMLDivElement`\>

#### onSubmitCapture?

`FormEventHandler`\<`HTMLDivElement`\>

#### onSuspend?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onSuspendCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onTimeUpdate?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onTimeUpdateCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onToggle?

`ToggleEventHandler`\<`HTMLDivElement`\>

#### onTouchCancel?

`TouchEventHandler`\<`HTMLDivElement`\>

#### onTouchCancelCapture?

`TouchEventHandler`\<`HTMLDivElement`\>

#### onTouchEnd?

`TouchEventHandler`\<`HTMLDivElement`\>

#### onTouchEndCapture?

`TouchEventHandler`\<`HTMLDivElement`\>

#### onTouchMove?

`TouchEventHandler`\<`HTMLDivElement`\>

#### onTouchMoveCapture?

`TouchEventHandler`\<`HTMLDivElement`\>

#### onTouchStart?

`TouchEventHandler`\<`HTMLDivElement`\>

#### onTouchStartCapture?

`TouchEventHandler`\<`HTMLDivElement`\>

#### onTransitionCancel?

`TransitionEventHandler`\<`HTMLDivElement`\>

#### onTransitionCancelCapture?

`TransitionEventHandler`\<`HTMLDivElement`\>

#### onTransitionEnd?

`TransitionEventHandler`\<`HTMLDivElement`\>

#### onTransitionEndCapture?

`TransitionEventHandler`\<`HTMLDivElement`\>

#### onTransitionRun?

`TransitionEventHandler`\<`HTMLDivElement`\>

#### onTransitionRunCapture?

`TransitionEventHandler`\<`HTMLDivElement`\>

#### onTransitionStart?

`TransitionEventHandler`\<`HTMLDivElement`\>

#### onTransitionStartCapture?

`TransitionEventHandler`\<`HTMLDivElement`\>

#### onVolumeChange?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onVolumeChangeCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onWaiting?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onWaitingCapture?

`ReactEventHandler`\<`HTMLDivElement`\>

#### onWheel?

`WheelEventHandler`\<`HTMLDivElement`\>

#### onWheelCapture?

`WheelEventHandler`\<`HTMLDivElement`\>

#### page?

`boolean`

Whether the scrollbar serve for a page.

By default, it is `false`.

#### part?

`string`

**See**

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes/part](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part)

#### popover?

`""` \| `"auto"` \| `"manual"`

#### popoverTarget?

`string`

#### popoverTargetAction?

`"toggle"` \| `"show"` \| `"hide"`

#### prefix?

`string`

#### property?

`string`

#### radioGroup?

`string`

#### ref?

`Ref`\<`HTMLDivElement`\>

#### rel?

`string`

#### resource?

`string`

#### results?

`number`

#### rev?

`string`

#### role?

`AriaRole`

#### security?

`string`

#### setScrollbarLength?

(`length`) => `number`

Set the length of the scrollbar.

By default, it match with the default style.

#### slot?

`string`

#### spellCheck?

`Booleanish`

#### style?

`CSSProperties`

#### suppressContentEditableWarning?

`boolean`

#### suppressHydrationWarning?

`boolean`

#### tabIndex?

`number`

#### title?

`string`

#### translate?

`"yes"` \| `"no"`

#### typeof?

`string`

#### unselectable?

`"off"` \| `"on"`

#### vocab?

`string`

#### x?

\{
  `activeThumbClassName?`: `string` \| `false`;
  `activeTrackClassName?`: `string` \| `false`;
  `onActive?`: (`options`) => `void`;
  `setScrollbarLength?`: (`length`) => `number`;
\}

Individual options for horizontal scrollbar.

#### x.activeThumbClassName?

`string` \| `false`

The class name for thumb active state in headless mode.

By default, it is disabled with `false`.

#### x.activeTrackClassName?

`string` \| `false`

The class name for track active state in headless mode.

By default, it is disabled with `false`.

#### x.onActive?

(`options`) => `void`

Triggered on scrollbar active state change.

#### x.setScrollbarLength?

(`length`) => `number`

Set the length of the scrollbar.

By default, it match with the default style.

#### y?

\{
  `activeThumbClassName?`: `string` \| `false`;
  `activeTrackClassName?`: `string` \| `false`;
  `onActive?`: (`options`) => `void`;
  `setScrollbarLength?`: (`length`) => `number`;
\}

Individual options for vertical scrollbar.

#### y.activeThumbClassName?

`string` \| `false`

The class name for thumb active state in headless mode.

By default, it is disabled with `false`.

#### y.activeTrackClassName?

`string` \| `false`

The class name for track active state in headless mode.

By default, it is disabled with `false`.

#### y.onActive?

(`options`) => `void`

Triggered on scrollbar active state change.

#### y.setScrollbarLength?

(`length`) => `number`

Set the length of the scrollbar.

By default, it match with the default style.

## Returns

`Element`
