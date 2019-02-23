import { DefaultCrudRepository } from '@loopback/repository';
import { Todo } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id
  > {
  constructor(
    @inject('datasources.todo') dataSource: MongoDataSource,
  ) {
    super(Todo, dataSource);
  }
}
