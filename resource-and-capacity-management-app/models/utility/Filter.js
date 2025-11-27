/**
 * Filter interface for utility package
 * Used by Report and Lookup classes
 */
export class Filter {
  constructor(data = {}) {
    // Filter interface properties
  }

  /**
   * Apply filter method to be implemented by classes using this interface
   */
  applyFilter() {
    throw new Error('applyFilter method must be implemented');
  }
}
