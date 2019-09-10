import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from '../models/search-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private http: HttpClient) { }


  public getMovies(searchString) {
    const requestURL = this.queryBuilder({s: searchString});
    return this.http.get<SearchResponse>(requestURL);
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
