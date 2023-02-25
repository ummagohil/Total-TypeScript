Using objects and figuring out shape of data. 

In zod the object works similar to interface in TypeScript. Take a look at the example below. 

```ts
const PersonResult = z.object({
  name: z.tring()
});
```

This above is the same as: 

```ts
interface PersonResultType {
  name: string;
}
```

