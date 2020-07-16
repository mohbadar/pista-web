import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const _BASE_URL = "/api/administration/provinces";
@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private httpClient: HttpClient) { }


  public get(): Observable<any> {
    console.log('you called the get provinces inside the province service');
    
    return this.httpClient.get(`${_BASE_URL}`);
  }

  public loadById(id: string): Observable<any> {
    return this.httpClient.get(`${_BASE_URL}/${id}`);
  }


  public loadByName(name: string): Observable<any> {
    return this.httpClient.get(`${_BASE_URL}/name/${name}`);
  }

  public loadByProvinceCode(code: string): Observable<any> {
    return this.httpClient.get(`${_BASE_URL}/code/${code}`);
  }


  public create(data): Observable<any> {
    console.log('province data is:', data);

    return this.httpClient.post(`${_BASE_URL}`, data);
  }


  public update(id, data): Observable<any> {
    return this.httpClient.put(`${_BASE_URL}/${id}`, data);
  }


  public delete(id: string): Observable<any> {
    return this.httpClient.delete(`${_BASE_URL}/${id}`);
  }

}
