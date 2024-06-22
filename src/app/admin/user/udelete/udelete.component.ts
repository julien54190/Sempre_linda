import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-udelete',
  templateUrl: './udelete.component.html',
  styleUrl: './udelete.component.scss'
})
export class UDeleteComponent implements OnInit{

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
