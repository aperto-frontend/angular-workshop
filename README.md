[Back to exercise index](https://github.com/aperto-frontend/angular-workshop#angular-workshop)

# Exercise 8: Template Reference 

This branch has been achieved by performing the following steps:

## Step A

Create a `newMode` variable and add two functions for setting `newMode` true/false in the `bookmarks.component.ts`

```javascript
export class BookmarksComponent implements OnInit {
  newMode = false;
  
  onNew() {
    this.newMode = true;
  }

  onNewClose() {
    this.newMode = false;
  }
  
```

Create the form for creating new bookmarks in `bookmarks.component.html` that invokes a `create` function when submitted

```html
<div class="bookmarks">
  <h1 class="bookmarks__headline">Bookmarks</h1>
  <div class="bookmarks__list">
    <app-bookmark-item *ngFor="let bookmark of bookmarks; let i = index;"
                       [bookmark]="bookmark"
                       (deleteRequest)="delete($event)"
                       (bookmarkChange)="bookmarkChange(i, $event)"
    >
    </app-bookmark-item>
    <div class="bookmarks__button-group">
      <button *ngIf="!newMode" (click)="onNew($event)" class="bookmarks__button">new</button>
      <button *ngIf="newMode" (click)="onNewClose($event)" class="bookmarks__button">close</button>
    </div>
  
    <form (submit)="create(titleInput.value, urlInput.value)" action="#" method="get" *ngIf="newMode" class="bookmarks__form">
      <div class="bookmarks__form-group">
        <label class="bookmarks__label" for="title-new">Title</label>
        <input #titleInput class="bookmarks__input" type="text" id="title-new" />
      </div>
      <div class="bookmarks__form-group">
        <label class="bookmarks__label" for="url-new">URL</label>
        <input #urlInput class="bookmarks__input" type="text" id="url-new" />
      </div>
      <div class="bookmarks__form-group">
        <button type="submit" class="bookmarks__button is-form-group">create</button>
      </div>
    </form>
  </div>
</div>
```

## Step B

Implement the `create` function body in the `bookmarks.component.ts` that receives the `title` and `url` in the function arguments from the event

```javascript
export class BookmarksComponent {

  bookmarks = [
    {
      id: 1,
      title: 'Tour of Heroes',
      url: 'https://angular.io/tutorial'
    },
    {
      id: 2,
      title: 'CLI Documentation',
      url: 'https://github.com/angular/angular-cli/wiki'
    },
    {
      id: 3,
      url: 'https://blog.angular.io'
    },
    {
      id: 4,
      title: 'Angular Home'
    }
  ];

  newMode = false;

  constructor() { }

  delete(id: number) {
    const bookmarks = this.bookmarks.filter((bookmark) => {
      return bookmark.id !== id;
    });

    this.bookmarks = [...bookmarks];
  }

  onNew() {
    this.newMode = true;
  }

  onNewClose() {
    this.newMode = false;
  }

  create(title: string, url: string) {
    event.preventDefault();

    const createdBookmark: IBookmark = {
      id: this.bookmarks.length + 1,
      title: title,
      url: url
    };

    this.newMode = false;

    this.bookmarks = [...this.bookmarks, createdBookmark];
  }
}
```

The create function creates a new object with an incremented id and the received title and url. It extends the bookmarks using the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) by this newly created object. It then sets newMode to false what causes the form to be removed from the DOM.

## Documentation

* https://angular.io/guide/template-syntax#template-reference-variables--var-