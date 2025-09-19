
# HU

## Pregunta 1 – Login con Next.js y modularización
Crea un **login** en Next.js que:
- Use un **array de usuarios** definido en otro archivo.
- Use una **interface `User`** en un archivo separado.
- Implemente la validación de credenciales en un módulo independiente que exporte una función `authenticate`.
- La página debe importar todo y mostrar un mensaje de éxito o error.

- Debe redireccionar a otra page cunado se realice el login exitoso.

---

## Pregunta 2 – Clase con CRUD y logs de servicios
Crea una **clase `UserStore`** en un archivo `utils` que:
- crea metodos para operaciones CRUD llamados: `list`, `findByName`, `create`, `update`, `remove`.
- Cada método **imprima en consola** un mensaje simulando una llamada HTTP (`GET`, `POST`, `PATCH`, `DELETE`) y luego ejecute la operación sobre el array.

---

## Pregunta 3 – Decorador que agrega propiedades
Crea un **decorador** en un archivo `utils` que:
- Se aplique al método `create` de la clase `UserStore`.
- Agregue automáticamente una o más **propiedades adicionales** a cada usuario creado (por ejemplo `role: "user"` o `createdAt`), sin tener que cambiar el código del método en cada uso.
