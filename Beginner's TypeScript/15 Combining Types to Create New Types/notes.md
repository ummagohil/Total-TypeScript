Intersect the two interfaces - combining both rather than extending them. 

An alternative approach: 

```ts
interface User {
	id: string;
	firstName: string;
	lastName: string;
}

interface Post {
	id: string;
	title: string;
	body: string;
}

type DefaultUserAndPosts = User & { posts: Post[] } & {
  age: number
}

/**
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }
 */
export const getDefaultUserAndPosts = (): DefaultUserAndPosts => {
	return {
		id: "1",
		firstName: "Matt",
		lastName: "Pocock",
    age: 123,
		posts: [
			{
				id: "1",
				title: "How I eat so much cheese",
				body: "It's pretty edam difficult",
			},
		],
	};
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);

```