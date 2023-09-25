# Tarea 1 Pruebas de Software

## Descripción

Módulo diseñado para una automotora, permite generar una serie de automóviles con características aleatorias, filtrar estos automóviles según ciertos criterios y contactar a la agencia por un vehículo en particular.

## Características

-   Generación aleatoria de N automóviles con características específicas.
-   Filtrado de automóviles basado en precio, tipo y color.
-   Posibilidad de contactar a la agencia por un vehículo específico.
-   Contador de popularidad por vehículo que se incrementa al contactar a la agencia.
-   Funcionalidad especial para agentes que muestra la popularidad del vehículo junto con el filtrado

## Instalación

### 1. Clonar el repositorio

    git clone https://github.com/Spawnbig/tarea-1-prueb-software.git

### 2. Instalación de dependencias

    npm i

### 3. Crear base de datos

El siguiente cómando creará una base de datos sqlite en la ruta `./prisma/dev.db`

    npx prisma migrate dev --name init

### 3. Ejecución de la aplicación

Modo Desarrollo

    npm run dev

Modo producción

    npm run start

## Autores

-   Jorge Mainhard
-   Nicolas Rivas
-   Nicolas Sanhueza
