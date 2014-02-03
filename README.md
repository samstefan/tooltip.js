# Tooltip.js
---

Tooltip.js is a easy to use tool tip plug-in with CSS3 animations.

Dependency:
  - [jQuery](http://qjuery.com)

## Getting started
---

Add the ‘tooltips.min.js’ to your HTML. If you'd like the default animations all you need to do is include the tooltip.min.css file in your HTML too.

First add 'data-tooltip-content' attribute to the element with the content you want the tool tip to display.

**Code:**

```
<a href="#" data-tooltip-content="This is a tooltip.">Tooltip Button</a>
```

Then call the Tooltips.js plug-in on the element

```
$('.demo').tooltip({ position: 'left' })
````

## Options
---

Listed below are all of the options available to customize Tooltip.js

```
position: 'top' // You can set the alignment to bottom, left or right.
type: 'hover' // The tool tip can be trigger on hover or the focus focus event.
offsetTop: 0 // Offset the position from the top.
offsetLeft: 0 // Offset the position from the left.
```

Fore More domes and options visits the [website](http://forge.synthmedia.co.uk/tooltips).

## Release History
---

* v1.0.0 Initial release.
