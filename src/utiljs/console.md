# Console

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

<!-- ::: details Datos de ejemplo en formato JSON -->

```js
const data = [
  { name: "Mateo", lastName: "Casas" },
  { name: "Marcos", lastName: "Torres" },
  { name: "Lucas", lastName: "Puente" },
];
```
 
 
 

```js
console.table(data);
```

  
| (index)        | name           | lastName  |
|-------|---|---|
| 0      | Mateo |  Casas|
| 1      | Marcos      |   Torres |
| 1      | Lucas      |   Puente |
| index(2)                       |