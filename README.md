[Back to exercise index](https://github.com/aperto-frontend/angular-workshop#angular-workshop)

# Exercise 7: Data Binding: 2-way

This branch has been achieved by performing the following steps:

## Step A

In order to use 2-way binding on inputs add the Forms Module in app.module.ts 

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- here

import { AppComponent } from './app.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { BookmarkItemComponent } from './components/bookmarks/bookmark-item/bookmark-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    BookmarkItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Step B

Apply 2-way-binding via `[(ngModel)]` to the inputs created in exercise 5 in `bookmark-item.component.html`

```html
<div class="bookmark-item">
  <div class="bookmark-item__content">
    <div class="bookmark-item__button-group">
      <button *ngIf="!editMode" (click)="onEdit($event)" class="bookmark-item__button">edit</button>
      <button *ngIf="editMode" (click)="onEditClose($event)" class="bookmark-item__button is-close">close</button>
  
      <button (click)="onDelete($event)" class="bookmark-item__button">delete</button>
    </div>
    <a target="_blank" rel="noopener" href="{{bookmark.url}}" *ngIf="bookmark.url">{{bookmark.title || bookmark.url}}</a>
    <span *ngIf="!bookmark.url && bookmark.title">{{bookmark.title}} <span class="bookmark-item__error">(Missing url)</span></span>
  </div>
  
  <div *ngIf="editMode" class="bookmark-item__form">
    <div class="bookmark-item__form-group">
      <label class="bookmark-item__label" [attr.for]="'title-' + bookmark.id">Title</label>
  
      <!-- [(ngModel)] here -->
      <input class="bookmark-item__input" type="text" [id]="'title-' + bookmark.id" [(ngModel)]="bookmark.title" />
    </div>
    <div class="bookmark-item__form-group">
      <label class="bookmark-item__label" [attr.for]="'url-' + bookmark.id">URL</label>
  
      <!-- [(ngModel)] and here -->
      <input class="bookmark-item__input" type="text" [id]="'url-' + bookmark.id" [(ngModel)]="bookmark.url" />
    </div>
  </div>
</div>
```

Add a debug output using the JSON pipe in the parent component `bookmarks.component.html`

```html
<pre>{{ bookmarks | json }}</pre>
```

While changing bookmark properties in the item component the changes get automatically noticed in the bookmarks array and displayed by the pipe.

## Optional

Create a IBookmark typescript interface inside the bookmarks folder

```
└── components
    └── bookmarks
        └── bookmark.interface.ts
```

with following content

```javascript
export interface IBookmark {
  id: number;
  title: string;
  url: string;
}

```

and assign all Bookmark variables in `bookmark-item.component.ts` the correct type

```javascript
import { IBookmark } from '../bookmark.interface';
...

export class BookmarkItemComponent {

  @Output() bookmarkChange: EventEmitter<IBookmark> = new EventEmitter<IBookmark>();
  
  ...

```

## Documentation

* https://angular.io/guide/pipes
* https://www.typescriptlang.org/docs/handbook/interfaces.html
* https://angular.io/guide/template-syntax#two-way-binding---
