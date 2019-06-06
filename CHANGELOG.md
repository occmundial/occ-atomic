# Changelog

All notable changes to this project will be documented in this file.

# Version 1

## 1.4.x

### 1.4.4
- New `textOverflow` prop for `Radio` and `Checkbox`.

### 1.4.3
- New icon.

### 1.4.2
- New icons and changes in some icons.

### 1.4.1
- New `NavAside` component.

### 1.4.0-beta.4
- New `iconRight` prop for `Button`.
- New icons.

### 1.4.0-beta.3
- Changes in `NavTab`. It accepts now the `flexCenter`, `fixed`, `hideOnScroll` and `bottom` props.
- New `NavIcon` component.

### 1.4.0-beta.2
- New `SlideToggle` component.
- New `cross` icon.

### 1.4.0-beta.1
- New icons.

### 1.4.0-beta.0
- Developing the `NavTab`, `NavItem` and `NavTop` components.
- Added new icons.
- New `link` theme for `Text` component.

## 1.3.x

### 1.3.12
- Changes in `Modal`. Now `mainBtn` and `secBtn` accept `loading` and `disabled`.

### 1.3.11
- Changes in the names of the keyframes animations to avoid conflicts with other animations.

### 1.3.10
- The `container` property in `Modal` is now optional.

### 1.3.9
- New `Placeholder` component.

### 1.3.8
- Changes in styles of `Card` component.
- The `strong` property can now be applied to `micro` style in `Text` component.

### 1.3.7
- New `disableAutoComplete` prop in `TextField` component.

### 1.3.6
- New `strong` property for the `Text` component.
- The title in `slideDown` has now the `strong` style.

### 1.3.5
- Fix in `Checkbox` and `Button` components.

### 1.3.4
- New `disableAutoComplete` prop in `Input` and `Autocomplete` components.

### 1.3.3
- Fix in PropTypes of `Checkbox`.

### 1.3.2
- Change in PropTypes of `Checkbox`.

### 1.3.1
- New `right` prop in `Checkbox` and `Radio`.

### 1.3.0
- New `Radio` component.

## 1.2.x

### 1.2.4
- Fix in `SlideDown` component.

### 1.2.3
- Fix in styles of `SlideDown`.

### 1.2.2
- Changes in `OrderBy` component.

### 1.2.1
- Changes in `SlideDown` component.

### 1.2.0
- New `Modal` component.
- Changes in the `shadows` levels.
- Changes in `Card` styles.
- Changes in `close` icon.
- Fix in `OrderBy` down arrow icon.

## 1.1.x

### 1.1.23
- Change in the padding of `Pill.Choice`.

### 1.1.22
- Fix in styles of `Pill.Choice`.

### 1.1.21
- Fix in styles of `Pill`.
- New `textLink` color.

### 1.1.20
- Adjustments in Header and SightLogo components.

### 1.1.19
- New `hjWhitelist` prop in `TextField`.

### 1.1.18
- New `textLink` color.
- Removed default value for `maxLength` in `TextField`. Fix in styles of `TextField` to remove shadow of the input element on iOS.

### 1.1.17
- Fix in styles of `Pill.Stack`.
- Fix in styles of `TextField` disabled.

### 1.1.16
- New `mask` and `guide` props in `TextField`. This props will allow you to make the field follow a pattern.

### 1.1.15
- New `Tag` component.
- Changes in `Checkbox` styles.

### 1.1.14
- The `Pill` component can now receive `className`, `id` and `style` props.
- New `moreOptions` icon.

### 1.1.13
- Fixes in the disabled state of `select` and `textarea` `TextField` types.
- Adjustment in the arrow icon of the `select` `TextField` type.

### 1.1.12
- New `Button` themes (`primary`, `secondary`, `tertiary`, `ghostPink`, `ghostGrey`, `ghostWhite`). Older themes have been removed.
- New `medium` spacing value.
- Fixes of status in `TextField`.
- Changes in styles of dropdown in `TextField`.
- Color `secLighter` has changed.

### 1.1.11
- Fix in `TextField` status when changing between focus and disabled.
- Changes in the styles of `Pill` with stacked elements.

### 1.1.10
- Fix in dropdown of `TextField`. The component couldn't show a dropdown with error correctly.

### 1.1.9
- Changes in the `Pill` component. Now it works in three different modes. `group` for a combined bar of buttons with only one option selectable at a time. `stack` for a list of pills that can be clicked and closed. `choice` for a set of buttons with individual state, to select as many as needed.

### 1.1.8
- New `Checkbox` component.

### 1.1.7
- Added a `regex` prop to `TextField`. With this property the component will not change the value if it doesn't match with the regular expression.

### 1.1.6
- New `Pill` component.

### 1.1.5
- Bug fix in `TextField`.

### 1.1.4
- Bug fix in `TextField`.

### 1.1.3
- `TextField` can now be a `select` type. The `options` prop can be simple options or grouped options. Also now it can receive the `required` prop.

### 1.1.2
- New `Grid` component.

### 1.1.1
- New `spacing` library.

### 1.1.0
- New `Text` component.

## 1.0.x

### 1.0.14
- Added `onMouseDown` and `onMouseUp` events to `Droplist`.

### 1.0.13
- The `clear` and `password` icons in `TextField` are now wrapped by a div and not a button to avoid focusing on them with tab.
- Fix in the disabled state of `TextField`. Now it works well with the `lockHeight` prop.

### 1.0.12
- Change in the `counter` of `TextField`. Now it shows the written characters and the max length, instead of the remaining characters.

### 1.0.11
- The clickable area of the `eye` icon in `TextField` is now bigger.
- The sub-string `no-repeat center center` has been removed from the response of the icon function in the icons library.

### 1.0.10
- Implementation of the `inputClassName` prop in the `Input`, `TextField` and `Autocomplete` components.

### 1.0.9
- `Pager` page count now starts from 1 and not from 0.

### 1.0.8
- New `lockHeight` property in `TextField`, to render the component with the same height even if it has no `label` or `assistiveText`.
- Now `assistiveText` can be a string or any jsx node. Links are already styled, but you can send anything you need.

### 1.0.7
- The `Container` component can now receive an `onClick` function.

### 1.0.6
- Changes in styles of `Button` component's main theme.

### 1.0.5
- `Hidden` can now hide the elements using css (passing the `mediaQuery` property) instead of removing them from the DOM.
- WindowSize now passes the `winWidth` property and not just `size`.

### 1.0.4
- Bug fix in className of the `TextField` component.

### 1.0.3
- Bug fix in `TextField`.

### 1.0.2
- The `TextField` component can now get smaller without `label` and `assistiveText`.

### 1.0.1
- Change in `TextField` background color.
### 1.0.0
- New `TextField` component. This component will replace the old `Input` component. In following versions will be deprecated.

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
