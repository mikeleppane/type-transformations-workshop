import { Equal, Expect } from "../helpers/type-utils";

type Maybe<T> = T extends string | number | boolean | null ? T | null | undefined : never;

type tests = [
  Expect<Equal<Maybe<string>, string | null | undefined>>,
  Expect<Equal<Maybe<number>, number | null | undefined>>,
  Expect<Equal<Maybe<boolean>, boolean | null | undefined>>,
  Expect<Equal<Maybe<null>, null | undefined>>,
];
