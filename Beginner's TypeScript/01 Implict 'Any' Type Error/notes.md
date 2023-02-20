Take the following code and ensure it runs in TypeScript. It's fine at runtime but Typescript doesn't like this code and is throwing an error.

```ts
import { expect, it } from "vitest";

export const addTwoNumbers = (a, b) => {
	return a + b;
};

it("Should add the two numbers together", () => {
	expect(addTwoNumbers(2, 4)).toEqual(6);
	expect(addTwoNumbers(10, 10)).toEqual(20);
});

```

You can tell the tests are asking for numbers, thus the **types** of those variables are **numbers**. So the solution to this problem is ass follows: 

```ts
import { expect, it } from "vitest";

export const addTwoNumbers = (a: number, b: number) => {
	return a + b;
};

it("Should add the two numbers together", () => {
	expect(addTwoNumbers(2, 4)).toEqual(6);
	expect(addTwoNumbers(10, 10)).toEqual(20);
});
```

With every function you create, you must specify the type for each argument. 
