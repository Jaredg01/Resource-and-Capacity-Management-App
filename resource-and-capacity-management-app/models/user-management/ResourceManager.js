/**
 * ResourceManager subclass extending User
 */
import { User } from './User';

export class ResourceManager extends User {
  constructor(data = {}) {
    super(data);
    // ResourceManager-specific properties
  }
}
