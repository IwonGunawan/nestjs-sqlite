import { Model, Table, PrimaryKey, Index, Column } from 'sequelize-typescript';

@Table({
  tableName: 'product',
})
export class Product extends Model {
  @PrimaryKey
  @Index
  @Column
  id: number;

  @Column
  type: string;

  @Column
  group_type: string;

  @Column
  brand_id: number;

  @Column
  category_id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  pin: number;

  @Column
  sku: string;

  @Column
  unit: string;
}
