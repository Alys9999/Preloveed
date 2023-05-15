export class Post{
  title?: String;
  images?: String[];
  productName?: String;
  price?: number;
  condition?: String;
  category?: String;
  description?: String;

  constructor(title: String, images: String[], productName: String, price: number, condition: String, category: String, description: String) {
    this.title = title;
    this.images = images;
    this.productName = productName;
    this.price = price;
    this.condition = condition;
    this.category = category;
    this.description = description;
  }
}
