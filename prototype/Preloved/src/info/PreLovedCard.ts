//Store information of each preLoved Item
export class PreLovedCard {
  id?: string;
  title?: string;
  images?: string;
  price?: number;
  condition?: string;
  category?: string;
  description?: string;

  constructor(title?: string, price?: number, description?: string, condition?: string, category?: string, images?: string, id?: string) {
    this.id = id;
    this.title = title;
    this.images = images;
    this.price = price;
    this.condition = condition;
    this.category = category;
    this.description = description;
  }
}
