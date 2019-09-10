import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private omdbService: OmdbService) { }

  ngOnInit() {
    this.omdbService.getMovies('batman')
      .subscribe(data => {
        console.log(data);
      });

    this.omdbService.getMovieByID('tt0372784')
      .subscribe(data => {
        console.log(data);
      });
  }
}
