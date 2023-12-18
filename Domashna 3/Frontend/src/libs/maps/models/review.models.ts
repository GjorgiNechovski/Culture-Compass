import { User } from 'src/libs/authentication/models/user.models';
import { Place } from './map.models';

export class Review {
  constructor(
    public id: number,
    public comment: string,
    public place: Place,
    public user: User
  ) {}
}
