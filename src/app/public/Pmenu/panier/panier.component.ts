import { Component } from '@angular/core';
import { IEntree } from '../../../_interfaces/entree';
import { PanierService } from '../../../_services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})
export class PanierComponent {
  cart: IEntree[] = [];
  total: number = 0;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.panierService.cart$.subscribe((entree) => {
      this.cart = entree;
      this.total = this.panierService.getTotal();
    });
  }
}
