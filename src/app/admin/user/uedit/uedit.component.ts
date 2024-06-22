import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uedit',
  templateUrl: './uedit.component.html',
  styleUrl: './uedit.component.scss'
})
export class UEditComponent implements OnInit{

  constructor(private activated: ActivatedRoute){}

  ngOnInit(): void {
    // permet de recuperer le parametre dans l'url
      this.activated.params.subscribe(
        (data) => {
          console.log(data);

        }
      )
  }
}
