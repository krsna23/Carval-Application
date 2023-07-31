import { Injectable } from '@angular/core';

interface Car {
  model: string;
  make: number;
  year: number;
  mileage: number;
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }


  postData(carData: Car){
    console.log(carData);
  }

  getCar(id: string){
    console.log(id);
  }
}
