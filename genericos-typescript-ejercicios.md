# Genéricos en TypeScript

Los **genéricos** en TypeScript permiten crear **funciones, interfaces o
clases reutilizables** que funcionan con diferentes tipos de datos
**manteniendo el tipado**.\
En lugar de escribir una función para cada tipo (por ejemplo una para
`number` y otra para `string`), los genéricos usan un **parámetro de
tipo** que se reemplaza en tiempo de compilación.

------------------------------------------------------------------------

##  ¿Qué es un genérico?

Un genérico se declara con `<>` después del nombre de la función, clase
o interfaz.\
Por convención se usa la letra **T** (de *Type*), pero puede ser
cualquier nombre.

Ejemplo básico:

``` typescript
function identity<T>(value: T): T {
  return value;
}

// Uso
const num = identity<number>(10);    // num es number
const text = identity<string>("Hola"); // text es string
```

### Explicación

-   `<T>`: indica que la función es genérica y acepta un tipo `T`.
-   `value: T`: el parámetro `value` será del tipo `T`.
-   `: T`: la función retorna un valor del tipo `T`.

✅ Así no es necesario crear una función diferente para cada tipo de
dato.

> **Tip:** TypeScript puede inferir el tipo automáticamente:
>
> ``` typescript
> const auto = identity(5);      // T = number
> const autoText = identity("hi"); // T = string
> ```

------------------------------------------------------------------------

##  Ejemplo con función flecha

También podemos escribir funciones genéricas con **arrow functions**.\
Aquí un ejemplo que devuelve el primer elemento de un array.

``` typescript
// Función flecha genérica
const firstElement = <T,>(array: T[]): T => {
  return array[0];
};

// Uso
const firstNumber = firstElement([10, 20, 30]); // number
const firstText = firstElement(["hola", "mundo"]); // string

console.log(firstNumber); // 10
console.log(firstText);   // "hola"
```

### Explicación

-   `<T,>`: se define el genérico T (la coma final es una práctica común
    para evitar conflictos de sintaxis en JSX).
-   `array: T[]`: el parámetro `array` es un array de elementos del tipo
    T.
-   `T`: el retorno será del mismo tipo del array.

------------------------------------------------------------------------

##  Ventajas de usar genéricos

-   **Reutilización:** una sola función sirve para muchos tipos de
    datos.
-   **Tipado seguro:** el compilador sabe qué tipo de dato se usa.
-   **Flexibilidad:** permite combinar con otros tipos o restricciones.

------------------------------------------------------------------------

##  Ejercicios para practicar

###  Ejercicio 1 -- Crear una función `lastElement`

Crea una función genérica llamada **`lastElement`** que: - Reciba un
array de cualquier tipo. - Devuelva el **último elemento** del array.

Por ejemplo:

``` typescript
const lastNumber = lastElement([1, 2, 3]); // 3
const lastText = lastElement(["uno", "dos", "tres"]); // "tres"
```


------------------------------------------------------------------------

###  Ejercicio 2 -- Crear una función `reverseArray`

Crea una función genérica llamada **`reverseArray`** que: - Reciba un
array de cualquier tipo (`number[]`, `string[]`, etc.). - Devuelva un
**nuevo array** con los elementos en orden inverso.

Por ejemplo:

``` typescript
const reversedNumbers = reverseArray([1, 2, 3]); 
// [3, 2, 1]

const reversedWords = reverseArray(["uno", "dos", "tres"]); 
// ["tres", "dos", "uno"]
```



------------------------------------------------------------------------

###  Ejercicio 3 -- Crear una función `wrapInTripleArray`

Crea una función genérica llamada **`wrapInTripleArray`** que: - Reciba
un valor de cualquier tipo. - Devuelva un **array de 3 elementos**,
todos con el mismo valor recibido.

Por ejemplo:

``` typescript
const tripleNumber = wrapInTripleArray(5); 
// [5, 5, 5]

const tripleText = wrapInTripleArray("A"); 
// ["A", "A", "A"]
```



------------------------------------------------------------------------


