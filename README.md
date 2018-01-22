[Back to exercise index](https://github.com/aperto-frontend/angular-workshop#angular-workshop)

# Exercise 3: Templating

This branch has been achieved by performing the following steps:

## Step A

Hardcode a dummy array of bookmarks in `bookmarks.component.ts` as a class variable directly after the class keyword

```javascript
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
      url: 'https://blog.angular.io/'
    },
    {
      id: 4,
      title: 'Angular Home'
    }
  ];
```

## Step B

Iterate the bookmarks in `bookmarks.component.html` with a ngFor directive

```html
<ul class="bookmarks__list">
  <li *ngFor="let bookmark of bookmarks;">
    <a href="{{bookmark.url}}">{{bookmark.title}}</a>
  </li>
</ul>
```

## Optional

Display the URL if the title is missing

```html
<a target="_blank" rel="noopener" href="{{bookmark.url}}">{{bookmark.title || bookmark.url}}</a>
```
