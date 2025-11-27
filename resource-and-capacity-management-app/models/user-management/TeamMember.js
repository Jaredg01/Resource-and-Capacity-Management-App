/**
 * TeamMember subclass extending User
 */
import { User } from './User';

export class TeamMember extends User {
  constructor(data = {}) {
    super(data);
    // TeamMember-specific properties
  }
}
