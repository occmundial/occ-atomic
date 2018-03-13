# Molecules
Here's the documentation on how to implement each of the Molecule components:

- [Input](#input)
- [Droplist](#droplist)
- [Autocomplete](#autocomplete)
- [SubHeader](#sub-header)
- [LayerApp](#layer-app)

## Input
The ` Input` component is a powerful tool to use with `redux-form` or without it.
The input contains multiple states:
- **Default**: The input has no value and has not been focused. Color: grey.
- **Focus**: The input has been focused. Color: blue.
- **Complete**: The input has a value. Color: black.
- **Error**: The input has been blurred and its value is invalid. Color: red.
- **Correct**: The input has been blurred and its value is valid. Color: green.
- **Disabled**: The input has been disabled by props. Color: grey.

You can set a name, className, id and style object if you need to.

Here are some other properties:

| Property     | Type     | Options                                           | Default | Description                                                                                                                                          |
| -------------| -------- | ------------------------------------------------- | ------- | -----------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`       | string   | text, email, password, date, number, search, file | text    | This property defines the type of input to use. The textarea type is on the process, see #1.                                                         |
| `label`      | string   |                                                   |         | The label to show on the top of the input.                                                                                                           |
| `placeholder`| string   |                                                   |         | The placeholder of the input. If you define a placeholder but not a label, the placeholder will behave as both, doing an animation on focus and blur.|
| `maxLength`  | number   |                                                   |         | Maximum number of characters for the input field.                                                                                                    |
| counter      | boolean  | true - false                                      | false   | A counter will be shown on the right with the number of remaining characters according to the `maxLength` property.                                  |
| disabled     | boolean  | true - false                                      | false   | It will return a component that looks like the input, but can't do anything.                                                                         |
| autoFocus    | boolean  | true - false                                      | false   | Set this property to the first input of your form to focus it automatically.                                                                         |
| clear        | boolean  | true - false                                      | false   | You can set this property to show an 'x' icon on the right that will delete the input value when clicked.                                            |
| onFocus      | function |                                                   |         | This function will be called when the input is focused.                                                                                              |
| onChange     | function |                                                   |         | This function will be called when the value of the input changes.                                                                                    |
| onBlur       | function |                                                   |         | This function will be called when the input is blurred.                                                                                              |

Here's an example of how to implement it:
```jsx
import { Input } from 'r12-common';
import { Field } from 'redux-form';

// In your component
<Input type="email" label="Email" placeholder="example@mail.com" maxLength={60} counter />

// With redux-form
<Field component={Input} name="Name" placeholder="Name" />
```

## Droplist
The `Droplist` component is a list designed to be used as a dropdown, feeded with an array of objects and filtered with a string.

To construct each item of the list, the objects in the array need at least an item with a string. You can name your key as you want (preferably `text`). You can also use another item to show another text at the right of your item (preferably `textRight`). If your `text` is not unique, you will need to include another item to use as an id (preferably `id`).

If you already have an array with objects and don't want to change the keys' names to the default ones for `Droplist` (`text`, `textRight` and `id`), you can set the properties `itemTextKey`, `itemTextRightKey` and `itemIdKey` with the name of the keys in your objects.

The implementation would be:
```jsx
import { Droplist } from 'r12-common';

// Your object
const items = [
  {
    name: "Item 1",
    number: "(55)",
    key: "1"
  },
  {
    name: "Item 2",
    number: "(62)",
    key: "2"
  }
];

// In your component
<Droplist items={items} itemTextKey="name" itemTextRightKey="number" itemIdKey="key" />
```

If you want to filter the list and just show the item with the name `Item 1` you can send a property named `term` and, for example, the value `1`. This will show just the matching items, and show in bold the string searched in each item.

### Groups
You can also send an array of groups, beeing each group an array of items like the ones mentioned above.

To do this you will need to send the boolean property `groups`. Each group needs an item with a string, that will be used as its name. This name will be shown as a label above the items. It also needs an item to use as an id, and of course, an item containing an object with the items to list.

These items by default should be named `group`, `id` and `items`, but you can name them however you want and send the properties `groupNameKey`, `groupIdKey` and `groupItemsKey` with its keys.

The implementation would be:
```jsx
import { Droplist } from 'r12-common';

// Your object
const groups = [
  {
    label: 'Group 1',
    id: `1`,
    objects: [
      {
        name: "Item 1",
        number: "(55)",
        key: "1"
      },
      {
        name: "Item 2",
        number: "(62)",
        key: "2"
      }
    ]
  },
  {
    label: 'Group 2',
    id: `2`,
    objects: [
      {
        name: "Item 3",
        number: "(125)",
        key: "3"
      }
    ]
  }
];

// In your component
<Droplist items={items} groups groupNameKey="label" groupIdKey="id" groupItemsKey="objects" itemTextKey="name" itemTextRightKey="number" itemIdKey="key" />
```

## Autocomplete
`Autocomplete` is an implementation of `Input`, `Droplist` and [`Label`](./Elements.md#label) working together.

The `Input` component returns a value that is then sended to `Droplist` to search in its items. You can choose between pulling then the value of `Droplist` to `Input` or to stack the selected items of `Droplist` into labels, which in that case will be returning an array of items.

You can send almost all the props available for `Input` (`type`, `name`, `label`, `placeholder`, `onFocus`, `onChange`, `onBlur`) and for `Droplist` (`items`, `groups`, `groupNameKey`, `groupIdKey`, `groupItemsKey`, `itemTextKey`, `itemTextRightKey`, `itemIdKey`, `onClick`).

The default behavior would be: Write some text in the `Input`, then click an item of the list in `Droplist`. This will automatically fill the `Input` with the `itemTextKey` value of the item, which you will be able to catch sending an `onChange` function.

If you don't want this behavior but instead stack the selected items into labels, send the boolean property `stackLabels`. All the selected items will be stacked right after the `Input` component. If you want to specify a limit of how many labels you can stack send the numeric property `limit`, and optionally the property `limitPlaceholder`, a text to show in the `Input` when the limit has been reached.

Here are three examples of how to implement `Autocomplete`:

#### Returning the Input value
```jsx
import { Autocomplete } from 'r12-common';

// Your array
const items = [
  {
    text: 'Item 1'
  },
  {
    text: 'Item 2'
  },
  {
    text: 'Item 3'
  }
];

// In your component
<Autocomplete label="Label" placeholder="Placeholder" items={items} itemTextKey="text" itemIdKey="text" onChange={(value) => {console.log(value)}} />

// Expected output after clicking item 1
>> 'Item 1'
```
#### Returning the Item of Droplist
```jsx
import { Autocomplete } from 'r12-common';

// Your array
const items = [
  {
    text: 'Item 1',
    value: 123456
  },
  {
    text: 'Item 2',
    value: 456789
  },
  {
    text: 'Item 3'
    value: 0
  }
];

// In your component
<Autocomplete label="Label" placeholder="Placeholder" items={items} itemTextKey="text" itemIdKey="text" onClick={(item) => {console.log(item)}} />

// Expected output after clicking item 1
>> { text: 'Item 1', value: 123456 }
```
#### Returning the stacked items
```jsx
import { Autocomplete } from 'r12-common';

// Your array
const items = [
  {
    text: 'Item 1',
    value: 123456
  },
  {
    text: 'Item 2',
    value: 456789
  },
  {
    text: 'Item 3'
    value: 0
  }
];

// In your component
<Autocomplete label="Label" placeholder="Placeholder" items={items} itemTextKey="text" itemIdKey="text" onClick={(items) => {console.log(items)}} stackLabels limit={2} />

// Expected output after clicking item 1 and item 2
>> [{ text: 'Item 1', value: 123456 }, { text: 'Item 2', value: 456789 }]
```

## SubHeader
`SubHeader` is a component to replace your main header when you're on a sub-section of your site, just like in mobile applications. It works pretty simple, you just have to set a theme, `white` or `blue` (its `blue` by default), and send the content you want for your subheader.

The content of the `Subheader` is divided into three sections, `left`, `right` and `center`, usually to show buttons at the left and right and a title at the center, or the title at the left and a button at the right side. To do this you will use the properties `left`, `right` and `center`, where you can send any string or jsx content.

You can also use the boolean property fixed, if you want the Subheader to follow you. Ignore it if you want it to be static.

Here's an example:
```jsx
import { SubHeader, Button } from 'r12-common';

// In your component
<SubHeader theme="white" fixed
  left={
    <a href="#">Cancel</a>
  }
  right={
    <Button>Save</Button>
  }
  center="Title"
/>
```

## LayerApp
`SubHeader` is used when you navigate to a sub-section of your application, but sometimes you just want to show it as content over your site, as a kind of layer, and that's where you're going to use `LayerApp`.

`LayerApp` is in a way very similar to `SubHeader`, in fact is an implementation of it, but it can also receive `children` as content, to be shown below the `SubHeader`.

*NOTE: At the moment you have to set manually in your component if you want to show or hide the LayerApp, but an option is in develop to just send a prop to do the animation for toggling it, instead of doing a lot of implementation in your app.*

Here's how to implement it:
```jsx
import { LayerApp, Button } from 'r12-common';
import YourContent from './YourContent';

// In your component
<LayerApp theme="white" fixed
  left={
    <a href="#">Cancel</a>
  }
  right={
    <Button>Save</Button>
  }
  center="Title"
>
  <YourContent />
</LayerApp>
```