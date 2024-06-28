export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public discount: number,
    public discountedPrice: number
  ) {}
}
