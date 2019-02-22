import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './todo.datasource.json';

export class TodoDataSource extends juggler.DataSource {
  static dataSourceName = 'todo';

  constructor(
    @inject('datasources.config.todo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
