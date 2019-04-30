import {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: 'articles.component.html',
  styleUrls: ['articles.component.scss'],
})
export class ArticleComponent {

  tiles: Tile[] = [
    {text: '', cols: 11, rows: 1, color: 'lightblue'},
  ];
}