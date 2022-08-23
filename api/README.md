
## API Reference

### Autenticación

#### Autenticación por email

```http
  POST /api/v1/auth/login
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `body` | **Required**. correo del usuario |
| `password`      | `body` | **Required**. contraseña del usuario |


#### Autenticación por Google API
```http
  POST /api/v1/auth/google
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id_token`      | `header` | **Required**. token generado por Google|

### Usuario

#### Obtener todos los usuarios

```http
  GET /api/v1/users
```
#### 

#### Obtener un usuario
```http
  GET /api/v1/users/${id}
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id del usuario |


#### Crear nuevo usuario
```http
  POST /api/v1/users
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `body` | **Required**. nombre del usuario |
| `username`      | `body` | **Required**. alias del usuario |
| `email`      | `body` | **Required**. correo del usuario |
| `password`      | `body` | **Required**. contraseña del usuario |

#### Actualizar usuario
```http
  PUT /api/v1/users/${Id}
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id del usuario |
| `name`      | `body` | **Required**. nombre del usuario |
| `username`      | `body` | **Required**. alias del usuario |
| `email`      | `body` | **Required**. correo del usuario |
| `password`      | `body` | **Required**. contraseña del usuario |

#### Borrar un usuario
```http
  DEL /api/v1/users/${id}
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id del usuario |

#### Información del usuario
```http
  GET /api/v1/users/${id}/${userInfo}
```
| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id del usuario |

#### Detalles de userInfo
| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `bookings`      | `query` |  reservas del usuario |
| `cards`      | `query` |  tarjetas del usuario |
| `favorites`      | `query` |  favoritos del usuario |

### Restaurantes

#### Obtener todos los restaurantes

```http
  GET /api/v1/restaurants
```
#### 

#### Obtener un restaurante
```http
  GET /api/v1/restaurants/${id}
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id del restaurante |


#### Crear nuevo restaurante
```http
  POST /api/v1/restaurants
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `body` | **Required**. nombre del restaurante |
| `address`      | `body` | **Required**. dirección del restaurante |
| `description`      | `body` | **Required**. descripción del restaurante |
| `price_range`      | `body` | **Required**. Rango de precios del menu |
| `lowest_price`      | `body` | **Required**. Menor precio del menu |
| `highest_price`      | `body` | **Required**. Mayor precio del menu |
| `opening_hour`      | `body` | **Required**. hora de apertura |
| `closing_hour`      | `body` | **Required**. hora de cierre |


#### Actualizar restaurante
```http
  PUT /api/v1/restaurants/${Id}
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id del restaurante |
| `name`      | `body` | **Required**. nombre del restaurante |
| `address`      | `body` | **Required**. dirección del restaurante |
| `description`      | `body` | **Required**. descripción del restaurante |
| `lowest_price`      | `body` | **Required**. Menor precio del menu |
| `highest_price`      | `body` | **Required**. Mayor precio del menu |
| `opening_hour`      | `body` | **Required**. hora de apertura |
| `closing_hour`      | `body` | **Required**. hora de cierre |

#### Borrar un restaurante
```http
  DEL /api/v1/restaurants/${id}
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id del restaurante |

### Reservas

#### Obtener todas las reservas

```http
  GET /api/v1/bookings
```
#### 

#### Obtener una reserva
```http
  GET /api/v1/bookings/${id}
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id de la reserva |


#### Crear nueva reserva
```http
  POST /api/v1/bookings
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `clients`      | `body` | **Required**. numero de clientes |
| `time`      | `body` | **Required**. horario de la reserva |
| `date`      | `body` | **Required**. fecha de la reserva |

#### Actualizar reserva
```http
  PUT /api/v1/bookings/${Id}
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id de la reserva |
| `clients`      | `body` | **Required**. numero de clientes |
| `time`      | `body` | **Required**. horario de la reserva |
| `date`      | `body` | **Required**. fecha de la reserva |

#### Borrar una reserva
```http
  DEL /api/v1/bookings/${id}
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id de la reserva |

### Tarjetas

#### Obtener todas las tarjetas

```http
  GET /api/v1/cards
```
#### 

#### Obtener una tarjeta
```http
  GET /api/v1/cards/${id}
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id de la tarjeta |


#### Crear nueva tarjeta
```http
  POST /api/v1/cards
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `x-token`   | `header` | **Required**. token del usuario |
| `full_name`   | `body` | **Required**. nombre del usuario |
| `card_number`| `body` | **Required**. nuemro de tarjeta |
| `expires`     | `body` | **Required**. fecha de vencimiento |
| `CVV`      | `body` | **Required**. codigo de seguridad |

#### Actualizar tarjeta
```http
  PUT /api/v1/cards/${Id}
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id de la tarjeta |
| `full_name`   | `body` | **Required**. nombre del usuario |
| `card_number`| `body` | **Required**. nuemro de tarjeta |
| `expires`     | `body` | **Required**. fecha de vencimiento |
| `CVV`      | `body` | **Required**. codigo de seguridad |

#### Borrar una tarjeta
```http
  DEL /api/v1/cards/${id}
```

| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `query` | **Required**. Id de la tarjeta |

### Actualizar imagenes

##### Modelos validos:  
* users 
* restaurants
* dishes

```http
  POST /api/v1/uploads/${modelos}/${id}
```
| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `modelo`  | `query` | **Required**. tipo de modelo |
| `id`      | `query` | **Required**. Id del item |

## Favoritos

#### Agregar favorito

```http
  POST /api/v1/favorites/add/${id}
```
| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `x-token`  | `header` | **Required**. token del usuario |
| `id`      | `query` | **Required**. Id del restaurante |

#### Borrar favorito

```http
  POST /api/v1/favorites/remove/${id}
```
| Parametro | Ubicación     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `x-token`  | `header` | **Required**. token del usuario |
| `id`      | `query` | **Required**. Id del restaurante |
