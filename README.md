# U2-typescript-mauricio_heredia

## 📖 Descripción

Este repositorio contiene una colección completa de **15 ejercicios prácticos** diseñados para dominar los fundamentos de TypeScript. Cada ejercicio aborda conceptos específicos del lenguaje, desde tipos básicos hasta características avanzadas como genéricos y herencia.

### 🎯 Objetivos de Aprendizaje

- Dominar el sistema de tipos de TypeScript
- Comprender interfaces y clases
- Aplicar herencia y polimorfismo
- Trabajar con genéricos y aserciones de tipo
- Desarrollar funciones con tipado estático robusto

---

## 📁 Estructura del Proyecto

```
U2-typescript-mauricio_heredia/
├── 📁 node_modules/             # Dependencias del proyecto
├── 📁 src/                      # Código fuente TypeScript
│   ├── 📄 claseBasica.ts        # Clase básica con métodos
│   ├── 📄 claseConstructor.ts   # Clase con constructor
│   ├── 📄 clasePropiedadPrivada.ts # Propiedades privadas y getters
│   ├── 📄 Enum.ts               # Enumeraciones (Enum)
│   ├── 📄 funcionTipado.ts      # Función con tipado de parámetros
│   ├── 📄 genericos(Basicos).ts # Genéricos básicos
│   ├── 📄 herenciaClases.ts     # Herencia de clases
│   ├── 📄 interfaceClases.ts    # Interfaces implementadas por clases
│   ├── 📄 interfazBasica.ts     # Interfaz Persona reutilizable
│   ├── 📄 interfazOpcional.ts   # Interfaz con propiedades opcionales
│   ├── 📄 tipadoFuncion.ts      # Función de saludo tipada
│   ├── 📄 tiposBasico.ts        # Tipos básicos (string, number, boolean)
│   ├── 📄 TiposLiterales.ts     # Tipos literales
│   ├── 📄 typeAssertions.ts     # Aserciones de tipo (Type Assertions)
│   └── 📄 unionTypes.ts         # Union Types
├── 📄 .gitignore                # Archivos ignorados por Git
├── 📄 package-lock.json         # Lock de dependencias
├── 📄 package.json              # Configuración del proyecto
├── 📄 README.md                 # Documentación del proyecto
└── 📄 tsconfig.json             # Configuración de TypeScript
```

---

## 🛠️ Requisitos del Sistema

| Herramienta    | Versión Mínima        | Instalación                                      |
| -------------- | --------------------- | ------------------------------------------------ |
| **Node.js**    | v16.0.0+              | [Descargar aquí](https://nodejs.org/)            |
| **TypeScript** | v4.0.0+               | `npm install -g typescript`                      |
| **Editor**     | VS Code (recomendado) | [Descargar aquí](https://code.visualstudio.com/) |

---

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd U2-typescript-mauricio_heredia
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Verificar TypeScript

```bash
tsc --version
```

### 4. Compilar el Proyecto

```bash
# Compilar todos los archivos TypeScript
npm run build
# o alternativamente
tsc

# Compilar en modo watch (recompila automáticamente)
tsc --watch
```

---

## ▶️ Ejecución de Ejercicios

### Compilar y Ejecutar Archivo Individual

```bash
# Compilar un archivo específico
tsc src/tiposBasico.ts

# Ejecutar el archivo JavaScript generado
node src/tiposBasico.js

# O en un solo comando
tsc src/tiposBasico.ts && node src/tiposBasico.js
```

### Compilar Todo el Proyecto

```bash
# Compilar todos los archivos
tsc

# Los archivos .js se generarán en el mismo directorio src/
```

---
