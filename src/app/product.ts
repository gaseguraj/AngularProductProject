export enum Condition { NEW, USED, DISCONTINUED}
export enum Category { LAPTOP, PC}

export class Product{
  id: number;
  name: string;
  description: string;
  price: number;
  condition: Condition;
  category: Category;
}