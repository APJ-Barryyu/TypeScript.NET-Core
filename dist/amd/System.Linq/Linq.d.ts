/*!
 * @author electricessence / https://github.com/electricessence/
 * Original: http://linqjs.codeplex.com/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
import { DisposableBase } from "../System/Disposable/DisposableBase";
import { IEnumerator } from "../System/Collections/Enumeration/IEnumerator";
import { Action, Predicate, Selector, EqualityComparison, Comparison, Closure } from "../System/FunctionTypes";
import { IEnumerableOrArray } from "../System/Collections/IEnumerableOrArray";
import { IArray } from "../System/Collections/Array/IArray";
import { IMap, IDictionary } from "../System/Collections/Dictionaries/IDictionary";
import { Comparable } from "../System/IComparable";
import { IInfiniteEnumerable, ILinqEnumerable, IFiniteEnumerable, ILookup, IOrderedEnumerable, IGrouping, EnumerableAction } from "./Enumerable";
export declare class InfiniteEnumerable<T> extends DisposableBase implements IInfiniteEnumerable<T> {
    protected _enumeratorFactory: () => IEnumerator<T>;
    constructor(_enumeratorFactory: () => IEnumerator<T>, finalizer?: Closure | null);
    protected _isEndless: boolean | undefined;
    readonly isEndless: boolean | undefined;
    getEnumerator(): IEnumerator<T>;
    protected _onDispose(): void;
    asEnumerable(): this;
    doAction(action: Action<T> | Predicate<T> | Selector<T, number> | Selector<T, EnumerableAction>, initializer?: Closure | null, isEndless?: boolean | null | undefined): this;
    force(): void;
    skip(count: number): this;
    take(count: number): FiniteEnumerable<T>;
    elementAt(index: number): T;
    elementAtOrDefault(index: number): T | undefined;
    elementAtOrDefault(index: number, defaultValue: T): T;
    first(): T;
    firstOrDefault(): T | undefined;
    firstOrDefault(defaultValue: T): T;
    single(): T;
    singleOrDefault(): T | undefined;
    singleOrDefault(defaultValue: T): T;
    any(): boolean;
    isEmpty(): boolean;
    traverseBreadthFirst(childrenSelector: (element: T) => IEnumerableOrArray<T> | null | undefined): Enumerable<T>;
    traverseBreadthFirst<TNode>(childrenSelector: (element: T | TNode) => IEnumerableOrArray<TNode> | null | undefined): Enumerable<TNode>;
    traverseBreadthFirst<TResult>(childrenSelector: (element: T) => IEnumerableOrArray<T> | null | undefined, resultSelector?: (element: T, nestLevel?: number) => TResult): Enumerable<TResult>;
    traverseBreadthFirst<TNode, TResult>(childrenSelector: (element: T | TNode) => IEnumerableOrArray<TNode> | null | undefined, resultSelector?: (element: TNode, nestLevel?: number) => TResult): Enumerable<TResult>;
    traverseDepthFirst(childrenSelector: (element: T) => IEnumerableOrArray<T> | null | undefined): Enumerable<T>;
    traverseDepthFirst<TNode>(childrenSelector: (element: T | TNode) => IEnumerableOrArray<TNode> | null | undefined): Enumerable<TNode>;
    traverseDepthFirst<TResult>(childrenSelector: (element: T) => IEnumerableOrArray<T> | null | undefined, resultSelector?: (element: T, nestLevel?: number) => TResult): Enumerable<TResult>;
    traverseDepthFirst<TNode, TResult>(childrenSelector: (element: T | TNode) => IEnumerableOrArray<TNode> | null | undefined, resultSelector?: (element: TNode, nestLevel?: number) => TResult): Enumerable<TResult>;
    flatten(): Enumerable<any>;
    pairwise<TSelect>(selector: (prev: T, current: T) => TSelect): Enumerable<TSelect>;
    scan(func: (a: T, b: T) => T, seed?: T): this;
    select<TResult>(selector: Selector<T, TResult>): InfiniteEnumerable<TResult>;
    protected _selectMany<TElement, TResult>(collectionSelector: Selector<T, IEnumerableOrArray<TElement> | null | undefined>, resultSelector?: (collection: T, element: TElement) => TResult): Enumerable<TResult>;
    selectMany<TResult>(collectionSelector: Selector<T, IEnumerableOrArray<TResult> | null | undefined>): InfiniteEnumerable<TResult>;
    selectMany<TElement, TResult>(collectionSelector: Selector<T, IEnumerableOrArray<TElement> | null | undefined>, resultSelector: (collection: T, element: TElement) => TResult): InfiniteEnumerable<TResult>;
    protected _choose<TResult>(selector: Selector<T, TResult>): Enumerable<TResult>;
    choose(): InfiniteEnumerable<T>;
    choose<TResult>(selector?: Selector<T, TResult>): InfiniteEnumerable<TResult>;
    where(predicate: Predicate<T>): this;
    ofType<TType>(type: {
        new (...params: any[]): TType;
    }): InfiniteEnumerable<TType>;
    except<TCompare>(second: IEnumerableOrArray<T>, compareSelector?: Selector<T, TCompare>): this;
    distinct(compareSelector?: (value: T) => T): this;
    distinctUntilChanged<TCompare>(compareSelector?: Selector<T, TCompare>): this;
    defaultIfEmpty(defaultValue?: T): this;
    zip<TSecond, TResult>(second: IEnumerableOrArray<TSecond>, resultSelector: (first: T, second: TSecond, index?: number) => TResult): Enumerable<TResult>;
    zipMultiple<TSecond, TResult>(second: IArray<IEnumerableOrArray<TSecond>>, resultSelector: (first: T, second: TSecond, index?: number) => TResult): Enumerable<TResult>;
    join<TInner, TKey, TResult, TCompare>(inner: IEnumerableOrArray<TInner>, outerKeySelector: Selector<T, TKey>, innerKeySelector: Selector<TInner, TKey>, resultSelector: (outer: T, inner: TInner) => TResult, compareSelector?: Selector<TKey, TCompare>): Enumerable<TResult>;
    groupJoin<TInner, TKey, TResult, TCompare>(inner: IEnumerableOrArray<TInner>, outerKeySelector: Selector<T, TKey>, innerKeySelector: Selector<TInner, TKey>, resultSelector: (outer: T, inner: TInner[]) => TResult, compareSelector?: Selector<TKey, TCompare>): Enumerable<TResult>;
    merge(enumerables: IArray<IEnumerableOrArray<T>>): this;
    concat(...enumerables: Array<IEnumerableOrArray<T>>): this;
    union<TCompare>(second: IEnumerableOrArray<T>, compareSelector?: Selector<T, TCompare>): this;
    insertAt(index: number, other: IEnumerableOrArray<T>): this;
    alternateMultiple(sequence: IEnumerableOrArray<T>): this;
    alternateSingle(value: T): this;
    alternate(...sequence: T[]): this;
    catchError(handler: (e: any) => void): this;
    finallyAction(action: Closure): this;
    buffer(size: number): InfiniteEnumerable<T[]>;
    share(): this;
}
export declare class Enumerable<T> extends InfiniteEnumerable<T> implements ILinqEnumerable<T> {
    constructor(enumeratorFactory: () => IEnumerator<T>, finalizer?: Closure | null, isEndless?: boolean);
    static from<T>(source: IEnumerableOrArray<T>): Enumerable<T>;
    static fromAny<T>(source: IEnumerableOrArray<T>): Enumerable<T>;
    static fromAny(source: any): Enumerable<any>;
    static fromAny<T>(source: IEnumerableOrArray<T>, defaultEnumerable: Enumerable<T>): Enumerable<T>;
    static fromOrEmpty<T>(source: IEnumerableOrArray<T>): Enumerable<T>;
    static toArray<T>(source: IEnumerableOrArray<T>): T[];
    static choice<T>(values: IArray<T>): InfiniteEnumerable<T>;
    static chooseFrom<T>(...args: T[]): InfiniteEnumerable<T>;
    static cycle<T>(values: IArray<T>): InfiniteEnumerable<T>;
    static cycleThrough<T>(...args: T[]): InfiniteEnumerable<T>;
    static empty<T>(): FiniteEnumerable<T>;
    static repeat<T>(element: T): InfiniteEnumerable<T>;
    static repeat<T>(element: T, count: number): FiniteEnumerable<T>;
    static repeatWithFinalize<T>(initializer: () => T, finalizer: (element: T) => void): InfiniteEnumerable<T>;
    static make<T>(element: T): FiniteEnumerable<T>;
    static range(start: number, count: number, step?: number): FiniteEnumerable<number>;
    static rangeDown(start: number, count: number, step?: number): FiniteEnumerable<number>;
    static toInfinity(start?: number, step?: number): InfiniteEnumerable<number>;
    static toNegativeInfinity(start?: number, step?: number): InfiniteEnumerable<number>;
    static rangeTo(start: number, to: number, step?: number): FiniteEnumerable<number>;
    static matches(input: string, pattern: any, flags?: string): FiniteEnumerable<RegExpExecArray>;
    static generate<T>(factory: (index?: number) => T): InfiniteEnumerable<T>;
    static generate<T>(factory: (index?: number) => T, count: number): FiniteEnumerable<T>;
    static unfold<T>(seed: T, valueFactory: Selector<T, T>, skipSeed?: Boolean): InfiniteEnumerable<T>;
    static forEach<T>(enumerable: IEnumerableOrArray<T>, action: (element: T, index?: number) => any, max?: number): number;
    static map<T, TResult>(enumerable: IEnumerableOrArray<T>, selector: Selector<T, TResult>): TResult[];
    static max(values: FiniteEnumerable<number>): number;
    static min(values: FiniteEnumerable<number>): number;
    static weave<T>(enumerables: IEnumerableOrArray<IEnumerableOrArray<T>>): Enumerable<T>;
    asEnumerable(): this;
    skipWhile(predicate: Predicate<T>): this;
    takeWhile(predicate: Predicate<T>): this;
    takeUntil(predicate: Predicate<T>, includeUntilValue?: boolean): this;
    forEach(action: Predicate<T> | Action<T>): void;
    toArray(predicate?: Predicate<T>): T[];
    copyTo(target: T[], index?: number, count?: number): T[];
    toLookup<TKey, TValue, TCompare>(keySelector: Selector<T, TKey>, elementSelector?: Selector<T, TValue>, compareSelector?: Selector<TKey, TCompare>): ILookup<TKey, TValue>;
    toMap<TResult>(keySelector: Selector<T, string>, elementSelector: Selector<T, TResult>): IMap<TResult>;
    toDictionary<TKey, TValue, TCompare>(keySelector: Selector<T, TKey>, elementSelector: Selector<T, TValue>, compareSelector?: Selector<TKey, TCompare>): IDictionary<TKey, TValue>;
    toJoinedString(separator?: string, selector?: Selector<T, string>): string;
    takeExceptLast(count?: number): this;
    skipToLast(count: number): this;
    select<TResult>(selector: Selector<T, TResult>): Enumerable<TResult>;
    selectMany<TResult>(collectionSelector: Selector<T, IEnumerableOrArray<TResult> | null | undefined>): Enumerable<TResult>;
    selectMany<TElement, TResult>(collectionSelector: Selector<T, IEnumerableOrArray<TElement> | null | undefined>, resultSelector: (collection: T, element: TElement) => TResult): Enumerable<TResult>;
    choose(): Enumerable<T>;
    choose<TResult>(selector?: Selector<T, TResult>): Enumerable<TResult>;
    reverse(): this;
    shuffle(): this;
    count(predicate?: Predicate<T>): number;
    all(predicate: Predicate<T>): boolean;
    every(predicate: Predicate<T>): boolean;
    any(predicate?: Predicate<T>): boolean;
    some(predicate: Predicate<T>): boolean;
    contains<TCompare>(value: T, compareSelector?: Selector<T, TCompare>): boolean;
    indexOf<TCompare>(value: T, compareSelector?: Selector<T, TCompare>): number;
    lastIndexOf<TCompare>(value: T, compareSelector?: Selector<T, TCompare>): number;
    intersect<TCompare>(second: IEnumerableOrArray<T>, compareSelector?: Selector<T, TCompare>): this;
    sequenceEqual(second: IEnumerableOrArray<T>, equalityComparer?: EqualityComparison<T>): boolean;
    ofType<TType>(type: {
        new (...params: any[]): TType;
    }): Enumerable<TType>;
    orderBy<TKey extends Comparable>(keySelector?: Selector<T, TKey>): IOrderedEnumerable<T>;
    orderUsing(comparison: Comparison<T>): IOrderedEnumerable<T>;
    orderUsingReversed(comparison: Comparison<T>): IOrderedEnumerable<T>;
    orderByDescending<TKey extends Comparable>(keySelector?: Selector<T, TKey>): IOrderedEnumerable<T>;
    buffer(size: number): Enumerable<T[]>;
    groupBy<TKey>(keySelector: Selector<T, TKey>): Enumerable<IGrouping<TKey, T>>;
    groupBy<TKey, TCompare>(keySelector: Selector<T, TKey>, elementSelector?: Selector<T, T>, compareSelector?: Selector<TKey, TCompare>): Enumerable<IGrouping<TKey, T>>;
    partitionBy<TKey>(keySelector: Selector<T, TKey>): Enumerable<IGrouping<TKey, T>>;
    partitionBy<TKey, TElement, TCompare>(keySelector: Selector<T, TKey>, elementSelector: Selector<T, TElement>, resultSelector?: (key: TKey, element: TElement[]) => IGrouping<TKey, TElement>, compareSelector?: Selector<TKey, TCompare>): Enumerable<IGrouping<TKey, TElement>>;
    aggregate(func: (a: T, b: T) => T, seed?: T): T | undefined;
    average(selector?: Selector<T, number>): number;
    max(): T | undefined;
    min(): T | undefined;
    maxBy<TCompare>(keySelector?: Selector<T, TCompare>): T | undefined;
    minBy<TCompare>(keySelector?: Selector<T, TCompare>): T | undefined;
    sum(selector?: Selector<T, number>): number;
    product(selector?: Selector<T, number>): number;
    quotient(selector?: Selector<T, number>): number;
    last(): T;
    lastOrDefault(): T | undefined;
    lastOrDefault(defaultValue: T): T;
    memoize(): this;
}
export declare class FiniteEnumerable<T> extends Enumerable<T> implements IFiniteEnumerable<T> {
    constructor(enumeratorFactory: () => IEnumerator<T>, finalizer?: Closure);
}
export default Enumerable;
