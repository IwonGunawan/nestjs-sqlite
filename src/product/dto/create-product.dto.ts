export class CreateProductDto {
  id: number;
  type: string;
  group_type: string;
  brand_id: number;
  category_id: number;
  name: string;
  description: string;
  pin: number;
  sku: string;
  unit: string;
}
