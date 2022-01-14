# API SPEC

Api Specification for YouthPedia consist Users, Berita/News and Events entity.

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

## Create Berita

Request :

- Method : POST
- Endpoint : `/api/berita`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
  "total": "double",
  "user_id": "ObjectID",
  "items": [
    {
      "berita_id": "ObjectID",
      "title": "string",
      "description": "string",
      "picture": "string",
      "category": "string",
      "source": "string",
      "comment": "ArrayofComment",
      "trend": "boolean"
    }
  ]
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "berita_id": "ObjectID",
    "title": "string",
    "description": "string",
    "picture": "string",
    "category": "string",
    "source": "string",
    "comment": "ArrayofComment",
    "trend": "boolean"
  }
}
```

## Get Berita from user

Request :

- Method : GET
- Endpoint : `/api/berita/{id_user}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "berita_id": "ObjectID",
    "title": "string",
    "description": "string",
    "picture": "string",
    "category": "string",
    "source": "string",
    "comment": "ArrayofComment",
    "trend": "boolean"
  }
}
```

## Get All Berita

Request :

- Method : GET
- Endpoint : `/api/berita`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "berita_id": "ObjectID",
      "title": "string",
      "description": "string",
      "picture": "string",
      "category": "string",
      "source": "string",
      "comment": "ArrayofComment",
      "trend": "boolean"
    },
    {
      "berita_id": "ObjectID",
      "title": "string",
      "description": "string",
      "picture": "string",
      "category": "string",
      "source": "string",
      "comment": "ArrayofComment",
      "trend": "boolean"
    }
  ]
}
```

## Update berita from a user

Request :

- Method : PUT
- Endpoint : `/api/berita/{id_user}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "berita_id": "ObjectID",
  "title": "string",
  "description": "string",
  "picture": "string",
  "category": "string",
  "source": "string",
  "comment": "ArrayofComment",
  "trend": "boolean"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "berita_id": "ObjectID",
    "title": "string",
    "description": "string",
    "picture": "string",
    "category": "string",
    "source": "string",
    "comment": "ArrayofComment",
    "trend": "boolean"
  }
}
```

## Delete Berita

Request :

- Method : DELETE
- Endpoint : `/api/berita/{berita_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "berita_id": "ObjectID",
  "title": "string",
  "description": "string",
  "picture": "string",
  "category": "string",
  "source": "string",
  "comment": "ArrayofComment",
  "trend": "boolean"
}
```

# EVENT

## Create Event

Request :

- Method : POST
- Endpoint : `/api/event`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
  "total": "double",
  "user_id": "ObjectID",
  "items": [
    {
      "berita_id": "ObjectID",
      "title": "string",
      "description": "string",
      "picture": "string",
      "category": "string",
      "source": "string",
      "comment": "ArrayofComment",
      "trend": "boolean"
    }
  ]
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "total": "double",
    "user_id": "ObjectID",
    "items": [
      {
        "berita_id": "ObjectID",
        "title": "string",
        "description": "string",
        "picture": "string",
        "category": "string",
        "source": "string",
        "comment": "ArrayofComment",
        "trend": "boolean"
      }
    ]
  }
}
```

## Get Event from user

Request :

- Method : GET
- Endpoint : `/api/event/{id_event}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "total": "double",
    "user_id": "ObjectID",
    "items": [
      {
        "berita_id": "ObjectID",
        "title": "string",
        "description": "string",
        "picture": "string",
        "category": "string",
        "source": "string",
        "comment": "ArrayofComment",
        "trend": "boolean"
      }
    ]
  }
}
```

## Update Event

Request :

- Method : PUT
- Endpoint : `/api/event/{id_event}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
  "total": "double",
  "user_id": "ObjectID",
  "items": [
    {
      "berita_id": "ObjectID",
      "title": "string",
      "description": "string",
      "picture": "string",
      "category": "string",
      "source": "string",
      "comment": "ArrayofComment",
      "trend": "boolean"
    }
  ]
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "total": "double",
    "user_id": "ObjectID",
    "items": [
      {
        "berita_id": "ObjectID",
        "title": "string",
        "description": "string",
        "picture": "string",
        "category": "string",
        "source": "string",
        "comment": "ArrayofComment",
        "trend": "boolean"
      }
    ]
  }
}
```

## Delete Event

Request :

- Method : DELETE
- Endpoint : `/api/event/{id_event}`
- Header :
  - Accept: application/json

Response :

```json
{
  "berita_id": "ObjectID",
  "title": "string",
  "description": "string",
  "picture": "string",
  "category": "string",
  "source": "string",
  "comment": "ArrayofComment",
  "trend": "boolean"
}
```
