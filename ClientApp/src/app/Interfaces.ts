export interface Producto {
  id: number,
  name: string,
  price: string,
  available: boolean,
  best_seller: boolean,
  categories: number[],
  img: string,
  description: string;
}
