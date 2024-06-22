import { Component } from '@angular/core';
import { IReservation } from '../../_interfaces/reservation';
import { ReservationService } from '../../_services/reservation.service';

@Component({
  selector: 'app-Areservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {
  reservationList: IReservation[] = []

  constructor(private resaService: ReservationService){}

  ngOnInit(): void {
      this.resaService.getAllUser().subscribe(
        reservation => {
          this.reservationList = reservation.data
        }
        )

    }
}
