`Record<Keys,Type>` is a Utility type in typescript. It is a much cleaner alternative for key-value pairs where property-names are not known. It's worth noting that `Record<Keys,Type>` is a named alias to {[k: Keys]: Type} where Keys and Type are generics. IMO, this makes it worth mentioning here

Alternative solution:

```ts
import { expect, it } from "vitest";

const createCache = () => {
	const cache: {[id:string;]} = {};

	const add = (id: string, value: string) => {
		cache[id] = value;
	};

	const remove = (id: string) => {
		delete cache[id];
	};

	return {
		cache,
		add,
		remove,
	};
};

it("Should add values to the cache", () => {
	const cache = createCache();

	cache.add("123", "Matt");

	expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
	const cache = createCache();

	cache.add("123", "Matt");
	cache.remove("123");

	expect(cache.cache["123"]).toEqual(undefined);
});

```