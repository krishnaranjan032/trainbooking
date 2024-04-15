import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CONSTANT } from '../constants/constant';
import { Observable } from 'rxjs';
import { IStation, ResponseModel } from '../models/Station';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  apiEndPoint: string = '';
  private apiUrl = 'https://freeapi.miniprojectideas.com/api/TrainApp';
  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.ApiEndPoint;
  }

  getAllStations(): Observable<ResponseModel> {
    // return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION);
    return this.http.get<ResponseModel>('/api/TrainApp/GetAllStations');
  }
}
