import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../_interfaces/user';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-u-index',
  templateUrl: './uindex.component.html',
  styleUrl: './uindex.component.scss'
})
export class UIndexComponent implements OnInit {

  userList: IUser[] = []

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.getAllUser().subscribe(
        users => {
          this.userList = users.data
        }
        )

    }
  }
