import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IndividualCard extends Model {
  @Column
  account: number;
}
