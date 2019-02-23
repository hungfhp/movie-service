import { Entity, model, property } from '@loopback/repository';

@model()
export class Notify extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  issuer_id: number;

  @property({
    type: 'number',
  })
  receiver_id?: number;

  @property({
    type: 'string',
  })
  content?: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  readed: boolean;


  constructor(data?: Partial<Notify>) {
    super(data);
  }
}
