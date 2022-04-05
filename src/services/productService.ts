//Interface
import { CartItemType } from '../interfaces/CartItem';
export const getProducts= async ():Promise<CartItemType[]>=> await (await fetch('https://fakestoreapi.com/products')).json();