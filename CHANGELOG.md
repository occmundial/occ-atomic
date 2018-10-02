# Changelog

All notable changes to this project will be documented in this file.

# Version 1

## 1.0.x

### 1.0.0
- New TextField component. This component will replace the old `Input` component. In following versions will be deprecated.

# Version 0

## 0.6.x

### 0.6.11
- New icons: highlight, viewed and postulated.
### 0.6.10
- The `Droplist` items now stop the propagation of the click event, to avoid weird behavior with items behind the `Droplist`.
- New `inputClassName` prop in the `Input` component. This className will be applied to the input tag.
- Fix in propTypes of the Input's wrapper.

### 0.6.9
- New `rel` prop in the `Button` component. If the `Button` component is set as a link (using the `href` prop) it will be able to receive the `rel` attribute.

### 0.6.8
- Fixes in the `Input` component. It solves problems with the theming of the `Input` since version **0.5.0**. 

### 0.6.7
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- Changes in how the references to the `Input` in `Autocomplete` are handled.

### 0.6.6
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- The `Input` component is wrapped inside another component that handles the theme and provides the desired stylesheet.
- To validate an `Input` with `redux-form` the input has to be touched first.
- Fix in the `onKeyUp` function in `Autocomplete`.

### 0.6.5
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- `Autocomplete` now just checks the cleaned items (result of the array of items being filtered by the `term`) instead of the whole array, to decide if the `Droplist` should be visible or not.

### 0.6.4
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- The `Droplist` in `Autocomplete` is now not visible if the array of items is empty.

### 0.6.3
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- New `forceValue` function in `Autocomplete` to change the value through a ref.

### 0.6.2
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- The `Input` value in `Autocomplete` is cleared if the `selectOnEnter` prop is set and no item is found in the `Droplist`.

### 0.6.1
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- The `onKeyUp` function in `Input` now just sends the pressed key and not the value.

### 0.6.0
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- Eslint fixes.
- New `onKeyUp` function for the `Input` component.
- New `filter` prop in `Droplist`. Set to false to avoid the `term` prop to filter the list.
- New `onKeyUp` function and `selectOnEnter` prop for the `Autocomplete` component. If the user presses the Enter key the `Autocomplete` will select the first item of the `Droplist`.

## 0.5.x

### 0.5.4
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- New `onClear` function in `Autocomplete`.

### 0.5.3
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- Fixes in styles of the `clear` icon in the `Input` component when the theme is `flat`.

### 0.5.2
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- Fixes in propTypes of `Autocomplete`.

### 0.5.1
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- Changes in the documentation to show the `shape` propTypes.
- Changes in the `Autocomplete` propTypes.

### 0.5.0
*This version has problems with the Input and Autocomplete components. We recommend not using it.*
- Implementation of new theme in the `Input` and `Autocomplete` components.

## 0.4.x

### 0.4.9
- New bell icon.

### 0.4.8
- The `Button` content has now no pointer events.

### 0.4.7
- New occMini icon.

### 0.4.6
- Remove the event listener for resize in `WindowSize` hoc when unmounted.

### 0.4.5
- New occ icon.

### 0.4.4
- New clock icon.

### 0.4.3
- Fix in `Button` component. JSS had problems reaching nested rules, so the rule was replaced for a tag.
- Updated the version of `react-jss` to `8.6.0`.

### 0.4.2
- Changes in the appstore and playstore icons.

### 0.4.1
- New star and starEmpty icons.

### 0.4.0
- New white theme for the `Button` component.

## 0.3.x

### 0.3.7
- Changes in appstore icon.

### 0.3.6
- New appstore and playstore icons.

### 0.3.5
- Fix in `href` property of the `Button` component.

### 0.3.4
- New eye icon.
- Changes in check and occatomic icons.

### 0.3.3
- Adjustments in the documentation site.

### 0.3.2
- Adjustments in documentation and examples.

### 0.3.1
- Adjustments in documentation and examples.
- Changes in webpack to build the documentation.
- Storybook deleted.
- Configuration to work with GitHub pages.

### 0.3.0
- Changes in documentation, examples and project name.

## 0.2.x

### 0.2.2
- Changes in styles of `Footer` component.

### 0.2.1
- Link fixes.

### 0.2.0
- First version upgrade since initial development.