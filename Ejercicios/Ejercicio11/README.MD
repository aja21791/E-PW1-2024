# Ejercicio 11

## Descripción

1. Define un decorador llamado log que imprima un mensaje cada vez que se llame a un método de una clase.
2. Aplica este decorador a varios métodos de una clase y observa cómo funciona.
   
```typescript
//1
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Llamando al método ${key} con los argumentos ${args}`);
        return originalMethod.apply(this, args);
    }

    return descriptor;
}

//2

class Calculadora {
    @log
    sumar(a: number, b: number): number {
        return a + b;
    }

    @log
    restar(a: number, b: number): number {
        return a - b;
    }

    @log
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    @log
    dividir(a: number, b: number): number {
        return a / b;
    }
}

const calculadora = new Calculadora();

calculadora.sumar(2, 3);
calculadora.restar(5, 2);
calculadora.multiplicar(4, 3);
```