define({ "api": [
  {
    "type": "Delete",
    "url": "/carreras/:carreraID",
    "title": "DELETE Carrera.",
    "name": "DeleteCarrera",
    "group": "Carreras",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "CarreraID",
            "description": "<p>ID de la carrera.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"CarreraID\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CarreraNoEncontrada",
            "description": "<p>No hay carreras.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No se pudo eliminar la carrera.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/carrera.route.js",
    "groupTitle": "Carreras"
  },
  {
    "type": "get",
    "url": "/carreras/",
    "title": "GET Carrera.",
    "name": "GetCarrera",
    "group": "Carreras",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "CarreraID",
            "description": "<p>ID de la carrera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre de la carrera.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"CarreraID\": 1,\n  \"Nombre\": \"Ingenieria en Sistemas\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CarreraNoEncontrada",
            "description": "<p>No hay Carreras.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No hay carreras\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/carrera.route.js",
    "groupTitle": "Carreras"
  },
  {
    "type": "get",
    "url": "/carreras/:carreraID",
    "title": "GET Carrera.",
    "name": "GetCarrera",
    "group": "Carreras",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "CarreraID",
            "description": "<p>ID de la carrera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre de la carrera.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"CarreraID\": 1,\n  \"Nombre\": \"Ingenieria en Sistemas\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CarreraNoEncontrada",
            "description": "<p>No hay Carreras.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No se encontró la carrera.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/carrera.route.js",
    "groupTitle": "Carreras"
  },
  {
    "type": "post",
    "url": "/carreras/",
    "title": "POST Carrera.",
    "name": "PostCarrera",
    "group": "Carreras",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre de la carrera.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "CarreraID",
            "description": "<p>Id de la carrera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre de la carrera.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"CarreraID\": 1,\n  \"Nombre\": \"Ingenieria en Sistemas\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No se pudo ingresar la carrera.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/carrera.route.js",
    "groupTitle": "Carreras"
  },
  {
    "type": "put",
    "url": "/carreras/",
    "title": "PUT Categoría.",
    "name": "PutCarrera",
    "group": "Carreras",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CarreraID",
            "description": "<p>ID de la carrera.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>de la carrera.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Actualiza Nombre de la carrera.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"CarreraID\": 1,\n  \"Nombre\": \"Ingenieria en Sistemas\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CarreraNoEncontrada",
            "description": "<p>No hay carreras.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No se actualizó la carrera.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/carrera.route.js",
    "groupTitle": "Carreras"
  }
] });
