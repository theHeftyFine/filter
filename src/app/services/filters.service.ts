import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, observable, Observable, Operator, Subject} from 'rxjs';
import {filter, groupBy, map, reduce} from 'rxjs/operators';

export interface IFilter {
  value: string;
  field: string;
}

export interface IData {
  header1: string;
  header2: string;
  header3: string;
  header4: string;
  header5: string;
}

/**
 * Mock data provider
 */
@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  data: Array<IData> = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/data.json')
      .subscribe(data => {
        console.log(data);
        this.data = data as Array<IData>;
      });
  }

  /**
   * Filtered data based on input values
   */
  filtered$(filtersIn: Array<IFilter>, filtersOut: Array<IFilter>, field: string): Observable<IData> {
    // gebruik alleen de filters voor het aggregatie veld
    const fieldsIn: Array<IFilter> = filtersIn.filter(f => f.field === field);
    const fieldOut: Array<IFilter> = filtersOut.filter(f => f.field === field);
    return Observable.create(obs => obs.next(this.data))
      .pipe(
        // double check: alleen velden die ons input veld hebben
        filter(data => data.hasOwnProperty(field)),
        // laat toe als één in filter matched
        filter(data => fieldsIn.map(f => data[f.field] === f.value).reduce((a, b) => a || b)),
        // laat toe als geen in filter matched
        filter(data => fieldOut.map(f => data[f.field] !== f.value).reduce((a, b) => !a || !b))
      );
  }

  full(field: string): Observable<IData> {
    return this.filtered$([], [], field);
  }


}
