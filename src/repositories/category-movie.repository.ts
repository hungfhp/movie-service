import { DefaultCrudRepository } from '@loopback/repository';
import { CategoryMovie } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class CategoryMovieRepository extends DefaultCrudRepository<
  CategoryMovie,
  typeof CategoryMovie.prototype.id
  > {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(CategoryMovie, dataSource);
  }
}
