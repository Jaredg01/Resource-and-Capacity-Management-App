/**
 * Report class for utility package
 */
import { Filter } from './Filter';

export class Report {
  constructor(data = {}) {
    this.filter = data.filter || null; // Filter interface instance
    // Report properties
  }
}
