export type TypedDirectiveContext<T> = {
  $implicit: T;
  foo: Foo<T>;
  bar: Bar<T>;
};

export type Foo<T> = {
  a: T;
  b: number
}

export type Bar<T> = {
  c: {
    d: T;
  }
  e: number
}
