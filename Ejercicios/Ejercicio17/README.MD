# Ejercicio 17

## Descripción

1. Define un mapa que relacione nombres de estudiantes con sus calificaciones en un curso.
2. Escribe una función que calcule el promedio de las calificaciones de todos los estudiantes en el mapa.
   
```typescript
//1
let calificaciones = new Map<string, number>();
calificaciones.set('Manuel', 90);
calificaciones.set('Carlos', 80);
calificaciones.set('Juan', 70);
calificaciones.set('Pedro', 60);
calificaciones.set('María', 50);

//2
function promedioCalificaciones(calificaciones: Map<string, number>): number {
    let suma = 0;
    let cantidad = 0;

    for (let calificacion of calificaciones.values()) {
        suma += calificacion;
        cantidad++;
    }

    return suma / cantidad;
}

console.log(promedioCalificaciones(calificaciones));
```