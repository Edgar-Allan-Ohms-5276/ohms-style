# React Components

These are some components to for use in react. `main.scss.` or `main.css` must be imported on the page.

Other components not part of the React component library can be used as shown in [HTML Components](../html/README.md)

## Button

```jsx
<Button variant="primary" large={false} onClick={() => doAThing()}>Click Me!</Button>
```

## LinkButton

```jsx
<LinkButton variant="primary" large={false} href="http://example.com">Click Me!</LinkButton>
```

## Checkbox
```jsx
<Checkbox placeholder="Check me!" checked={false} onClick={(e) => doAThing(e.target.checked)} />
```

## Select
```jsx
<Select placeholder="Select Me" value={v} onChange={(e) => doAThing(e.target.value)}>
    <option value="ITEM1">Item 1</option>
    <option value="ITEM2">Item 2</option>
    <option value="ITEM3">Item 3</option>
</Select>
```

## Text Field
```jsx
<TextField light={false} placeholder="Type in me!" value={v} onChange={(e) => doAThing(e.target.value)} />
```