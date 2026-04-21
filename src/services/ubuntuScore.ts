/**
 * Ubuntu Score (0-100) Reputation System
 * Calculated from five weighted components:
 * - Reciprocity Index (25%)
 * - Consistency Score (20%)
 * - Community Endorsements (20%)
 * - Governance Participation (20%)
 * - Resource Sharing (15%)
 */

export interface UbuntuScoreComponents {
  reciprocity: number; // 0-100
  consistency: number; // 0-100
  endorsements: number; // 0-100
  governance: number; // 0-100
  sharing: number; // 0-100
}

export type AuthorityLevel = 'Novice' | 'Contributor' | 'Steward' | 'Guardian' | 'Archivist';

export interface AuthorityDetail {
  level: AuthorityLevel;
  range: [number, number];
  privileges: string;
  responsibilities: string;
}

export const AUTHORITY_LEVELS: AuthorityDetail[] = [
  { level: 'Novice', range: [0, 19], privileges: 'View-only access', responsibilities: 'Receive endorsements only' },
  { level: 'Contributor', range: [20, 39], privileges: 'Full participation', responsibilities: 'Create proposals & vote' },
  { level: 'Steward', range: [40, 59], privileges: 'Member approval', responsibilities: 'Moderate discussions' },
  { level: 'Guardian', range: [60, 79], privileges: 'Governance control', responsibilities: 'Access credit facilities' },
  { level: 'Archivist', range: [80, 100], privileges: 'Emergency powers', responsibilities: 'Constitutional oversight' },
];

export function calculateUbuntuScore(components: UbuntuScoreComponents): number {
  return Math.round(
    components.reciprocity * 0.25 +
    components.consistency * 0.20 +
    components.endorsements * 0.20 +
    components.governance * 0.20 +
    components.sharing * 0.15
  );
}

export function getAuthorityLevel(score: number): AuthorityDetail {
  return AUTHORITY_LEVELS.find(l => score >= l.range[0] && score <= l.range[1]) || AUTHORITY_LEVELS[0];
}
