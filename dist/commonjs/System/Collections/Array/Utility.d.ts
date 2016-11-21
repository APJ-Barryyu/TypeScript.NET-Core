import { EqualityComparison, PredicateWithIndex, SelectorWithIndex, ActionWithIndex } from "../../FunctionTypes";
import { IArray } from "./IArray";
/**
 * Initializes an array depending on the requested capacity.
 * The returned array will have a .length equal to the value provided.
 * @param length
 * @returns {T[]}
 */
export declare function initialize<T>(length: number): T[];
/**
 *
 * @param source
 * @param sourceIndex
 * @param length
 * @returns {any}
 */
export declare function copy<T>(source: IArray<T>, sourceIndex?: number, length?: number): T[];
/**
 * Copies one array to another.
 * @param source
 * @param destination
 * @param sourceIndex
 * @param destinationIndex
 * @param length An optional limit to stop copying.
 * @returns The destination array.
 */
export declare function copyTo<T, TDestination extends IArray<T>>(source: ArrayLike<T>, destination: TDestination, sourceIndex?: number, destinationIndex?: number, length?: number): TDestination;
/**
 * Checks to see where the provided array contains an item/value.
 * If the array value is null, then -1 is returned.
 * @param array
 * @param item
 * @param {function?} equalityComparer
 * @returns {number}
 */
export declare function indexOf<T>(array: IArray<T>, item: T, equalityComparer?: EqualityComparison<T>): number;
/**
 * Checks to see if the provided array contains an item.
 * If the array value is null, then false is returned.
 * @param array
 * @param item
 * @param {function?} equalityComparer
 * @returns {boolean}
 */
export declare function contains<T>(array: IArray<T>, item: T, equalityComparer?: EqualityComparison<T>): boolean;
/**
 * Finds and replaces a value from an array.  Will replaces all instances unless a maximum is specified.
 * @param array
 * @param old
 * @param newValue
 * @param max
 * @returns {number}
 */
export declare function replace<T>(array: IArray<T>, old: T, newValue: T, max?: number): number;
/**
 * Replaces values of an array across a range of indexes.
 * @param array
 * @param value
 * @param start
 * @param stop
 */
export declare function updateRange<T>(array: ArrayLike<T>, value: T, start?: number, stop?: number): void;
/**
 * Clears (sets to null) values of an array across a range of indexes.
 * @param array
 * @param start
 * @param stop
 */
export declare function clear(array: IArray<any>, start?: number, stop?: number): void;
/**
 * Ensures a value exists within an array.  If not found, adds to the end.
 * @param array
 * @param item
 * @param {function?} equalityComparer
 * @returns {boolean}
 */
export declare function register<T>(array: IArray<T>, item: T, equalityComparer?: EqualityComparison<T>): boolean;
/**
 * Returns the first index of which the provided predicate returns true.
 * Returns -1 if always false.
 * @param array
 * @param predicate
 * @returns {number}
 */
export declare function findIndex<T>(array: IArray<T>, predicate: PredicateWithIndex<T>): number;
/**
 * Allows for using "false" to cause forEach to break.
 * Can also be applied to a structure that indexes like an array, but may not be.
 * @param source
 * @param action
 */
export declare function forEach<T>(source: IArray<T>, action: ActionWithIndex<T>): void;
export declare function forEach<T>(source: IArray<T>, action: PredicateWithIndex<T>): void;
/**
 * Is similar to Array.map() but instead of returning a new array, it updates the existing indexes.
 * Can also be applied to a structure that indexes like an array, but may not be.
 * @param target
 * @param fn
 */
export declare function applyTo<T>(target: IArray<T>, fn: SelectorWithIndex<T, T>): void;
/**
 * Removes an entry at a specified index.
 * @param array
 * @param index
 * @returns {boolean} True if the value was able to be removed.
 */
export declare function removeIndex<T>(array: T[], index: number): boolean;
/**
 * Finds and removes a value from an array.  Will remove all instances unless a maximum is specified.
 * @param array
 * @param value
 * @param max
 * @param {function?} equalityComparer
 * @returns {number} The number of times the value was found and removed.
 */
export declare function remove<T>(array: T[], value: T, max?: number, equalityComparer?: EqualityComparison<T>): number;
/**
 * Simply repeats a value the number of times specified.
 * @param element
 * @param count
 * @returns {T[]}
 */
export declare function repeat<T>(element: T, count: number): T[];
/**
 * Returns a range of numbers based upon the first value and the step value.
 * @param first
 * @param count
 * @param step
 * @returns {number[]}
 */
export declare function range(first: number, count: number, step?: number): number[];
/**
 * Returns a range of numbers based upon the first value and the step value excluding any numbers at or beyond the until value.
 * @param first
 * @param until
 * @param step
 * @returns {number[]}
 */
export declare function rangeUntil(first: number, until: number, step?: number): number[];
/**
 * Returns a unique reduced set of values.
 * @param source
 */
export declare function distinct(source: string[]): string[];
export declare function distinct(source: number[]): number[];
/**
 * Takes any arrays within an array and inserts the values contained within in place of that array.
 * For every count higher than 0 in recurseDepth it will attempt an additional pass.  Passing Infinity will flatten all arrays contained.
 * @param a
 * @param recurseDepth
 * @returns {any[]}
 */
export declare function flatten(a: any[], recurseDepth?: number): any[];
