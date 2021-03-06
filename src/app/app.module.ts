import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
