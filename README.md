# CSS Animation Scrubber

## Ian Marshall

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

### Live Site

> [https://ianjstutor.github.io/css-animation-scrubber/](https://ianjstutor.github.io/css-animation-scrubber/)

### Description

A web application for testing CSS animations. The end result is auto-generated CSS code that can be used on a website to trigger exactly the animation designed using this tool. The end result is pure CSS and will not need JavaScript.

### How Does It Work?

There are three little tricks that took some time to ferret out.

#### Dynamic CSS injection

It's possible not only to access a style element ()<code>document.head.querySelector("style")</code>) but also to alter its contents as needed using JavaScript. The CSS rendering engine is reengaged when doing this, meaning that the new CSS rules are automatically calculated.

#### Negative <code>animationDelay</code>

This CSS property is not usually associated with negative values. However, it's possible to subtract time from the end state with negative values, effectively enabling the "scrubbing" of a CSS animation: starting at different points in the timeline, going forward or backwards, skipping portions&mdash;all from an HTML slider.

#### Looking up an element's <code>offsetHeight</code> property to reset animation timing

Triggering an animation by using JavaScript to insert a <code>class</code> onto the animating element seems like a good idea. Logically, one should be able to remove the class name and then add it again to restart the animation. However, this doesn't work. The CSS engine will not reengage an animation merely by toggling a class, unfortunately, even with a delay. Strangely, using JavaScript to make a request of the CSS engine *does* reset animation state.

```js
div.classList.remove("animate");
div.offsetHeight;
div.classList.add("animate");
```

Just the lookup of <code>offsetHeight</code> works here, even though we do nothing with the returned value. It forces the CSS engine to recalculate all the state variables associated with the element with one call, including the animation state.
