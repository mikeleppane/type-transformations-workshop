import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type ValuesMapType = {
  [K in keyof Values]: [K, Values[K]];
};

type ValuesAsUnionOfTuples = ValuesMapType[keyof Values]

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
