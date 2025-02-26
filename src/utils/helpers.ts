import { RATING_MULTIPLIER } from './const';

export const getRatingWidth = (rating: number): string => `${rating * RATING_MULTIPLIER}%`;
