import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';
import { SearchResponse } from 'src/app/models/search-response';
import { MovieResponse } from 'src/app/models/movie-response';
import { SearchResponseItem } from 'src/app/models/search-response-item';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public decades: object = {};
  public moviesToDisplay: MovieResponse[] = [];
  public serviceError: any;

  private detailedMovieList: any[] = [];
  private simpleMovieList: SearchResponseItem[];
  private searchString = 'Batman';

  constructor(private omdbService: OmdbService) { }

  /*
    Filter display array by selected decade
    Param: string to use as filter
  */
  public filterDecade(decade: string) {
    this.moviesToDisplay = this.detailedMovieList.filter((movie) => {
      return this.convertYearToDecade(movie.Year).toString() === decade;
    });
  }

  /*
    Used to reset and display all 10 films regardless of filter.
    Params: none
  */
  public resetFilter() {
    this.moviesToDisplay = this.detailedMovieList;
  }

  /*
    Call OMDB API to grab first 10 movies
  */
  private callMoviesService() {
    this.omdbService.getMovies({s: this.searchString})
      .subscribe(
        (data: SearchResponse) => {
          this.simpleMovieList = data.Search;
          this.getMovieDetails();
        },
        error => this.serviceError = error);
  }

  /*
    Retreievs complete details for movies that were retreived from service
  */
  private getMovieDetails() {
    this.simpleMovieList.forEach(movie => {
      const decade = this.convertYearToDecade(movie.Year);
      if (this.decades.hasOwnProperty(decade)) {
        this.decades[decade] ++;
      } else {
        this.decades[decade] = 1;
      }
      this.omdbService.getMovies({i: movie.imdbID})
        .subscribe(
          (data: MovieResponse) => {
            data.decade = decade;
            this.detailedMovieList.push(data);
            this.moviesToDisplay.push(data);
          },
          error => this.serviceError = error);
    });
  }

  /*
    Used to convert string year into corresponding decade
    Param: string representing year
  */
  private convertYearToDecade(year: string): number {
    const numberYear = parseInt(year, 10);
    return numberYear - (numberYear % 10);
  }

  ngOnInit() {
    this.callMoviesService();
  }
}
