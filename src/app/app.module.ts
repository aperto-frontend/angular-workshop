import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { BookmarkItemComponent } from './components/bookmarks/bookmark-item/bookmark-item.component';
import { BookmarksService } from './services/bookmarks.service';

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
  providers: [BookmarksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
