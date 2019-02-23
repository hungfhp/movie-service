import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
const config = require("../../config")

const configDB = {
  "name": "mongo",
  "connector": "mongodb",
  "url": config.mongoURL,
  "host": "",
  "port": "",
  "user": "hung",
  "password": "1",
  "database": "gr"
}

export class MongoDataSource extends juggler.DataSource {
  static dataSourceName = 'mongo';

  constructor(
    @inject('datasources.config.mongo', { optional: true })
    dsConfig: object = configDB,
  ) {
    super(dsConfig);
  }
}
