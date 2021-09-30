# HTML Components

These are examples of how to use the styles with components. Remember that  [main.scss](../scss/main.scss) must be imported on the page.

## Button
```html
<button class="button-secondary">Small secondary button</button>

<button class="button-primary button-large">Large primary button</button>
```

## Text Box
```html
<div class="input-effect">
    <input type="text" class="text-input" />
    <label>Text box</label>
    <span class="focus-border"><i></i></span>
</div>
```

## Checkbox
```html
<div class="checkbox-effect">
    <label class="checkbox-label">
        Checkbox
        <input type="checkbox" />
        <span class="checkmark"></span>
    </label>
</div>
```

## Select
```html
<div class="select-effect">
    <select class="select">
        <option value="" selected="" disabled="">Select an item</option>
        <option value="1">Item 1</option>
        <option value="2">Item 2</option>
    </select>
    <label>Select</label>
</div>
```

## Notifications
```html
<div class="warning">This is a warning/alert message.</div>

<div class="error">This is an error message.</div>
```

## Container
```html
<div class="container">Elements within this div will have margins on the left and right, adjusted with viewport size to be mobile friendly.</div>
```

## Card
```html
<div class="card">This div will have a border and shadow.</div>
```

## Spread
```html
<div class="spread">Items within this div will be laid out horizontally on desktop and vertically on mobile.</div>
```