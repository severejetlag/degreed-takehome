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
    Method to get movies from OMDB API based off of options passed
    Param: accepts params object
  */
  public getMovies(params: object) {
    const requestURL = this.queryBuilder(params);
    return this.http.get<SearchResponse | MovieResponse>(requestURL);
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
