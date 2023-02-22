Want to make the last name optional, so appending `?` will fix this. 

Problem:

```ts
export const getName = (params: { first: string; last: string }) => {
	if (params.last) {
		return `${params.first} ${params.last}`;
	}
	return params.first;
};
```

Solution:

```ts
export const getName = (params: { first: string; last?: string }) => {
	if (params.last) {
		return `${params.first} ${params.last}`;
	}
	return params.first;
};
```

Alternative solution:

```ts
type Params = { first: string; last?: string }

export const getName = (Params) => {
	if (params.last) {
		return `${params.first} ${params.last}`;
	}
	return params.first;
};
```

You could do the following but you would still need to pass something into `last`. 

```ts
type Params = { first: string; last: string | undefined }

export const getName = (Params) => {
	if (params.last) {
		return `${params.first} ${params.last}`;
	}
	return params.first;
};
```