Here is a different implementation of the `addTwoNumber` function:


```ts
export const addTwoNumbers = (params) => {
  return params.first + params.second
}
```

This time the function accepts a `params` object with `first` and `second` properties.

```
{
  first: 2, 
  second: 4
}
```

Other solutions:

```ts
type AddTwoNumberArgs = {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
	return params.first + params.second;
};
```

**Reminder**: Interfaces can only be used to represent objects and a couple of other data types. Type can represent anything. 

```ts
interface AddTwoNumberArgs = {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
	return params.first + params.second;
};
```

The solution above it better than casting in the function. 