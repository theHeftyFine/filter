import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit() {}

}
