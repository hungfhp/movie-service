import { Entity, model, property } from '@loopback/repository';

@model()
export class Movie extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  category_id: number;

  @property({
    type: 'string',
    required: true,
    default: 'raw',
  })
  status: string;

  @property({
    type: 'string',
  })
  link: string;

  @property({
    type: 'string',
    required: true
  })
  name: string;

  @property({
    type: 'string'
  })
  desc?: string;

  @property({
    type: 'string'
  })
  director?: string;

  @property({
    type: 'date',
  })
  release?: string;

  @property({
    type: 'number',
    required: true,
  })
  create_by: number;

  @property({
    type: 'date',
    required: true,
  })
  create_at: string;

  @property({
    type: 'string'
  })
  name_ascii?: string;

  @property({
    type: 'number',
    required: false,
    default: 1,
  })
  total_ep: number;

  @property({
    type: 'boolean',
    required: true,
    default: true,
  })
  public: boolean;

  constructor(data?: Partial<Movie>) {
    super(data);
  }
}
