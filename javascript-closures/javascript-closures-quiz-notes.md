# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
The scope is determined by the decleration of the variable.
- What allows JavaScript functions to "remember" variables from their surroundings?
With a concept called "closures" where a func is defined within another function.
- What values does a closure contain?
The function and the environment (lexical scope). Eviro. consists of the variables that were scope when the closure was created.
- When is a closure created?
When a JS function is defined within another function, and the inner func references variables from its outer func's scope.
- How can you tell if a function will be created with a closure?
If it does one function to be used elsewhere or there is a nested function or a fun is referencing an outer variable.
- In React, what is one important case where you need to know if a closure was created?
When working with event handlers in a loop, such as rendering a list of components.
## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
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
  width: 100%;
}
```
