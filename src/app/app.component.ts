import { Component } from '@angular/core';
import { FavoriteEventChangedEventArgs } from './favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteEventChangedEventArgs) {
    //console.log("Favorite changed: ", isFavorite);
    console.log("Favorite changed: ", eventArgs);
  }
  //title = 'Angular app';
}

