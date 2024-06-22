import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { IUser } from '../../../_interfaces/user';

@Component({
  selector: 'app-uadd',
  templateUrl: './uadd.component.html',
  styleUrls: ['./uadd.component.scss']
})
export class UAddComponent implements OnInit {

  user: IUser = {
    nom: '',
    prenom: '',
    email: '',
    numero_domicile: '',
    rue_domicile: '',
    ville_domicile: '',
    zip: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.userService.addUser(this.user).subscribe(
      response => {
        console.log(response.message);
      },
    );
  }
}
