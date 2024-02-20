# Usuarios

En esta sección están todos los endpoints relacionados con la entidad del usuario, sin tener en cuenta la forma que maneja a los usuarios el sistema de strapi.

> Para estas rutas y las demas relacionadas a las otras entidades
> es necesario **agregar a cada ruta el token de autenticación** que se 
> obtiene **cuando se inicia sesión** en el sistema.

```json title='Token de autenticación'
    
'BearerToken':{
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA3MjQ5NjQ1LCJleHAiOjE3MDk4NDE2NDV9.hb4omt4-Gcq8QZAFY4RyGK8neR01HCTZXGE6LjMI77w
}
    
```

## Endpoints

| Metodo   | URL                 | Descripcion                       |
| :------- | :------------------ | :-------------------------------- |
| `GET`    | `/api/users`        | [**Ver una lista de usuarios**](#ver-usuarios)     |
| `GET`    | `/api/users/:id`    | [**Ver un usuario**](#ver-un-usuario-específico)                |
| `POST`   | `/api/users`        | [**Crear un usuario**](#crear-un-usuario)              |
| `PUT`    | `/api/users/:id`    | [**Editar un usuario**](#actualizar-un-usuario)     |
| `DELETE` | `/api/users/:id`    | [**Borrar un usuario**](#borrar-un-usuario)     |

### Ver Usuarios

Esta ruta devuelve una lista con todos los usuarios

```http title="GET"
 /api/users
```
```http title='Ruta en desarrollo'
 http://localhost:1337/api/users
```

```json title='Respuesta'
    [
  {
    "id": 1,
    "username": "prueba3",
    "email": "prueba1@hotmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "dni": "124578963",
    "direccion": "calle123",
    "createdAt": "2024-01-26T16:35:02.832Z",
    "updatedAt": "2024-01-26T16:35:02.832Z",
    "nombre": null,
    "apellido": null
  },
  {
    "id": 3,
    "username": "prueba4",
    "email": "prueba2@hotmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "dni": "124578964",
    "direccion": "calle123",
    "createdAt": "2024-01-26T18:03:07.402Z",
    "updatedAt": "2024-01-26T18:10:31.413Z",
    "nombre": "nombrecambiado123",
    "apellido": "apellidocambiado123"
  },
  {
    "id": 5,
    "username": "prueba5",
    "email": "prueba5@hotmail.com",
    "provider": "local",
    "confirmed": false,
    "blocked": false,
    "dni": "124578965",
    "direccion": "calle123",
    "createdAt": "2024-01-31T11:45:38.918Z",
    "updatedAt": "2024-01-31T11:45:51.579Z",
    "nombre": "nombrecambiado123",
    "apellido": "apellidocambiado123"
  },
  {
    "id": 6,
    "username": "prueba6",
    "email": "prueba6@hotmail.com",
    "provider": "local",
    "confirmed": false,
    "blocked": false,
    "dni": "124578969",
    "direccion": "calle123",
    "createdAt": "2024-01-31T16:47:16.993Z",
    "updatedAt": "2024-01-31T16:47:16.993Z",
    "nombre": "nombrecambiado123",
    "apellido": "apellidocambiado123"
  }
]
```

#### Ver un Usuario Específico

Del mismo modo, si quiero ver un usuario en específico se agrega el identificador único a la ruta:  

```http title="GET"
 /api/users/:id
```
```http title='Ruta en desarrollo'
 http://localhost:1337/api/users/1
```

```json title=' respuesta'
{
  "id": 3,
  "username": "prueba4",
  "email": "prueba2@hotmail.com",
  "provider": "local",
  "confirmed": true,
  "blocked": false,
  "dni": "124578964",
  "direccion": "calle123",
  "createdAt": "2024-01-26T18:03:07.402Z",
  "updatedAt": "2024-01-26T18:10:31.413Z",
  "nombre": "nombrecambiado123",
  "apellido": "apellidocambiado123"
}
```

### Crear un Usuario

La ruta para crear un usuario es la siguiente :

```http title="POST"
 /api/users/
```

```http title='Ruta en desarrollo'
 http://localhost:1337/api/users
```

Para crear el usuario se necesita enviar la información correspondiente que se va a almacenar, a través del body de la consulta POST:

``` json title='body'
    {
        "username": "prueba7",
        "email": "prueba7@hotmail.com",
        "password":"123456",
        "dni": "124578970",
        "direccion": "calle123",
        "nombre": "nombrecambiado123",
        "apellido": "apellidocambiado123",
        "role":"2"
    }
```
donde todos esos valores del body son datos del usuario en si, y **"role"** es una clasificación de strapi para diferenciar a los usuarios del sistema.

Esta ruta devuelve los datos del usuario una vez que se creo con exito:
``` json title='Respuesta'
{
  "id": 7,
  "username": "prueba7",
  "email": "prueba7@hotmail.com",
  "provider": "local",
  "confirmed": false,
  "blocked": false,
  "dni": "124578970",
  "direccion": "calle123",
  "createdAt": "2024-02-20T13:09:32.985Z",
  "updatedAt": "2024-02-20T13:09:32.985Z",
  "nombre": "nombrecambiado123",
  "apellido": "apellidocambiado123",
  "role": {
    "id": 2,
    "name": "Public",
    "description": "Default role given to unauthenticated user.",
    "type": "public",
    "createdAt": "2024-01-26T14:46:35.085Z",
    "updatedAt": "2024-01-26T14:46:35.085Z"
  }
}
```


### Actualizar un Usuario

La ruta para actualizar un usuario es la siguiente :

```http title="PUT"
 /api/users/:id
```

```http title='Ruta en desarrollo'
 http://localhost:1337/api/users/5
```

De la misma forma que el metodo POST, para actualizar se necesita la información correspondiente a través del body: 
```json title='body'
{
  "nombre":"nombrecambiado123",
  "apellido":"apellidocambiado123",
  "role":"1"
}
```

Devuelve los datos actualizados del usuario una vez que se actualizo con exito:
``` json title='Respuesta'
{
  "id": 5,
  "username": "prueba5",
  "email": "prueba5@hotmail.com",
  "provider": "local",
  "confirmed": false,
  "blocked": false,
  "dni": "124578965",
  "direccion": "calle123",
  "createdAt": "2024-01-31T11:45:38.918Z",
  "updatedAt": "2024-02-20T14:03:46.060Z",
  "nombre": "nombrecambiado123",
  "apellido": "apellidocambiado123",
  "role": {
    "id": 1,
    "name": "Authenticated",
    "description": "Default role given to authenticated user.",
    "type": "authenticated",
    "createdAt": "2024-01-26T14:46:35.078Z",
    "updatedAt": "2024-02-08T12:34:28.159Z"
  }
```

### Borrar un Usuario

La ruta para borrar un usuario es la siguiente :

```http title="DELETE"
 /api/users/:id
```

```http title='Ruta en desarrollo'
 http://localhost:1337/api/users/5
```

Una vez eliminado el usuario, la ruta nos devuelve los datos del usuario eliminado:
```json title='Respuesta'
{
  "id": 5,
  "username": "prueba5",
  "email": "prueba5@hotmail.com",
  "provider": "local",
  "confirmed": false,
  "blocked": false,
  "dni": "124578965",
  "direccion": "calle123",
  "createdAt": "2024-01-31T11:45:38.918Z",
  "updatedAt": "2024-02-20T14:03:46.060Z",
  "nombre": "nombrecambiado123",
  "apellido": "apellidocambiado123"
}
```