import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface baseCase {
	id: string;
}

interface User extends baseCase {
	firstName: string;
	lastName: string;
}

interface Post extends baseCase {
	title: string;
	body: string;
}

interface Comment extends baseCase {
	comment: string;
}

type tests = [
	Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
	Expect<Equal<Post, { id: string; title: string; body: string }>>,
	Expect<Equal<Comment, { id: string; comment: string }>>,
];
