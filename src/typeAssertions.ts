let value: any = 123;
let strLength: number = (<string>value).length; // Error en tiempo de ejecución
// Mejor usar:
let strLength2: number = (value as string).length; // Error en tiempo de ejecución
//  Esto dará error porque 123 no tiene propiedad .length.
// Solo es un ejemplo de sintaxis.
