import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';
import { SearchResponse } from 'src/app/models/search-response';
import { MovieResponse } from 'src/app/models/movie-response';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public moviesToDisplay: MovieResponse[];
  public serviceError: any;

  private detailedMovieList: MovieResponse[] = [];
  private simpleMovieList: SearchResponse;
  private searchString = 'Batman';

  constructor(private omdbService: OmdbService) { }

  /*
    Call OMDB API to grab first 10 movies
  */
  private callMoviesService() {
    this.omdbService.getMovies({s: this.searchString})
      .subscribe(
        (data: SearchResponse) => {
          console.log(data);
          this.simpleMovieList = data;
          this.getMovieDetails();
        },
        error => this.serviceError = error);
  }

  /*
    Retreievs complete details for movies that were retreived from service
  */
  private getMovieDetails() {
    this.simpleMovieList.Search.forEach(movie => {
      this.omdbService.getMovies({i: movie.imdbID})
        .subscribe(
          (data: MovieResponse) => {
            console.log(data);
            this.detailedMovieList.push(data);
          },
          error => this.serviceError = error);
    });
    console.log(this.detailedMovieList);
  }

  ngOnInit() {
    this.callMoviesService();
  }
}
