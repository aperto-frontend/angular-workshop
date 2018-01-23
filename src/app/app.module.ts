import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { BookmarkItemComponent } from './components/bookmarks/bookmark-item/bookmark-item.component';
import { BookmarksService } from './services/bookmarks.service';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkGotoComponent } from './components/bookmarks/bookmark-goto/bookmark-goto.component';
import { SafePipe } from './pipes/safe.pipe';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: BookmarksComponent},
  {path: 'goto/:id', component: BookmarkGotoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    BookmarkItemComponent,
    BookmarkGotoComponent,
    SafePipe
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
