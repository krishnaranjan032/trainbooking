import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CONSTANT } from '../constants/constant';
import { Observable } from 'rxjs';
import { Booking, IPassenger, IStation, ResponseModel } from '../models/Station';

@Injectable({
  providedIn: 'root'
})
export class TrainsService {

  // apiEndPoint: string ='';
  apiEndPoint: string ='/api';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.ApiEndPoint;
  }

  getTrainsBetweenStations(serachObj: any) :Observable<ResponseModel> {
    // return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_TRAINS_BETWEEN_STATIONS+ `?departureStationId=${serachObj.fromStationId}&arrivalStationId=${serachObj.toStationId}&departureDate=${serachObj.dateOfTravel}`)
    return this.http.get<ResponseModel>(`/api/TrainApp/GetTrainsBetweenStations?departureStationId=${serachObj.fromStationId}&arrivalStationId=${serachObj.toStationId}&departureDate=${serachObj.dateOfTravel}`)
  }

  
  createPassenger(obj: IPassenger) :Observable<ResponseModel> {
    // return this.http.post<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.ADD_UPDATE_PASSENGER,obj  )
    return this.http.post<ResponseModel>('/api/TrainApp/AddUpdatePassengers',obj)
  }

  login(obj: IPassenger) :Observable<ResponseModel> {
    // return this.http.post<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.LOGIN,obj  )
    return this.http.post<ResponseModel>('/api/TrainApp/login',obj  )
  }
  bookTrain(obj: Booking) :Observable<ResponseModel> {
    // return this.http.post<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.BOOK_TRAIN,obj  )
    return this.http.post<ResponseModel>('/api/TrainApp/BookTrain',obj  )
  }

  getAllTrains() :Observable<ResponseModel> {
    // return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_TRAINS  )
    return this.http.get<ResponseModel>('/api/TrainApp/GetAllTrains')
  }
  getAllBookings(id:number) :Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`/api/TrainApp/GetBookingByPassengerId?passengerid=${id}`)
    // return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_BOOKING_BY_PASSENGER + '?passengerid='+ id )
  }
}
