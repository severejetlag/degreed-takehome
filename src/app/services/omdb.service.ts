import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from '../models/search-response';
import { environment } from 'src/environments/environment';
import { MovieResponse } from '../models/movie-response';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private http: HttpClient) { }

  /*
    Method to get a list of movies based off of search string
    Param: accepts search string value
  */
  public getMovies(searchString) {
    const requestURL = this.queryBuilder({s: searchString});
    return this.http.get<SearchResponse>(requestURL);
  }

  /*
    Method to get a specific movie based upon id value
    Param: accepts movie ID as string
  */
  public getMovieByID(id) {
    const requestURL = this.queryBuilder({i: id});
    return this.http.get<MovieResponse>(requestURL);
  }

  /*
    Private method to build full URL for API Request
    Params: object with key as param and value as param value
  */
  private queryBuilder(params: object): string {
    let apiURL = `${environment.omdbURL}?`;
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        apiURL += `${key}=${params[key]}&`;
      }
    }
    apiURL += `${environment.omdbKeyParam}`;
    return apiURL;
  }
}
