import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;


  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
