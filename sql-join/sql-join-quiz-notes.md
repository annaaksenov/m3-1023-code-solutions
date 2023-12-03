# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  A specific value in a column that links tables together. A foreign key points to a primary key in another table.
- How do you join two SQL tables? (Provide at least two syntaxes.)
  Using the `join` clause. `select * from "table" join "anotherTable" using ("foreign key");` OR for a one-to-many relationship `select "table"."name" as "tableColumn", "secondTable"."name" as "tableColumn" from "table" join "anotherTable" using ("primary key");`.
- How do you temporarily rename columns or tables in a SQL statement?
  Using the "name" `as` method.
- How do you create a one-to-many relationship between two tables?
  `select * from "table1" join "table2" using ("foreign/primary key");`
- How do you create a many-to-many relationship between two tables?
  `select * from "table1", "table2" join "table3" using ("foreign/primary key");`

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
