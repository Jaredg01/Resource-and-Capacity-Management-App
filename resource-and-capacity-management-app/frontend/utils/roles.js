export const ROLES = {
  RESOURCE_MANAGER: 1,
  TEAM_MEMBER: 2,
  STAKEHOLDER: 3
};

export function isManager(role) {
  return role === ROLES.RESOURCE_MANAGER;
}

export function isTeamMember(role) {
  return role === ROLES.TEAM_MEMBER;
}

export function isStakeholder(role) {
  return role === ROLES.STAKEHOLDER;
}