/**
 *
 * @param {number[]} source
 * @param {number} short_period
 * @param {number} long_period
 * @param {number} signal_period
 * @param {number} [size]
 * @returns [macd, signal, hist]
 */
export function macd(source: number[], short_period: number, long_period: number, signal_period: number, size?: number): number[][];
