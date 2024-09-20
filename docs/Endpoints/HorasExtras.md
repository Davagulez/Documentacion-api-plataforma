# Horas Extras

En esta sección están todos los endpoints relacionados con la entidad de Horas Extras.

<!-- > Para estas rutas y las demas relacionadas a las otras entidades
> es necesario **agregar a cada ruta el token de autenticación** que se 
> obtiene **cuando se inicia sesión** en el sistema.

```json title='Token de autenticación'
    
'BearerToken':{
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA3MjQ5NjQ1LCJleHAiOjE3MDk4NDE2NDV9.hb4omt4-Gcq8QZAFY4RyGK8neR01HCTZXGE6LjMI77w
}
    
``` -->

## Endpoints

| Metodo   | URL                 | Descripcion                       |
| :------- | :------------------ | :-------------------------------- |
| `GET`    | `/api/horas_extras`        | [**Lista de solicitudes de horas extras**](#ver-usuarios)     |
| `GET`    | `/api/horas_extras/:id`    | [**Ver una solicitud**](#ver-un-usuario-específico)                |
| `POST`   | `/api/horas_extras`        | [**Crear un solicitud**](#crear-un-usuario)              |
| `PUT`    | `/api/horas_extras/:id`    | [**Actualizar una solicitd**](#actualizar-un-usuario)     |
| `DELETE` | `/api/horas_extras/:id`    | [**Borrar una solicitud**](#borrar-un-usuario)     |

### Ver Horas Extras

Esta ruta devuelve una lista con todas las solicitudes

```http title="GET"
 /api/horas_extras
```
<!-- ```http title='Ruta en desarrollo'
 http://localhost:1337/api/users
``` -->

```json title='Respuesta'
{
    "@context": "/api/contexts/HorasExtras",
    "@id": "/api/horas_extras",
    "@type": "hydra:Collection",
    "hydra:member": [
        {
            "@id": "/api/horas_extras/3",
            "@type": "HorasExtras",
            "latitud": -34.8856885,
            "longitud": -58.566968,
            "fecha": "2022-10-26T19:30:06-03:00",
            "usuario": {
                "@id": "/api/users/1",
                "@type": "User",
                "id": 1,
                "username": "gerardo"
            },
            "estado": 1,
            "firma": null,
            "responsableFirma": "Elias Melgarejo",
            "comentarioAutorizacion": null,
            "comentario": "se rompio la app",
            "horarioEntrada": "2022-10-26T10:00:00-03:00",
            "horarioSalida": "2022-10-26T18:00:00-03:00"
        },
        {
            "@id": "/api/horas_extras/4",
            "@type": "HorasExtras",
            "latitud": -34.8856885,
            "longitud": -58.566968,
            "fecha": "2022-10-28T19:30:06-03:00",
            "usuario": {
                "@id": "/api/users/1",
                "@type": "User",
                "id": 1,
                "username": "gerardo"
            },
            "estado": 1,
            "firma": null,
            "responsableFirma": "Elias Melgarejo",
            "comentarioAutorizacion": "Aprobado 4 horas desde las 10 hasta las 14",
            "comentario": "Actualizacion servidor",
            "horarioEntrada": "2022-10-27T10:00:00-03:00",
            "horarioSalida": "2022-10-27T18:00:00-03:00"
        }
    ],
    "hydra:totalItems": 2
}
```

#### Ver una Solicitud

Del mismo modo, si quiero ver una solicitud:  

```http title="GET"
 /api/horas_extras/:id
```

```json title=' respuesta'
{
    "@context": "/api/contexts/HorasExtras",
    "@id": "/api/horas_extras/3",
    "@type": "HorasExtras",
    "latitud": -34.8856885,
    "longitud": -58.566968,
    "fecha": "2022-10-26T19:30:06-03:00",
    "usuario": {
        "@id": "/api/users/1",
        "@type": "User",
        "id": 1,
        "username": "gerardo"
    },
    "estado": 1,
    "firma": null,
    "responsableFirma": "Elias Melgarejo",
    "comentarioAutorizacion": null,
    "comentario": "se rompio la app",
    "horarioEntrada": "2022-10-26T10:00:00-03:00",
    "horarioSalida": "2022-10-26T18:00:00-03:00"
}
```

### Crear una Solicitud

La ruta para crear un usuario es la siguiente :

```http title="POST"
 /api/horas_extras/
```

Para crear el usuario se necesita enviar la información correspondiente que se va a almacenar, a través del body de la consulta POST:

``` json title='body'
{
    "latitud": -34.8856885,
    "longitud": -58.566968,
    "fecha": "2022-10-26 19:30:06",
    "usuario": "/api/users/1",
    "comentario": "se rompio la app",
    "horarioEntrada": "2022-10-26 10:00:00",
    "horarioSalida": "2022-10-26 18:00:00"
}
```

Esta ruta devuelve los datos del usuario una vez que se creo con exito:
``` json title='Respuesta'
{
    "@context": "/api/contexts/HorasExtras",
    "@id": "/api/horas_extras/5",
    "@type": "HorasExtras",
    "latitud": -34.8856885,
    "longitud": -58.566968,
    "fecha": "2022-10-26T19:30:06-03:00",
    "usuario": {
        "@id": "/api/users/1",
        "@type": "User",
        "id": 1,
        "username": "gerardo"
    },
    "estado": 0,
    "firma": null,
    "responsableFirma": null,
    "comentarioAutorizacion": null,
    "comentario": "se rompio la app otra vez",
    "horarioEntrada": "2022-10-26T10:00:00-03:00",
    "horarioSalida": "2022-10-26T18:00:00-03:00"
}
```


### Actualizar la solicitud

La ruta para actualizar la solicitud es la siguiente :

```http title="PUT"
 /api/horas_extras/:id
```

la actualización solamente se usaría para aprobar la solicitud de horas extras desde la app, en este caso el body sería el siguiente:
```json title='body'
{
  "estado": 1,
  "responsableFirma":"usuario123", // solamente el string del username del usuario
  "comentarioAutorizacion":"aprobada una hora"  // opcional
}
```

Devuelve los datos actualizados del usuario una vez que se actualizo con exito:
``` json title='Respuesta'
{
    "@context": "/api/contexts/HorasExtras",
    "@id": "/api/horas_extras/5",
    "@type": "HorasExtras",
    "latitud": -34.8856885,
    "longitud": -58.566968,
    "fecha": "2022-10-26T19:30:06-03:00",
    "usuario": {
        "@id": "/api/users/1",
        "@type": "User",
        "id": 1,
        "username": "gerardo"
    },
    "estado": 1,
    "firma": null,
    "responsableFirma": "cosme fulanito",
    "comentarioAutorizacion": null,
    "comentario": "se rompio la app otra vez",
    "horarioEntrada": "2022-10-26T10:00:00-03:00",
    "horarioSalida": "2022-10-26T18:00:00-03:00"
}
```

### Borrar una solicitud

No es necesario pero esta la opcion para borrar una solicitud por si acaso :

```http title="DELETE"
 /api/horas_extras/:id
```

La respuesta es un 204 indicando que no hay contenido respecto del item con el id que borraste.