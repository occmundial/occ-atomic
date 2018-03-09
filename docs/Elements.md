# Elements
Here's the documentation on how to implement each of the Element components:

- Button
- ButtonAlign
- Card
- Icon
- Label
- Title

## Button

The `Button` component has different properties which will define how it will look and work.
Here's a table with the properties available:
| Property  | Type  | Options  | Default  | Description  |
| --- | --- | --- | --- | --- |
| `theme`  | string  | main, secondary, flat, blue  | main  | This property defines the style and look of the button.  |
| `size`  | string  | md, lg  |   | This sets the size of the button. By default the button is small, so you don't have to set the size in that case.  |
| `block`  | boolean  | true \| false  | false  | This will expand the `Button` to occupy the whole width  |
| `disabled`  | boolean  | true \| false  | false  | This will disable the button, preventing any interaction and applying a grey theme.  |
| `loading`  | boolean  | true \| false  | false  | This will put the button in a loading state, preventing any interaction and showing a spinning icon.  |
| `icon`  | string  |   |   | The `icon` property can receive any icon name available in the [Icons](./Subatomic.md#Icons) library. The icon will be displayed at the left.  |
| `onClick`  | function  |   |   | You can pass any function you want to execute on the `onClick` event.  |
| `href`  | string  |   |   | If you want to use your button as a link, you can pass a url.  |
| `target`  | string  |   |   | You can set a target if you have already setted an `href`.  |

You can also set an id, className or a style object.

Here's an example:
```jsx
import { Button } from 'r12-common';

// In your component
<Button theme="secondary" size="md" block icon="search" href="http://occ.com.mx">
  Search
</Button>
```

## Button Align
The `ButtonAlign` component is just a wrapper to push to the right position a `Button`, to be aligned horizontally with an `Input` component. It just needs one property, size, with any of these values: `sm`, `md`, `lg`, which corresponds with the size of the button that you want to align.

Here's an example:
```jsx
import { Button, ButtonAlign } from 'r12-common';

// In your component
<ButtonAlign size="sm">
  <Button size="sm">Aligned button</Button>
</ButtonAlign>
```

## Card
Cards are the containers of certain relevant content, they use the level of shadow to empathize its hierarchy. It can receive two properties. By default it has a padding at the top and bottom, with the boolean property `noPadding` these padding are cancelled. The other property is `shadow`, which is related to the 6 levels of shadow in the [Shadows]() library, so it can receive a numeric value between 1 and 6.

Here's an example:
```jsx
import { Card } from 'r12-common';

// In your component
<Card noPadding shadow={3}>
  // Your card content
</Card>
```

## Icon
The `Icon` component receives an `iconName` property. With this property it can apply the default values for `width`, `height` and `display` of the icon in the [Icons]() library, and the `icon` itself. You can user the properties `width`, `height` and `display` if you don't want to use the default values. You can also use the property `colors` to send an array of colors and ignore the default ones.

Here's an example:
```jsx
import { Icon } from 'r12-common';

// In your component
<Icon iconName="search" width={12} height={12} display="block" colors={['#242424']} />
```

## Label
The `label` component has currently just one theme, but there will be more themes available soon, and to set it you can use the property `theme` with the name of the theme you want to use.

It can receive two functions, `oClick` and `onClose`. The `onClick` function will be called when the user clicks in any part of the label, except when there's an `onClose` function, which will show an 'x' icon on the right side of the label (which means the `onClick` functions is not called clicking in the right side). You will usually bind a function that deletes the label from your DOM in the `onClose` function.

Here's an example:
```jsx
import { Label } from 'r12-common';

// In your component
<Label theme="default" onClick={/* Execute a function on click*/} onClose={/* Execute a function when clicking the 'x' icon */}>
  Label text
</Label>
```

## Title
This component will render a heading tag with its corresponding styles. It just needs to receive the property `h` with a numeric value between 1 and 6.

Here's an example:
```jsx
import { Title } from 'r12-common';

// In your component
<Title h={1}>This is an H1 tag</Title>
```
