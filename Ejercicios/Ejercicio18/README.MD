# Ejercicio 18

## Descripción

1. Implementa una clase Observable que permita a otros objetos suscribirse y recibir notificaciones cuando ocurra un evento.
2. Utiliza esta clase para crear un observable que notifique a los suscriptores cuando un contador llegue a cierto valor.
   
```typescript
//1
class Observable {
    private suscriptores: Array<Function> = [];

    subscribe(suscriptor: Function) {
        this.suscriptores.push(suscriptor);
    }

    notify() {
        this.suscriptores.forEach(suscriptor => {
            suscriptor();
        });
    }
}

//2
let contador = new Observable();

contador.subscribe(() => {
    console.log("El contador ha llegado a 10.");
});

for (let i = 0; i <= 10; i++) {
    if (i === 10) {
        contador.notify();
    }
}
```