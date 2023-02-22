Make sure one of the params in the interface is specific. 

Altnerative solution:

```ts
interface User {
	id: number;
	firstName: string;
	lastName: string;
	/**
	 * How do we ensure that role is only one of:
	 * - 'admin'
	 * - 'user'
	 * - 'super-admin'
	 */
	role: "admin" | "user" | SuperAdmin | { wow: boolean };
}

type SuperAdmin = "super-admin";

export const defaultUser: User = {
	id: 1,
	firstName: "Matt",
	lastName: "Pocock",
	role: "super-admin",
};
```