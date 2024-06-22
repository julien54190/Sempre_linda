import { Component } from '@angular/core';
import { IMenu } from '../../../_interfaces/menu';
import { MenuService } from '../../../_services/menu.service';

@Component({
  selector: 'app-mindex',
  templateUrl: './mindex.component.html',
  styleUrl: './mindex.component.scss'
})
export class MIndexComponent {

  menuList: IMenu[] = []

  constructor(private menuService: MenuService){}

  ngOnInit(): void {
      this.menuService.getAllUser().subscribe(
        menu => {
          this.menuList = menu.data
        }
        )

    }
}
