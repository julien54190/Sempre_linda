import { Component } from '@angular/core';
import { IUser } from '../../_interfaces/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  user: IUser = {
    nom: '',
    prenom: '',
    email: '',
    numero_domicile: '',
    rue_domicile: '',
    ville_domicile: '',
    zip: '',
    password: '',
  }

  constructor(private userService : UserService){}

  onSubmit(): void{
    this.userService.addUser(this.user).subscribe(
      response => {
        console.log(response.message);
      },
    );
  }
}
