

let Data = {
    "Usuarios": [
      {
        "id": 6001,
        "username": "admin_main",
        "email": "admin@escuela.edu",
        "rol": "Administrador",
        "nombre_completo": "Laura Gómez",
        "estado": "Activo"
      },
      {
        "id": 6002,
        "username": "prof_historia",
        "email": "p.historia@escuela.edu",
        "rol": "Profesor",
        "nombre_completo": "Carlos Vega",
        "asignaturas_a_cargo": [304, 305],
        "estado": "Activo"
      },
      {
        "id": 6003,
        "username": "student_sofia",
        "email": "sofia.rojas@escuela.edu",
        "rol": "Estudiante",
        "estudiante_id_ref": 1001,
        "estado": "Activo"
      },
      {
        "id": 6004,
        "username": "guest_viewer",
        "email": "guest@escuela.edu",
        "rol": "Invitado",
        "nombre_completo": "Visitante Temporal",
        "estado": "Inactivo"
      }
    ],
    "NivelesEscolares": [
      {
        "id": 1,
        "nombre": "Educación Básica",
        "descripcion": "1ro a 6to Grado"
      },
      {
        "id": 2,
        "nombre": "Educación Secundaria",
        "descripcion": "7mo a 12mo Grado"
      }
    ],
    "Grados" :[
      {
        "id": 101,
        "nivel_id": 1,
        "numero_grado": 3,
        "nombre": "Tercer Grado de Básica"
      },
      {
        "id": 202,
        "nivel_id": 2,
        "numero_grado": 11,
        "nombre": "Décimo Primero de Secundaria"
      }
    ],
    "Estudiantes" :[
      {
        "id": 1001,
        "codigo_estudiante": "EB-03-001",
        "nombre": "Sofia",
        "apellido": "Rojas",
        "fecha_nacimiento": "2016-08-20",
        "grado_id_actual": 101
      },
      {
        "id": 1002,
        "codigo_estudiante": "ES-11-005",
        "nombre": "Javier",
        "apellido": "Méndez",
        "fecha_nacimiento": "2007-03-10",
        "grado_id_actual": 202
      }
    ],
    "Asignaturas": [
      {
        "id": 301,
        "nombre": "Matemáticas Básicas",
        "grado_id": 101
      },
      {
        "id": 304,
        "nombre": "Química Orgánica",
        "grado_id": 202
      },
      {
        "id": 305,
        "nombre": "Historia Universal",
        "grado_id": 202
      }
    ],
    "Calificaciones": [
      {
        "id": 4001,
        "estudiante_id": 1001,
        "asignatura_id": 301,
        "periodo": "Primer Trimestre",
        "nota": 98.0
      },
      {
        "id": 4004,
        "estudiante_id": 1002,
        "asignatura_id": 305,
        "periodo": "Primer Parcial",
        "nota": 91.0
      }
    ],
    "Asistencia" :[
      {
        "id": 5001,
        "estudiante_id": 1001,
        "fecha": "2025-11-15",
        "asignatura_id": 301,
        "estado": "Presente"
      },
      {
        "id": 5002,
        "estudiante_id": 1002,
        "fecha": "2025-11-15",
        "asignatura_id": 304,
        "estado": "Ausente"
      }
    ]
  }

  export default Data;