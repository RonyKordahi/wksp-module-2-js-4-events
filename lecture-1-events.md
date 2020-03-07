# 2.4.1 - JS Events

---

## Situation

Open the door, when someone is there.

<img src='./assets/door.gif' />

---

## Event-driven Programming

<img src='./assets/fig1_event.png' />

---

### Event Types

<img src='./assets/event_types.jpg' />

[Source](https://data-flair.training/blogs/javascript-event-types/)

---

#### User Interface Events

- `load`: when a node is added/loaded
- `unload`: when a node is removed/unloaded
- `error`: error
- `resize`: when the screen is resized
- `scroll`: when the user scrolls

---

#### Focus and Blur Events

These events fire when the HTML elements you can interact with gain/ lose focus.

- `focus`: toggled on/interacted with
- `blur`: toggled off/something else being interacted with
- `focusin` (_new; not supported by Firefox_): same as focus
- `focusout` (_new; same as blur; not supported by Firefox_) : same as blur

---

##### Mouse Events

- `click`: on click
- `dblclick`: on double click
- `mousedown`: when click being held
- `mouseup`: when click is let go
- `mouseover`: when mouse hovers
- `mouseout`: when the mouse leaves an element 
- `mousemove`: when the mouse moves (anytime)

---

##### Keyboard Events

- `input`: when user inputs
- `keydown`: when any key is going down (being pressed)
- `keypress`: when a key is pressed (once)
- `keyup`: when a key is going up (being released)

---

### Form Events

- `submit`: submit field?
- `change`: detects change in a field
- `input`: when an input is triggered

---

### HTML5 Events

- `DOMContentLoaded`: when the content is loaded
- `hashchange`: listents for adding # in the url, takes you to a specific section
- `beforeunload`: before application/website is closed

---

### CSS Events

- `transitionend`: when a CSS transition ends
- `animationstart`: when a CSS animation starts
- `animationend`: when a CSS animation ends

---

### Events and DOM Nodes

All DOM nodes have methods we can use to _notify_ us of an event.

- [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

```js
// Example
//event listeners always go at the end of the code
const button = document.getElementByID("btn");
button.addEvenetListener(:"click", function() {
    console.log("ouch");
});//event listeners take 2 arguments: 1) what we listen for. 2) function
//OR
const button = document.getElementByID("btn");
function handleOuch() {
    console.log("ouch");
}
button.addEventListener("click", handleOuch);
button.removeEventListener("click", handleOuch);
```

---

### [Event Object](https://www.w3schools.com/jsref/obj_event.asp)

Event handler functions are passed an argument, when events are triggered.

This object includes lots of stuff.

- `preventDefault()`
- `target`
- `stopPropagation()`

---
    
### Default Actions

Some events have _default_ actions associated to them.

- click a link
- press down arrow
- click `submit` in a Form

In most cases handlers are called _before_ the default action takes place.

You can prevent the _default_ action from happening by calling `event.preventDefault();` in the eventListener function.

---
    
### target

- The  `target` property refers to the node where they originated. (example)
- With an `input`, use `event.target.value` to read what was entered into an `input`.

---

### Propagation

Handlers registered on nodes with children will also receive events that happen in the children.

```html
<div>
    <ul>
        <li><a href="#"><img scr="..."></a></li>
        ...
    </ul>
</div>
```

---

### 3 Phases of Event Propagation

- The Event Capture Phase
- The Event Target Phase
- The Event Bubbling Phase

**most** events bubble

---

<img src='./assets/propagation_bubbling.png' />

[Source](https://www.sitepoint.com/event-bubbling-javascript/)

---

`<p>A paragraph with a <button id="the-btn">button</button>.</p>`

```js
    
let para = document.querySelector("p");
let button = document.querySelector("button");

para.addEventListener("mousedown", () => {
    console.log("Handler for paragraph.");
});

button.addEventListener("mousedown", event => {
    console.log("Handler for button.");
    if (event.button == 2) event.stopPropagation();
});
```
---

## Events and the Event Loop

Events can only be processed when _nothing_ else is running.

This means that other page processes will be delayed until there is time to process it.

This can occur if you have long-running event handlers, or _lots_ of short-running ones.

---

[Read a little more deeply...](https://eloquentjavascript.net/15_event.html)

---
