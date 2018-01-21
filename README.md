[Back to exercise index](https://github.com/aperto-frontend/angular-workshop#angular-workshop)

# Exercise 2: Components

This branch has been achieved by performing the following steps:

## Step A

In the root of the project run 

```
ng g component bookmarks
```

what creates a Bookmarks component consisting of

```
src
└── app
    └── components
        └── bookmarks
            └── bookmarks
                └── bookmarks.component.html (Template)
                └── bookmarks.component.scss (Style)
                └── bookmarks.component.spec.ts (Test)
                └── bookmarks.component.ts (Component logic)
```

Add a unordered list of links to bookmarks.component.html

```html
<div class="bookmarks">
  <h1>Bookmarks</h1>
  <ul class="bookmarks__list">
    <li>
      <a href="#">Title One</a>
    </li>
    <li>
      <a href="#">Title Two</a>
    </li>
    <li>
      <a href="#">Title Three</a>
    </li>
  </ul>
</div>

```

Invoke the bookmark component in the app.component (the root component)

```html
<app-bookmarks></app-bookmarks>
```

## Step B

Add global styles in `styles.scss` (located in the src folder)

```scss
body {
  font-family: Helvetica, Arial, sans-serif;
}
```

Add local component styles in `bookmarks.component.scss`

```scss
:host {
  display: flex;
  align-items: center;
  justify-content: center;
}
```
