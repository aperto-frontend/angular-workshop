[Back to exercise index](https://github.com/aperto-frontend/angular-workshop#angular-workshop)

# Exercise 10: Router

This branch has been achieved by performing the following steps:

## Step A

Create the BookmarkGoto component

```
ng g component components/bookmarks/bookmark-goto
```

Add component logic to `bookmark.component.ts`

```javascript
import { Component, Input, OnInit } from '@angular/core';
import { IBookmark } from '../bookmark.interface';
import { ActivatedRoute } from '@angular/router';
import { BookmarksService } from '../../../services/bookmarks.service';

@Component({
  selector: 'app-bookmark-goto',
  templateUrl: './bookmark-goto.component.html',
  styleUrls: ['./bookmark-goto.component.scss']
})
export class BookmarkGotoComponent implements OnInit {

  bookmark: IBookmark;

  constructor(
    private bookmarksService: BookmarksService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute);
    const bookmarkId = this.activatedRoute.snapshot.params.id;

    console.log(bookmarkId);

    this.bookmark = this.bookmarksService.getById(Number(bookmarkId));
  }

}
```

Implement the `getById` function that needs to be used to get only one Bookmark in `bookmarks.service.ts`

```javascript
getById(id: number): IBookmark {
  let bookmarks = this.get();

  bookmarks = bookmarks.filter((bookmark) => {
    console.log(bookmark.id, id, bookmark.id === id);
    return bookmark.id === id;
  });

  if (bookmarks.length) {
    return bookmarks[0];
  }

  return null;
}
```

And finally reuse the BookmarkItem in the `bookmark-goto.component.html`

```html
<a class="bookmark-goto__over" [routerLink]="['']">Back</a>
<div class="bookmark-goto">
  <app-bookmark-item [bookmark]="bookmark"></app-bookmark-item>
</div>
```

## Step B

In `app.module.ts` import the Router module and add two routes

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { BookmarkItemComponent } from './components/bookmarks/bookmark-item/bookmark-item.component';
import { BookmarksService } from './services/bookmarks.service';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkGotoComponent } from './components/bookmarks/bookmark-goto/bookmark-goto.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: BookmarksComponent },
  { path: 'goto/:id', component: BookmarkGotoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    BookmarkItemComponent,
    BookmarkGotoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [BookmarksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Add a router outlet in `app.component.html`

```html
<router-outlet></router-outlet>
```

Change the link to a bookmark item into a RouterLink in `bookmark-item.component.html`

```html
<a [routerLink]="['goto', bookmark.id]" *ngIf="bookmark.url">{{bookmark.title || bookmark.url}}</a>
```

Now you can navigate between the two components

## Documents

* https://angular.io/guide/router
* https://angular.io/guide/router#router-links
