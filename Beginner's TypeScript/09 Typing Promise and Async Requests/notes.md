This is the only way to represent a Promise in TypeScript. 

Alternative Solutions:

```ts
interface LukeSkywalker {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
}

export const fetchLukeSkywalker = async () => {
	const data: LukeSkyWalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
		return res.json();
	});

	return data;
};
```

The better way to it, as TypeScript doesn't know what we are returning is to do the following:

```ts
interface LukeSkywalker {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
}

export const fetchLukeSkywalker = async () => {
	const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
		return res.json();
	});

	return data as LukeSkyWalker; // casting data to LukeSkyWalker
};
```