export class Item {
  id: number;
  name: string;
  description: string;
  categoryType: string;
  price: number;
  currency: string;
  imageSrc?: string;
  promotion?: string;

  constructor(data ?: any) {
    this.id = data?.id;
    this.name = data?.name;
    this.description = data?.description;
    this.categoryType = data?.categoryType;
    this.price = data?.price;
    this.currency = data?.currency;
    this.imageSrc = data?.imageSrc;
    this.promotion = data?.promotion;
  }
}
