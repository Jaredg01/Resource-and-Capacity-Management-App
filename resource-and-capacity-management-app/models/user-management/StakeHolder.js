/**
 * StakeHolder subclass extending User
 */
import { User } from './User';

export class StakeHolder extends User {
  constructor(data = {}) {
    super(data);
    // StakeHolder-specific properties
  }
}
