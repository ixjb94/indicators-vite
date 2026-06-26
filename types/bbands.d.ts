/**
 *
 * @param {number[]} source
 * @param {number} period
 * @param {number} stddev
 * @param {number} [size]
 * @returns [Lower, Middle, Upper]
 */
export function bbands(source: number[], period: number, stddev: number, size?: number): number[][];
