

## Console.log

Se puede dar características extra a los console.log agregando algunos parámetros

Agregar CSS a console.log

```js
console.log(
  "%c Values",
  "color: orange; font-size:1.2em; border:solid 1px red"
);
```

Agregamos un diferenciador con el método .info

```js
console.info("Info");
```

Agregamos una alerta al mostrar un console

```js
console.warn("Warning");
```

Agregamos una alerta de error

```js
console.error("Error");
```

Podemos agrager el método .table para mostrar los datos de un json como una tabla para su mejor interpretacón

::: details Datos de ejemplo en formato JSON

```js
const data = [
  { name: "Mateo", lastName: "Casas" },
  { name: "Marcos", lastName: "Torres" },
  { name: "Lucas", lastName: "Puente" },
];
```

:::

```js
console.table(data);
```

  
| (index)        | name           | lastName  |
|-------|---|---|
| 0      | Mateo |  Casas|
| 1      | Marcos      |   Torres |
| 1      | Lucas      |   Puente |
| index(2)                       |
## aa

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:
## bar

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:
