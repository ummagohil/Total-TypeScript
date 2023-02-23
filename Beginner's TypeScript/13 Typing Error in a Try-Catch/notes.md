Alternative solutions:

You can use any however it isn't ideal, especially when it comes to typos. 

```ts
import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
	try {
		if (state === "fail") {
			throw new Error("Failure!");
		}
	} catch (e:any) {
		e.message
	}
};

it("Should return the message when it fails", () => {
	expect(tryCatchDemo("fail")).toEqual("Failure!");
});
```

This one's a little bit better...

```ts
import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
	try {
		if (state === "fail") {
			throw new Error("Failure!");
		}
	} catch (e:any) {
		return (e as Error).message;
	}
};

it("Should return the message when it fails", () => {
	expect(tryCatchDemo("fail")).toEqual("Failure!");
});
```


