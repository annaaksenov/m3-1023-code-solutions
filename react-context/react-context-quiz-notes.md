# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
Context lets a parent component provide data to the entire tree below without the need of props.
- What values can be stored in context?
Default values can be the only values stored in context.
- How do you create context and make it available to the components?
Create and export `createContext`. Call it outside any components. Specify the default value when creating the contexts.
- How do you access the context values?
Call `useContext` at the top level of your component to read and subscribe to context.
- When would you use context? (in addition to the best answer: "rarely")
Theming: If your app lets user change its appearance e.g. dark/light mode, Current account: Current logged in user, Routhing: To hold current  route. This is how every link knows whether it is active or not, and Managing State: Many distant components below may want to change state that was stated higher up.

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
