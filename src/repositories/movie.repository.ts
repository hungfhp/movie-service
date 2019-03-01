import { DefaultCrudRepository } from '@loopback/repository';
import { Movie } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class MovieRepository extends DefaultCrudRepository<
  Movie,
  typeof Movie.prototype.id
  > {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Movie, dataSource);
  }
}
