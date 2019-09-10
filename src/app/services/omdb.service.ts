import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor() { }

  public getMovies() {
    console.log('service test');
  }
}
