import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataMenu, ISingleMenu } from '../_interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
    url = 'http://localhost:5001/menus'

    constructor(private http: HttpClient) { }

    getAllUser(): Observable<IDataMenu>{
      return this.http.get<IDataMenu>(this.url)
    }

    getUser(uid: string | null): Observable<ISingleMenu>{
      return this.http.get<ISingleMenu>(this.url+'/'+uid)
    }
  }

