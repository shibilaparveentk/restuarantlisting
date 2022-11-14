import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restuarants-list',
  templateUrl: './restuarants-list.component.html',
  styleUrls: ['./restuarants-list.component.css']
})
export class RestuarantsListComponent implements OnInit {

  //properties
  rest = " All Restuarants List"

  //to hold restuarant list
  restuarantslist: any = []

  lDate: any

  //to hold search
  searchterm = ""

  //dependency injection
  constructor(private apiService: ApiService) {
    this.lDate = new Date()
  }

  ngOnInit(): void {

    //api call-asynchronous call-resolve state-subscribe()
    this.apiService.getAllRestuarantsList()
      .subscribe((result) => {
        this.restuarantslist = result
        console.log(this.restuarantslist);
      })

    //to get search from api service
    this.apiService.search.subscribe((data) => {
      console.log(data);
      this.searchterm = data
    })
  }
}
