# Subatomic
Subatomic is the name given to files that contain values and sometimes functions that in a certain way constitute the Elements and everything else. This helps to maintain the style guide more easily.

These subatomic 'libraries' are:
  
- [Colors](#colors)
- [Fonts](#fonts)
- [Grid](#grid)
- [Shadows](#shadows)
- [Icons](#icons)

`colors`, `fonts`, `grid` and `shadows` are very basic, they're just an object with certain values which you can access from your components like:
```jsx
import { colors } from 'r12-common';

// In your code
let background = colors.white;
```
`icons` is a bit more complex, because any item is an object with multiple properties which will help you construct your icon.

## Colors
Here's the list of all the colors  you can access to:

- pink: <span style="color:#ff456a">#ff456a</span>
- pinkH: <span style="color:#cc1f62">#cc1f62</span>
- pinkA: <span style="color:#b81453">#b81453</span>
- blue: <span style="color:#1476fb">#1476fb</span>
- blueH: <span style="color:#0960d3">#0960d3</span>
- blueA: <span style="color:#0051bb">#0051bb</span>
- darkBlue: <span style="color:#104791">#104791</span>
- darkBlueH: <span style="color:#224099">#224099</span>
- darkerBlue: <span style="color:#0c3c7d">#0c3c7d</span>
- title: <span style="color:#3e5466">#3e5466</span>
- red: <span style="color:#ef2525">#ef2525</span>
- green: <span style="color:#09ba8a">#09ba8a</span>
- cyan: <span style="color:#06f7fa">#06f7fa</span>
- white: <span style="color:#ffffff; background:#666">#ffffff</span>
- white2: <span style="color:#f7f7f7; background:#666">#f7f7f7</span>
- black: <span style="color:#242424">#242424</span>
- black2: <span style="color:#000000">#000000</span>
- grey1: <span style="color:#bfbfbf">#bfbfbf</span>
- grey2: <span style="color:#cdcdcd">#cdcdcd</span>
- grey3: <span style="color:#ebebeb">#ebebeb</span>
- grey4: <span style="color:#b0b0b0">#b0b0b0</span>
- grey5: <span style="color:#e0e0e0">#e0e0e0</span>
- grey6: <span style="color:#a7a7a7">#a7a7a7</span>
- grey7: <span style="color:#727272">#727272</span>
- grey8: <span style="color:#979797">#979797</span>

## Fonts
There are just two options available for fonts:

- body: Open Sans
- title: Nunito Sans

## Grid
Here are the values for the grid system seen in [Layout](./Layout.md).

- xs: 0
- sm: 768
- md: 992
- lg: 1200

## Shadows
There are 6 levels of shadows available, where the lvl3 is the level of shadow for headers and lvl6 is the level for modal windows.

These are the values:

- lvl1: 0 1px 4px rgba(0, 0, 0, 0.05)
- lvl2: 0 1px 8px rgba(0, 0, 0, 0.05)
- lvl3: 0 1px 10px rgba(0, 0, 0, 0.1)
- lvl4: 0 1px 14px rgba(0, 0, 0, 0.1)
- lvl5: 0 1px 18px rgba(0, 0, 0, 0.1)
- lvl6: 0 6px 32px rgba(0, 0, 0, 0.1)

## Icons
The library of icons works in a different way than the others. This library consists of two main things, a function named `base` and a bunch of objects with different properties for the icon.
The `base` function receives an icon (`svg`), then it converts it into `base64` and returns a string with all the properties ready to be used in a css as a background: `url(data:image/svg+xml;base64,${YOUR_ICON}) no-repeat center center`.
The icons are objects containing these properties:

- width
- height
- display
- icon

`width`, `height` and `display` are the default values for the icon, but you don't have to use them if you don't need to, and instead use any value you want.

The `icon` property is a function. It can receive an array of colors (usually is just one color) as an argument. If you don't send any array it will use a default one. Then returns an `svg` using the colors of the array.

So here's an example of how to use the `search` icon:
```jsx
import { icons } from 'r12-common';

// In your code
const iconStyles = {
  width: icons.search.width,
  height: icons.search.height,
  display: icons.search.display,
  background: icons.base(icons.search.icon(['#242424']))
}
```

In the example above, the background is made using the function `base` to return the icon as `base64`. Inside that function you send the `icon` function, and the array of colors if you need to, which will return the `svg` of the `search` icon.