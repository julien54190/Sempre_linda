import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mdelete',
  templateUrl: './mdelete.component.html',
  styleUrl: './mdelete.component.scss'
})
export class MDeleteComponent implements OnInit {

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
