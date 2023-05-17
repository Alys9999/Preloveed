//Store information of each preLoved Item
//MUST HAVE: id
export class PreLovedCard {
  id: string;
  title?: string;
  images?: string;
  price?: number;
  condition?: string;
  category?: string;
  description?: string;

  constructor(id: string, title?: string, images?: string, price?: number, condition?: string, category?: string, description?: string) {
    this.id = id;
    this.title = title;
    this.images = images;
    this.price = price;
    this.condition = condition;
    this.category = category;
    this.description = description;
  }
}
