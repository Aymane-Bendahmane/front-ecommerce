import {ProductItem} from './Product.item'
import {Client} from './Client';
export class Caddy{
  public name:string='';
  public items:Map<number,ProductItem> ;
  public client:Client | undefined ;

  constructor( name:string) {
    this.name = name;
    this.items =  new Map() ;
  }
}
