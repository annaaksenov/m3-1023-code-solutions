# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  They are functions that have access to the request obj, the response obj. and the next middleware funct.
- What is Express middleware useful for?
  It is useful for executing code, make changes to the request/response obj, end the request-response cycle, and call the next middleware funt in the stack.
- How do you mount a middleware with an Express application?
  You mount a middleware by setting a path to route where you want to mount the middleware to.
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  Request, response, and next middelware function.

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
