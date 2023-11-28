# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
A component is mounted when it is rendered.
- What is a React Effect?
An escape hatch from the react paradigm.
- When should you use an Effect and when should you not use an Effect?
Shoud use an effect if you need to syncronize your components with some external system like network or the browser DOM. Not needed when no external systems are involved.
- When do Effects run?
They run by the specified dependencies. Either every render or when a specified component needs to be updated.
- What function is used to declare an Effect?
`useEffect()`.
- What are Effect dependencies and how do you declare them?
Dependencies are a list of all reactive values. Includes props, state, and all the variables and functions decalred directly inside your component body.
- Why would you want to clean up from an Effect?
Cleaning up from an effect is good practice because it prevents memory leaks or unexpected behaviors.
- How do you clean up from an Effect?
Either by clearing intervals/timeouts, cleaning up event listeners, or canceling network requests.
- When does the cleanup function run?
Clean up functions run when specified at the end of the useEffect functions.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
