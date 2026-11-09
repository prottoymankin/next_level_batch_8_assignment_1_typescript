## Type Alias VS Interface in TypeScript

In Typescript, both `type alises` and `interface` are used to define the structure of data. They look very similar but they have some important difference.

### 1. Declaration Merging

We can declare multiple `interface` with the same name. TypeScript automatically marges them into a `single interface`. For instance -

```ts
interface Person {
  name: string;
};

interface Person {
  age: number;
};

const person: Person = {
  name: 'Alice',
  age: 24
};
```
On the other hand, we cannot declare multiple type alias with the same name. It will cause duplicate identifier error. For instance -

```ts
type Person {
  name: string;
};

// Error: Duplicate Identifier
type Person {
  age: number;
};
```
### 2. Type Flexibility

Interface is primarily used to define object structure or contract. 

```ts
interface User {
  id: number;
  name: string;
  isActive: boolean;
};
```

On the other hand, type alias is more flexible than interfaces. It can define

- Union types
- Intersection types
- Literal types
- Tuple types
- Primitive types
- Object types

```ts
type Status = 'success' | 'error';

type Id = number | string; 

type Coordiantes = [number, number];
```
For defining object structures or contracts, using interface is a better practice. We can also use type for this, but interface is usually preferred.

On the other hand, use type for union types, literal types, tuples, and complex type combinations.