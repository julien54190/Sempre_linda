import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEntree } from '../_interfaces/entree';


@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private cart = new BehaviorSubject<IEntree[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(entree: IEntree, isMainCourse: boolean) {
    const currentCart = this.cart.getValue();
    const entreeWithMainCourseFlag = { ...entree, isMainCourse };
    this.cart.next([...currentCart, entreeWithMainCourseFlag]);
  }

  getTotal() {
    return this.cart.getValue().reduce((total, entree) => {
      const prix = parseFloat(entree.prix);
      return total + prix + (entree.isMainCourse ? 3 : 0);
    }, 0);
  }
}
