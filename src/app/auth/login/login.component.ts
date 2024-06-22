
import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { ICredentials } from '../../_interfaces/credential';
import { TokenService } from '../../_services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: ICredentials = {
    email: '',
    password: '',
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
    ){}

  onSubmit(): void{
    this.authService.login(this.form).subscribe(
      data  => {
        this.tokenService.saveToken(data.access_token)
      },
      err => console.log(err)


    )
  }
}
