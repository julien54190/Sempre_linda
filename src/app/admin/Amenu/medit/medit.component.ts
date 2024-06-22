import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medit',
  templateUrl: './medit.component.html',
  styleUrl: './medit.component.scss'
})
export class MEditComponent implements OnInit{

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
