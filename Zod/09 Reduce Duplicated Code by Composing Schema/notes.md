Use extend like in TypeScript interfaces.

You can also use merge.

```ts
const id = z.object({
	id: z.string().uuid(),
});

const User = id.merge({
  z.object({
	  name: z.string(),
  })
});

const Post = id.merge({
  z.object({
    title: z.string(),
	  body: z.string(),
  })
});

const Comment = id.merge({
  z.object({
    text: z.string(),
  })
});
```