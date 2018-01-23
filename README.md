[Back to exercise index](https://github.com/aperto-frontend/angular-workshop#angular-workshop)

# Exercise 9: Services and Dependency Injection

This branch has been achieved by performing the following steps:

## Step A

Use ng generate command to create the Bookmarks service 

```
ng g service services/bookmarks
```

This should create a services folder and the bookmark service

```
src
└── app
    └── services
        └── bookmarks.service.ts
        └── bookmarks.service.spec.ts
```

Register the service in the `app.module.ts` as a provider

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { BookmarkItemComponent } from './components/bookmarks/bookmark-item/bookmark-item.component';
import { BookmarksService } from './services/bookmarks.service'; // <-- here

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    BookmarkItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BookmarksService], // <-- here
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Step B

Inject the service into the `bokmarks.component.ts`

```javascript
import { Component, OnInit} from '@angular/core';
import { BookmarksService } from '../../services/bookmarks.service'; // <-- here

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  constructor(private bookmarksService: BookmarksService) { } // <-- here
```

Use the `ngOnInit` lifecycle hook and invoke the service

```javascript
export class BookmarksComponent implements OnInit {

  bookmarks: [];

  newMode = false;

  constructor(private bookmarksService: BookmarksService) { }

  ngOnInit() {
    this.bookmarks = this.bookmarksService.get();
  }
```

Move the mocked data model from the mock-file to the service

```javascript
import { Injectable } from '@angular/core';

@Injectable()
export class BookmarksService {

  constructor() { }

  get() {
    return [
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
  }
}
```

## Optional

Move all CRUD methods to the service and remove all dummy data. The `bookmarks.service.ts` service now contains 4 CRUD methods

```javascript
import { Injectable } from '@angular/core';
import { IBookmark, IBookmarkData } from '../components/bookmarks/bookmark.interface';

@Injectable()
export class BookmarksService {

  constructor() { }

  create(bookmarkData: IBookmarkData): IBookmark[] {
    let bookmarks = this.get();

    const newBookmark: IBookmark = {
      id: bookmarks.length + 1,
      title: bookmarkData.title,
      url: bookmarkData.url
    };

    bookmarks = [...bookmarks, newBookmark];

    return this.save(bookmarks);
  }

  update(index: number, bookmark: IBookmark): IBookmark[] {
    let bookmarks = this.get();

    if (bookmarks && bookmarks.length && bookmarks[index]) {
      const updatedBookmarks = [...bookmarks];
      updatedBookmarks[index] = bookmark;

      bookmarks = updatedBookmarks;
    }

    return this.save(bookmarks);
  }

  delete(id: number): IBookmark[] {
    let bookmarks = this.get();

    bookmarks = bookmarks.filter((bookmark) => {
      return bookmark.id !== id;
    });

    // remap id's
    bookmarks = bookmarks.map((bookmark, index) => {
      bookmark.id = index + 1;
      return bookmark;
    });

    return this.save(bookmarks);
  }

  get(): IBookmark[] {
    const bookmarksJson = localStorage.getItem('bookmarks');
    let bookmarks = [];

    if (bookmarksJson) {
      bookmarks = JSON.parse(bookmarksJson);
    }

    return bookmarks;
  }

  save(bookmarks: IBookmark[] = []): IBookmark[] {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    return this.get();
  }
}
```

while the bookmarks.component.ts only uses the service

```javascript
export class BookmarksComponent implements OnInit {

  bookmarks: IBookmark[];
  newMode = false;
  updateIndex = -1;

  constructor(private bookmarksService: BookmarksService) { }

  ngOnInit() {
    this.bookmarks = this.bookmarksService.get();
  }

  create(title: string, url: string) {
    event.preventDefault();

    this.bookmarks = this.bookmarksService.create({
      title: title,
      url: url
    });

    this.newMode = false;
    this.updateIndex = -1;
  }

  update(index: number, bookmark: IBookmark) {
    this.bookmarks = this.bookmarksService.update(index, bookmark);
    this.updateIndex = index;
  }

  delete(id: number) {
    this.bookmarks = this.bookmarksService.delete(id);
    this.updateIndex = -1;
  }

  onNew() {
    this.newMode = true;
    this.updateIndex = -1;
  }

  onNewClose() {
    this.newMode = false;
    this.updateIndex = -1;
  }
}
```
