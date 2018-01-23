[Back to exercise index](https://github.com/aperto-frontend/angular-workshop#angular-workshop)

# Exercise 4: Child Components

This branch has been achieved by performing the following steps:

## Step A

Create a Bookmarks component's child named `bookmark-item` using the CLI. Executed the CLI command in the project root directory

```
ng g component components/bookmarks/bookmark-item
```

Move the inner html of `bookmark.component.html` to the child’s html template `bookmark-item.component.html`

```html
<li class="bookmark-item">
  <a href="{{bookmark.url}}">{{bookmark.title || bookmark.url}}</a>
</li>
```

Invoke the child in the parent template

```html
<ul class="bookmarks__list">
  <app-bookmark-item *ngFor="let bookmark of bookmarks" [bookmark]="bookmark"></app-bookmark-item>
</ul>
```

Add the @Input property in the child class to pass a bookmark

```javascript
export class BookmarkItemComponent {
  @Input() bookmark;

  constructor() { }
}
```

## Step B

Add an error message to `bookmark-item.component.html` if the URL of a bookmark is missing, show the URL if the title is missing

```html
<li class="bookmark-item">
  <a target="_blank" rel="noopener" href="{{bookmark.url}}" *ngIf="bookmark.url">{{bookmark.title || bookmark.url}}</a>
  <span *ngIf="!bookmark.url && bookmark.title">{{bookmark.title}} <span class="bookmarks__error">(Missing url)</span></span>
</li>
```

## Documentation
* https://angular.io/guide/component-interaction 
