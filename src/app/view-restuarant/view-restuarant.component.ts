import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-restuarant',
  templateUrl: './view-restuarant.component.html',
  styleUrls: ['./view-restuarant.component.css']
})
export class ViewRestuarantComponent implements OnInit {


  restId: Number = 0
  restDetails: any = {}

  constructor(private activateRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    //to get parameter from url
    this.activateRoute.params.subscribe((result) => {
      this.restId = result['id']
      console.log(this.restId);

    })

    //call api to get single restuarant detail
    this.apiService.viewRestuarant(this.restId)
      .subscribe((result) => {
        this.restDetails = result
        console.log(this.restDetails);
      })
  }


}
