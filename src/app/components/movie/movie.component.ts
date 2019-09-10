import { Component, OnInit, Input } from '@angular/core';
import { MovieResponse } from 'src/app/models/movie-response';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieResponse;
  constructor() { }

  ngOnInit() {
  }

}
