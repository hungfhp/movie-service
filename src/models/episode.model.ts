import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Episode extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'array',
    itemType: 'object',
  })
  list?: object[];

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Episode>) {
    super(data);
  }
}
