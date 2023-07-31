import { Component} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ApiService } from './services/api.service';
import { ViewChild } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstimatePage } from './pages/estimate/estimate.page';

interface Car {
  model: string;
  make: number;
  year: number;
  mileage: number;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  @ViewChild(EstimatePage)
  EstimatePage!: EstimatePage;
  message!: string;
  title: any;

  constructor(
              private http: HttpClient,
              private apiService: ApiService){}
  
  ngOnInit() {
  }
  carData(carData: Car){
    console.log("data parent", carData);
    this.apiService.postData(carData);
  }

  getData(id: string){
    this.apiService.getCar(id);
  }
  
  

}
