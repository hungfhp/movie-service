import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {CategoryMovie} from '../models';
import {CategoryMovieRepository} from '../repositories';

export class CategoryMovieController {
  constructor(
    @repository(CategoryMovieRepository)
    public categoryMovieRepository : CategoryMovieRepository,
  ) {}

  @post('/category-movies', {
    responses: {
      '200': {
        description: 'CategoryMovie model instance',
        content: {'application/json': {schema: {'x-ts-type': CategoryMovie}}},
      },
    },
  })
  async create(@requestBody() categoryMovie: CategoryMovie): Promise<CategoryMovie> {
    return await this.categoryMovieRepository.create(categoryMovie);
  }

  @get('/category-movies/count', {
    responses: {
      '200': {
        description: 'CategoryMovie model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CategoryMovie)) where?: Where,
  ): Promise<Count> {
    return await this.categoryMovieRepository.count(where);
  }

  @get('/category-movies', {
    responses: {
      '200': {
        description: 'Array of CategoryMovie model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': CategoryMovie}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CategoryMovie)) filter?: Filter,
  ): Promise<CategoryMovie[]> {
    return await this.categoryMovieRepository.find(filter);
  }

  @patch('/category-movies', {
    responses: {
      '200': {
        description: 'CategoryMovie PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() categoryMovie: CategoryMovie,
    @param.query.object('where', getWhereSchemaFor(CategoryMovie)) where?: Where,
  ): Promise<Count> {
    return await this.categoryMovieRepository.updateAll(categoryMovie, where);
  }

  @get('/category-movies/{id}', {
    responses: {
      '200': {
        description: 'CategoryMovie model instance',
        content: {'application/json': {schema: {'x-ts-type': CategoryMovie}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<CategoryMovie> {
    return await this.categoryMovieRepository.findById(id);
  }

  @patch('/category-movies/{id}', {
    responses: {
      '204': {
        description: 'CategoryMovie PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() categoryMovie: CategoryMovie,
  ): Promise<void> {
    await this.categoryMovieRepository.updateById(id, categoryMovie);
  }

  @put('/category-movies/{id}', {
    responses: {
      '204': {
        description: 'CategoryMovie PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() categoryMovie: CategoryMovie,
  ): Promise<void> {
    await this.categoryMovieRepository.replaceById(id, categoryMovie);
  }

  @del('/category-movies/{id}', {
    responses: {
      '204': {
        description: 'CategoryMovie DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.categoryMovieRepository.deleteById(id);
  }
}
