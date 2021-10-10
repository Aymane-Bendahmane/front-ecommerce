import {ProductItem} from "./Product.item";
import {ProductItemsV2} from "./productItemsV2";

export class Commande{
  public idUser:any
  public total:any
  public cmdDescription:any
  public productItems: Array<ProductItemsV2> = [];
}
