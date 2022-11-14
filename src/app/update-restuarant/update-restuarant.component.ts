import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-restuarant',
  templateUrl: './update-restuarant.component.html',
  styleUrls: ['./update-restuarant.component.css']
})
export class UpdateRestuarantComponent implements OnInit {


  restId: any;
  restDetails: any = {}

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    //1. get restuarant id to be updated
    this.activatedRoute.params.subscribe((result: any) => {
      this.restId = result['id']
      console.log(this.restId);
    })

    //2.fetch details of restuarant id
    this.apiService.viewRestuarant(this.restId)
      .subscribe((result) => {
        this.restDetails = result
        console.log(this.restDetails);
      })
  }

  //updateRestuarant
  updateRestuarant(form: any) {
    console.log(form.value);

    let updateRestDetails = {
      id: form.value.id,
      name: form.value.rName,
      neighborhood: form.value.neighborhood,
      photograph: form.value.photograph,
      address: form.value.address,
      latlng: {
        lat: form.value.lat,
        lng: form.value.lng
      },
      cuisine_type: form.value.cuisine_type,
      operating_hours: {
        Monday: form.value.Monday,
        Tuesday: form.value.Tuesday,
        Wednesday: form.value.Wednesday,
        Thursday: form.value.Thursday,
        Friday: form.value.Friday,
        Saturday: form.value.Saturday,
        Sunday: form.value.Sunday
      },
      reviews: [
        {
          name: form.value.rvname,
          date: form.value.date,
          rating: form.value.Rating,
          comments: form.value.comments
        }
      ]
    }

    console.log(updateRestDetails);
    this.apiService.updateRestuarant(this.restId, updateRestDetails)
      .subscribe((data) => {
        alert('Restuarant Details are updated sucessfully!!')
        this.router.navigateByUrl('')

      })

  }

}
