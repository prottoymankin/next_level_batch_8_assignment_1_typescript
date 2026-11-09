## Type Narrowing

Type Narrowing is the process of checking a variable's type and making its type more specific within a particular block of code.

It helps TypeScript to understand which type we are working with and allows us to safely access its properties and methods.

There are several ways to perform type narrowing.

### Using `typeof`

```ts
const printValue = (value: string | number) => {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
};
```

Here, TypeScript checks whether the value is string or number. If the value is string, we can use string methods. Otherwise, TypeScript knows the value is a number.

### Using the `in` operator

We use `in` operator to check whether a property exists in an object.

```ts
type Admin = {
  name: string;
  permissions: string[];
};

type Customer = {
  name: string;
  purchaseCount: number;
};

type User = Admin | Customer;

const handleUser = (user: User) => {
  if ('permissions' in user) {
    console.log(user.permissions);
  } else {
    console.log(user.purchaseCount);
  }
}
```

Here, TypeScript checks whether the `permissions` property exists in the `user` or not. If the property exists in the `user` TypeScript knows that `user` is `Admin`. Otherwise, TypeScript knows that `user` is `Customer`.

### Using `instanceof`

We use `instanceof` to check whether an object belongs to a particular class.

```ts
class Dog {
  bark() {
    console.log('Woof Woof');
  };
};

class Cat {
  meow() {
    console.log('Meow Meow');
  };
};

const makeSound = (animal: Dog | Cat) => {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

Here, TypeScript will checks whether `animal` is an instance of the `Dog` Class. If it is `true`, TypeScript knows that `animal` is `Dog`. Otherwise TypeScript knows that `animal` is `Cat`. This allows us to safely access the methods of the particular class.