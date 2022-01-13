# API SPEC

Api Specification for Toko Pintar consist Books, Users and Orders entity.

# USER

## Register

Request :

- Method : POST
- Endpoint : `/api/users`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
  "username": "string",
  "password": "hash(string)",
  "email": "string",
  "role": "string",
  "date": "Date"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "username": "string",
    "role": "string",
    "date": "Date"
  }
}
```

## Login

Request :

- Method : POST
- Endpoint : `/api/users/login`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
  "username": "string",
  "password": "hash(string)",
  "email": "string",
  "role": "string",
  "date": "Date"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "access_token": "string"
  }
}
```

## Update User

Request :

- Method : PUT
- Endpoint : `/api/users/{id_user}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "password": "hash(string)",
  "email": "string",
  "role": "string",
  "date": "Date"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "username": "string",
    "role": "string",
    "date": "Date"
  }
}
```

## Get Profile

Request :

- Method : GET
- Endpoint : `/api/users/profile`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "username": "string",
    "role": "string",
    "date": "Date"
  }
}
```

# BERITA 

# EVENT