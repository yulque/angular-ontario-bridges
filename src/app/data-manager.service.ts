import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs';
import { BridgeId, Bridge } from './bridge';


@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
 
  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }
  
  // Async (if you work through network, it won't be immediate)
  getBridges() : Observable<BridgeId[]> {
    const url = `${this.apiUrl}/bridges`;
    //it is same as fetch().then(fn)
    return this.http.get<Bridge[]>(url);
  };

  getBridge(id: string) : Observable<Bridge> {
    const url = `${this.apiUrl}/bridges/${id}`;
    //it is same as fetch().then(fn)
    return this.http.get<Bridge>(url);
  };
}
