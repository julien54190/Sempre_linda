import { Component } from '@angular/core';
import { IEntree } from '../../../_interfaces/entree';
import { PanierService } from '../../../_services/panier.service';
import { AuthService } from '../../../_services/auth.service';


@Component({
  selector: 'app-menu-entree',
  templateUrl: './menu-entree.component.html',
  styleUrl: './menu-entree.component.scss'
})
export class MenuEntreeComponent {
    entrees: IEntree[] = [
      { id: 1, menu_id: 1, nom: 'tomata Mozzarella', ingredient: 'Tomate, mozzarella, basilic ', prix: '10,00'},
      { id: 2, menu_id: 1, nom: 'Capeletti bouillon', ingredient: 'boeuf dinde ', prix: '10,00' },
      { id: 3, menu_id: 1, nom: 'Salade fermiere', ingredient: 'salade, tomate, oeuf, oignons, lardon, emmantal, crouton', prix: '9,00', createdAt: '', updatedAt: '', deletedAt: null }
    ];

    constructor(private panierService: PanierService,
      public authService: AuthService
      ) {}

    addToCart(entree: IEntree, isMainCourse: boolean) {
      this.panierService.addToCart(entree, isMainCourse);
    }
  }



