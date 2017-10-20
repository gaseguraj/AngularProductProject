import { Product, Condition, Category } from "./product"
//List of products
export const PRODUCTS: Product[] = [
  {   id: 1, name: 'Acer Laptop', description: 'Core i7 12 GB RAM Solid State HD 250',
      price: 600, condition: Condition.NEW, category: Category.LAPTOP },
  {   id: 2, name: 'MC Book Air', description: 'Expensive product',
      price: 1600, condition: Condition.NEW, category: Category.LAPTOP },
  {   id: 3, name: 'Dell Inspiron', description: 'Core i5 6 GB RAM Solid State HD 250',
      price: 600, condition: Condition.NEW, category: Category.LAPTOP },
  {   id: 4, name: 'Lenovo Laptop', description: 'Core i7 6 GB RAM HD 1 TB',
      price: 500, condition: Condition.NEW, category: Category.LAPTOP }
];