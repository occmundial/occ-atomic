# Layout
OCC-Atomic contains multiple layout components. They offer three ways to construct layout:

- [Grid](#grid)
- [Display](#display)
- [Flex](#flex)

## Grid
These components are based on the grid of bootstrap. The usage is pretty simple, and it works exactly the same as it does in bootstrap.

Just import the components: Container, Row and Column. All of them can receive the props className, id and style, if you need it.

### Container
Implement a `Container` using:
```jsx
import { Container } from '@occmundial/occ-atomic';

// In your component
<Container>
  // Your container's content
</Container>
```
You can use the boolean prop `fluid` to allow the container to extend and use the whole width.

*NOTE: As in bootstrap, keep in mind that you can't never use a container inside of another container, unless you're nesting fluid containers.*

### Row
Implementing rows is just as easy as containers, import and insert your `Row` inside a `Container` or a `Column`:
```jsx
import { Container, Row } from '@occmundial/occ-atomic';

// In your component
<Container>
  <Row>
    // Your row's content
  </Row>
</Container>
```

### Column
The columns are the components that make the grid work. To use them, you have to send them an object per each size that you want to cover with them. For example: `xs={{col:12}}` or `md={{col:6, offset:3}}`.

As you can see, you can use the same features as bootstrap. So the sizes available are:

- xs (Extra small)
- sm (Small)
- md (Medium)
- lg (Large)

And each of these sizes can receive a value for `col`, `offset`, `push` and `pull`.

So the usage of the whole grid works like this:
```jsx
import { Container, Row, Column } from '@occmundial/occ-atomic';

// In your component
<Container>
  <Row>
    <Column xs={{col:12}} sm={{col:6, offset:3}}>
      // Your column's content
    </Column>
  </Row>
</Container>

// Nesting grids
<Container>
  <Row>
    <Column xs={{col:12}} sm={{col:9}}>
      // The nested grid
      <Row>
        <Column xs={{col:12}} sm={{col:6}}>
          // Your column's content
        </Column>
        <Column xs={{col:6}} sm={{col:3}}>
          // Your column's content
        </Column>
        <Column xs={{col:6}} sm={{col:3}}>
          // Your column's content
        </Column>
      </Row>
    </Column>
    <Column xs={{col:12}} sm={{col:3}}>
      // Your column's content
    </Column>
  </Row>
</Container>
```
## Display
The display components are very simple. They are in a way very similar to the bootstrap classes to hide or make visible an element. Just like in the grid, these components can receive the sizes in which they're going to work, but in this case the sizes are booleans.

### Visible & Hidden
The display components are `Visible` and `Hidden`, and just like their names suggest, they display or hide its content in the stablished sizes.

This is the way to use theme:
```jsx
import { Visible, Hidden } from '@occmundial/occ-atomic';

// In your component
<Visible xs>
  // This content will be visible in extra small sizes
</Visible>
<Hidden md lg>
  // This content will be hidden in medium and large sizes
</Hidden>
```

## Flex
Flex is the most complex and powerful grid system. To learn how to use it, you can check the guide in [CSS-TRICKS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

First of all, you have to set the `display` property, which can receive the values `flex`
or `inline-flex`. You can also ignore this property if your `Flexbox` is just a child of another `Flexbox` component and you want to set child properties.

If your `Flexbox` component is going to be used as a flexbox container, the properties you're going to use are:

- direction
  - row
  - rowR
  - col
  - colR
- wrap
  - wrap
  - noWrap
  - wrapR
- justifyContent
  - start
  - end
  - center
  - between
  - around
  - evenly
- alignItems
  - start
  - end
  - center
  - base
  - stretch
- alignContent
  - start
  - end
  - center
  - between
  - around
  - stretch

If your `Flexbox` component is going to be used as a flexbox child, the properties you're going to use are:

- order
  - {any number}
- flex
  - {a string defining flex-grow, flex-shrink and flex-basis}
- alignSelf
  - auto
  - start
  - end
  - center
  - base
  - stretch

Here's an example:
```jsx
import { Flexbox } from 'r2-common';

// In your component

// The Flexbox container
<Flexbox display="flex" direction="row" wrap="noWrap" justifyContent="center" alignItems="center" alignContent="start">
  // The Flexbox child
  <Flexbox order={3} flex="1 0 150px" alignSelf="end">
    // Content of your flexbox child
  </Flexbox>
  // a div with no flex features
  <div>
    // Content of your div
  </div>
  // Another Flexbox child
  <Flexbox alignSelf="stretch">
    // Content of your flexbox child
  </Flexbox>
</Flexbox>
```