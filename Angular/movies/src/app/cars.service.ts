import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) {}

  getCars() {
    return this.http
      .get('https://carsnode.herokuapp.com/api/cars')
  }
}