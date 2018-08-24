# Elements
Here's the documentation on how to implement each of the Element components:

- [Avatar](#avatar)
- [Button](#button)
- [ButtonAlign](#button-align)
- [Card](#card)
- [Check](#check)
- [Icon](#icon)
- [Label](#label)
- [OrderBy](#order-by)
- [RangeCounter](#range-counter)
- [Title](#title)
- [TourTip](#tour-tip)
- [WindowSize](#window-size)

To see the documentation about layout components, go to: [Layout](./Layout.md))

## Avatar
The `Avatar`, if given a URL of a picture, will display a rounded 'avatar' with the picture, but it also counts with two fallbacks.

If you don't have the picture, you can use the properties `gender` or `name`. The first one will show a "proto-avatar", with a default svg image of the corresponding gender, the options are `m` and `f`. The second one will take the first two initials of the given name and render them as the avatar. Use just one of the fallbacks, if you send both the `gender` will be used.

By default, the avatar will be displayed at 70px x 70px, but you can use the property `size` to define any numberic value to resize the avatar.

This is an example:
```jsx
import { Avatar } from '@occmundial/occ-atomic';

// In your component
<Avatar photo="{MyPhotoURL}" size={50} gender="f" />
```

## Button

The `Button` component has different properties which will define how it will look and work.
Here's a table with the properties available:

| Property | Type | Options                     | Default | Description                                                                                                                                  |
|----------|----------| --------------------------- |----------| ---------------------------------------------------------------------------------------------------------------------------------------------|
| `theme` | string | main, secondary, flat, blue | main | This property defines the style and look of the button.                                                                                      |
| `size` | string | md, lg                      |  | This sets the size of the button. By default the button is small, so you don't have to set the size in that case.                            |
| `block` | boolean | true - false                | false | This will expand the `Button` to occupy the whole width                                                                                      |
| `disabled` | boolean | true - false                | false | This will disable the button, preventing any interaction and applying a grey theme.                                                          |
| `loading` | boolean | true - false                | false | This will put the button in a loading state, preventing any interaction and showing a spinning icon.                                         |
| `icon` | string |                             |  | The `icon` property can receive any icon name available in the [Icons](./Subatomic.md#icons) library. The icon will be displayed at the left.|
| `onClick` | function |                             |  | You can pass any function you want to execute on the `onClick` event.                                                                        |
| `href` | string |                             |  | If you want to use your button as a link, you can pass a url.                                                                                |
| `target` | string |                             |  | You can set a target if you have already setted an `href`.                                                                                   |

You can also set an id, className or a style object.

Here's an example:
```jsx
import { Button } from '@occmundial/occ-atomic';

// In your component
<Button theme="secondary" size="md" block icon="search" href="http://occ.com.mx">
  Search
</Button>
```

## Button Align
The `ButtonAlign` component is just a wrapper to push to the right position a `Button`, to be aligned horizontally with an `Input` component. It just needs one property, size, with any of these values: `sm`, `md`, `lg`, which corresponds with the size of the button that you want to align.

Here's an example:
```jsx
import { Button, ButtonAlign } from '@occmundial/occ-atomic';

// In your component
<ButtonAlign size="sm">
  <Button size="sm">Aligned button</Button>
</ButtonAlign>
```

## Card
Cards are the containers of certain relevant content, they use the level of shadow to empathize its hierarchy. It can receive two properties. With the boolean property `noPadding` the default paddings are cancelled. The other property is `shadow`, which is related to the 6 levels of shadow in the [Shadows](./Subatomic.md#shadows) library, so it can receive a numeric value between 1 and 6.

Here's an example:
```jsx
import { Card } from '@occmundial/occ-atomic';

// In your component
<Card noPadding shadow={3}>
  // Your card content
</Card>
```

## Check
This component is a replacement for native checkboxes. It works with `redux-form` or by itself. It can receive an `onChange` function to catch the value of the `Check`.

You can also set a label using the `label` property, and even put a floating text on the right, using `right`.

To disable the checkbox, use the boolean property `disabled`.

It can receive an `id`, a `className` or a `style` object. The `id` will be returned with the value in the `onChange` event.

Here are some examples:
```jsx
import { Check } from '@occmundial/occ-atomic';

// In your component
<Check id="check1" />
<Check id="check2" label="Check with label" disabled />
<Check id="check3" label="Label" right="Text on the right" />
<Check id="check4" value={true} onChange={(value, id) => {console.log(value, id);}} />
```

## Icon
The `Icon` component receives an `iconName` property. With this property it can apply the default values for `width`, `height` and `display` of the icon in the [Icons](./Subatomic.md#icons) library, and the `icon` itself. You can user the properties `width`, `height` and `display` if you don't want to use the default values. You can also use the property `colors` to send an array of colors and ignore the default ones.

Here's an example:
```jsx
import { Icon } from '@occmundial/occ-atomic';

// In your component
<Icon iconName="search" width={12} height={12} display="block" colors={['#242424']} />
```

## Label
The `label` component has currently just one theme, but there will be more themes available soon, and to set it you can use the property `theme` with the name of the theme you want to use.

It can receive two functions, `oClick` and `onClose`. The `onClick` function will be called when the user clicks in any part of the label, except when there's an `onClose` function, which will show an 'x' icon on the right side of the label (which means the `onClick` functions is not called clicking in the right side). You will usually bind a function that deletes the label from your DOM in the `onClose` function.

Here's an example:
```jsx
import { Label } from '@occmundial/occ-atomic';

// In your component
<Label theme="default" onClick={/* Execute a function on click*/} onClose={/* Execute a function when clicking the 'x' icon */}>
  Label text
</Label>
```

## OrderBy
Show this component before or after your content list. It will display a `select` with the options that you send to it in the property `options`, which is an array of objects. Each object should contain the `text` and `value` properties.
The `OrderBy` also has the `text` and `value` properties. You can display a label at the left with the property `text`, and set a default value with the `value` property.

Here's how to use it:
```jsx
import { OrderBy } from '@occmundial/occ-atomic';

const options = [
  {
    text: 'Option 1',
    value: '1'
  },
  {
    text: 'Option 2',
    value: '2'
  }
];

// In your component
<OrderBy options={options} text="Order:" value='2' />
```

## RangeCounter
Use this component to display the range of a total set of items that you're currently rendering. Send a numeric value to `min` and `max` to define the range, the same goes for `total`. If you want to change the separator symbol between `min` and `max` send a string in the property `symbol`. The `type` property displays what type of elements are we counting. The `of` property is the connection between the `min` - `max` and the `total`. `RangeCounter` will add commas to your number values.

Example:
```jsx
import { RangeCounter } from '@occmundial/occ-atomic';

// In your component
<RangeCounter min={1} symbol=" - " max={25} of="of" total={10000} type="elements />
```

## Title
This component will render a heading tag with its corresponding styles. It just needs to receive the property `h` with a numeric value between 1 and 6.

Here's an example:
```jsx
import { Title } from '@occmundial/occ-atomic';

// In your component
<Title h={1}>This is an H1 tag</Title>
```

## TourTip
You can use this component when you want to highlight a certain content in your site. It will display a text bubble on one side of the content to point to.

To make it work, you have to wrap the TourTip and the content to highlight inside a container with a `position:relative` (to avoid conflict measuring the right position to render the TourTip), specify and `id` for the content to hightlight, and send it to the property `target` of the TourTip too.

Use the property `direction` to specify where to draw the TourTip (`left`, `right`, `up` or `down`) and the property `align` to specify to where should it be aligned (`left`, `center` or `right` if the direction is `up` or `down`. `top`, `center` and `bottom` if the direction is `left` or `right`).

This is an example of how to use it:
```jsx
import { TourTip } from '@occmundial/occ-atomic';

// In your component
<div style={{position:'relative'}}>
  <div id="my-content" style={{width:200, height:200, background:'#000'}} />
  <TourTip target="my-content" direction="right" align="bottom">This is my TourTip</TourTip>
</div>
```

## WindowSize
This is a HOC (Higher order component) that will return the window size (according to the established sizes in [grid](./Subatomic.md#grid)) to your component. Implementation is straightforward, just wrap your component with WindowSize and it will receive a `size` property with 'xs', 'sm', 'md' or 'lg' as its value.

Here's an example:
```jsx
import { WindowSize } from 'r12common';
import MyComponent from './MyComponent';

export default WindowSize(MyComponent);

// In 'MyComponent'
const { size } = this.props;
console.log(size);
```