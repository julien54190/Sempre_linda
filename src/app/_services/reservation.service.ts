import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDataReservation, ISingleReservation } from '../_interfaces/reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  url = 'http://localhost:5001/reservations'

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<IDataReservation>{
    return this.http.get<IDataReservation>(this.url)
  }

  getUser(uid: string | null): Observable<ISingleReservation>{
    return this.http.get<ISingleReservation>(this.url+'/'+uid)
  }
}
