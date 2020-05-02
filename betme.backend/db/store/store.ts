import * as knex from 'knex';
import dbFactory from '../dbFactory';

export default abstract class Store<Interface> {
  private tableName: string;
  private db: knex;

  constructor(table: string) {
    this.tableName = table;
    this.db = dbFactory();
  }

  private table(): knex.QueryBuilder {
    return this.db(this.tableName);
  }
}
