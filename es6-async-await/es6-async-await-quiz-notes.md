# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  `async` keyword is used at the start of a function to make it async. The `await` can be used before a call to a function that returns a promise.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Although their similarites are to be more readable, they differ by `.then()` and `.catch()` are chainable while `async` and `await` allows for more controlled structure like if, for and while.
- When do you use `async`?
  When you want to work with asynchronous promise-based code.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use `await` to call a function that returns/expects and promise. Cases when you don't use `await` is in synchronous functions. If you do it would have no impact.
- How do you handle errors with `await`?
  With `.catch()` block.
- What do `try`, `catch` and `throw` do? When do you use them?
  `try` is wrapped around a code where error may be expected and the code will flow as normal and trasnferred to the catch block. `catch` is specified what it should do if an error occurs. `throw` is used when you want to handle exceptional cases and report errors.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  It will continue running in the background. If promise is resolved, the code will proceed. If a error occurs and not caught, it won't trigger the `catch` block.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Callbacks and `then()` because the two seem similar and easy to follow.

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
