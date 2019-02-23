import {Entity, model, property} from '@loopback/repository';

@model()
export class CategoryMovie extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  name_ascii?: string;


  constructor(data?: Partial<CategoryMovie>) {
    super(data);
  }
}
