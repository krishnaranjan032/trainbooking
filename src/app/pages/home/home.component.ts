import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStation, ResponseModel } from '../../models/Station';
import { StationsService } from '../../services/stations.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stationList: IStation[] = [];
  private stationSubscription?: Subscription;
  travelObj: any = {
    fromStationId:'',
    toStationId:'',
    dateOfTravel:''
  } 
  private apiUrl = 'https://freeapi.miniprojectideas.com/api/TrainApp'; 
  constructor(private stationSrv:StationsService, private router: Router) {
  }
  ngOnInit(): void {
    this.loadStations();
  }
  loadStations() {
    this.stationSrv.getAllStations().subscribe((res:ResponseModel)=>{
      this.stationList = res.data;
    }, error=>{
      console.log("Error Occoured", error)
    })
  }

  onSearch() {
    this.router.navigate(['/search',this.travelObj.fromStationId,this.travelObj.toStationId,this.travelObj.dateOfTravel])
  }
}
