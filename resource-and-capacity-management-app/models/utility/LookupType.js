/**
 * LookupType enumeration
 */
export const LookupType = {
  ROLE: 'role',
  DEPARTMENT: 'department',
  ACTIVITY_CATEGORY: 'activity-category',
  FISCAL: 'fiscal',
  PERIOD: 'period',
  HOLIDAY: 'holiday',
  THRESHOLD_RULE: 'threshold-rule',
  REPORT_TO: 'report-to',
  REQUESTOR: 'requestor',
  REQUESTING_DEPARTMENT: 'requesting-department'
};

// Freeze the object to prevent modifications
Object.freeze(LookupType);
