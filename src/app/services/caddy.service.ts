import {Injectable} from '@angular/core';
import {ProductItem} from "../componants/Model/Product.item";
import {Product} from "../componants/Model/Product";
import {Caddy} from "../componants/Model/Caddy";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CaddyService {

  currentCaddyName: string = 'caddy1';
  caddy: Caddy;
  public nb: any;

  constructor() {
    this.caddy = new Caddy(this.currentCaddyName);
    this.readFromLocalStorage()
    this.calculating_nb_Items()
  }

  readFromLocalStorage() {
    let storedcaddy = localStorage.getItem('caddy');
    if (storedcaddy) {
      this.caddy.items = new Map(JSON.parse(storedcaddy));
      this.caddy.items.forEach((it, n) => {
        console.log(it.product?.id)
      })
    }
  }

  public calculating_nb_Items() {
    this.nb = 0
    this.caddy.items.forEach((it, n) => {
      this.nb += 1;
    })

  }

  public addProductToCAddyWithQuantity(po: any, quanity: any) {
    this.readFromLocalStorage()
    if (quanity != 1) {
      quanity = quanity.value.quantity
    } else {
      quanity = 1
    }
    let product: Product = new Product(po.id, po.artdesignation, po.prix)
    let caddy = this.caddy;
    let productItem: ProductItem | undefined = caddy.items.get(product.id);
    if (productItem) {
      productItem.quantity += quanity;
    } else {
      productItem = new ProductItem();
      productItem.price = product.price;
      productItem.product = product;
      productItem.quantity = quanity;
      // @ts-ignore
      caddy.items.set(product.id, productItem);
    }
    this.saveCaddies();
    this.calculating_nb_Items();
  }

  public saveCaddies() {
    let str = JSON.stringify([...this.caddy.items])
    localStorage.setItem('caddy', str);
  }

  public getCurrentCaddy() {
    return this.caddy;
  }

  // @ts-ignore
  getTotal(): number {
    let total = 0;
    // @ts-ignore
    let items: IterableIterator<ProductItem> = this.getCurrentCaddy().items.values();
    for (let pi of items) {
      // @ts-ignore
      total += pi.price * pi.quantity;
    }
    return total;
  }

  removeFromCaddy(id: any) {
    this.caddy.items.forEach((it, n) => {
      if (id == it.product.id)
        this.caddy.items.delete(id)
    })
    this.saveCaddies()
    this.calculating_nb_Items()
  }
  get theCaddy(){
    return this.caddy
  }


}
