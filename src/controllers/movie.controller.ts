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
  ResponseObject
} from '@loopback/rest';
import { Movie } from '../models';
import { MovieRepository } from '../repositories';

const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          greeting: { type: 'string' },
          date: { type: 'string' },
          url: { type: 'string' },
          headers: {
            type: 'object',
            properties: {
              'Content-Type': { type: 'string' },
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

export class MovieController {
  constructor(
    @repository(MovieRepository)
    public movieRepository: MovieRepository,
  ) { }

  @post('/movies', {
    responses: {
      '200': {
        description: 'Movie model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Movie } } },
      },
    },
  })
  async create(@requestBody() movie: Movie): Promise<Movie> {
    return await this.movieRepository.create(movie);
  }

  @get('/movies/count', {
    responses: {
      '200': {
        description: 'Movie model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Movie)) where?: Where,
  ): Promise<Count> {
    return await this.movieRepository.count(where);
  }

  @get('/movies', {
    responses: {
      '200': {
        description: 'Array of Movie model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Movie } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Movie)) filter?: Filter,
  ): Promise<Movie[]> {
    return await this.movieRepository.find(filter);
  }

  @patch('/movies', {
    responses: {
      '200': {
        description: 'Movie PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() movie: Movie,
    @param.query.object('where', getWhereSchemaFor(Movie)) where?: Where,
  ): Promise<Count> {
    return await this.movieRepository.updateAll(movie, where);
  }

  @get('/movies/{id}', {
    responses: {
      '200': {
        description: 'Movie model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Movie } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Movie> {
    return await this.movieRepository.findById(id);
  }

  @patch('/movies/{id}', {
    responses: {
      '204': {
        description: 'Movie PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() movie: Movie,
  ): Promise<void> {
    await this.movieRepository.updateById(id, movie);
  }

  @put('/movies/{id}', {
    responses: {
      '204': {
        description: 'Movie PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() movie: Movie,
  ): Promise<void> {
    await this.movieRepository.replaceById(id, movie);
  }

  @del('/movies/{id}', {
    responses: {
      '204': {
        description: 'Movie DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.movieRepository.deleteById(id);
  }
}
