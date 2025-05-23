/**
 * Q1
 */
type IsString<T> = T extends string ? true : false;
type A = IsString<string>;
type B = IsString<1>;
type C = IsString<"hello">;

/**
 * Q2
 */
type ElementType<T> = T extends (infer T)[] ? T : never;

type D = ElementType<number[]>;
type F = ElementType<string[]>;
type G = ElementType<boolean>;

/**
 * Q3
 */
type Flatten<T> = T extends (infer U)[] ? U : T;

type H = Flatten<string[]>;
type I = Flatten<number[] | boolean[]>;
type J = Flatten<null>;

/**
 * Q4
 */
type ReturnTypeOf<T> = T extends (...arg: infer _) => infer S ? S : never;

type K = ReturnTypeOf<() => number>; // number
type L = ReturnTypeOf<(x: string) => boolean>; // boolean
type M = ReturnTypeOf<string>;
