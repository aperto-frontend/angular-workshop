[Back to exercise index](https://github.com/aperto-frontend/angular-workshop#angular-workshop)

# Exercise 5: Event Binding

This branch has been achieved by performing the following steps:

## Step A

Create a delete button in the `bookmark-item.component.html` with an event binding to a ‚click‘ event calls a function onDelete()
 
```html
<li class="bookmark-item">
  <button (click)="onDelete($event)" class="bookmark-item__button">delete</button>
  
  <a target="_blank" rel="noopener" href="{{bookmark.url}}" *ngIf="bookmark.url">{{bookmark.title || bookmark.url}}</a>
  <span *ngIf="!bookmark.url && bookmark.title">{{bookmark.title}} <span class="bookmark-item__error">(Missing url)</span></span>
</li>
```

Implement the `onDelete` function in the class body of `bookmark-item.component.ts`

```javascript
export class BookmarkItemComponent {
  @Input() bookmark;

  constructor() { }

  onDelete(event: any) {
    console.log('event', event);
  }
}
```

Define a `@Output()` property in the class `bookmark-item.component.ts`.  Attach an `EventEmitter` to the output that emitts an event towards a handler on each click. Pass the id of the bookmark instance into the emitted event

```javascript
export class BookmarkItemComponent {

  @Input() bookmark;

  @Output() deleteRequest: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onDelete(event: any) {
    this.deleteRequest.emit(this.bookmark.id);
  }
}
```

Add the event handler `(deleteRequest)="delete($event)"` that will receive the emitted event in the parent component `bookmarks.component.html`

```html
<ul class="bookmarks__list">
  <app-bookmark-item *ngFor="let bookmark of bookmarks"
                     [bookmark]="bookmark"
                     (deleteRequest)="delete($event)">
  </app-bookmark-item>
</ul>
```

And finally write the `delete` function for the delete in `bookmarks.component.ts`

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

  constructor() { }

  delete(id: number) {
    const bookmarks = this.bookmarks.filter((bookmark) => {
      return bookmark.id !== id;
    });

    this.bookmarks = [...bookmarks];
  }
}
```

The function filters all bookmarks by comparing the ids. It creates a new array containing all bookmarks without the one that was passed in.
