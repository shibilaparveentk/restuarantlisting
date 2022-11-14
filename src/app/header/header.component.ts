import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  searchterm(event: any) {
    console.log(event.target.value);
    let searchKey = event.target.value
    this.api.search.next(searchKey)
  }

}
