import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';


@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
