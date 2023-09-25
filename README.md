# Tarea 1 Pruebas de Software

## Descripción

API Rest Automotora.
Módulo diseñado para generar una serie de automóviles con características aleatorias, filtrar estos automóviles según ciertos criterios y contactar a la agencia por un vehículo en particular.

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

### 3. Ejecución de la aplicación

La ejecución de la aplicación migra la base de datos en cualquiera de los cambios del esquema, en caso de no existir la base de datos la crea en la ruta `./prisma/dev.db`.

Modo Desarrollo

    npm run dev

Modo producción

    npm run start

## 4. Uso

Una vez iniciado el módulo es posible acceder desde `localhost:4000`, puerto configurado por omisión desde `src/config/env_settings,js`.

### Generación de Vehículos

Genera una lista de N automóviles con las características descritas en `constants.js`

    /generator/:numberOfVehicles

El siguiente comando genera 150 vehículos

    /generator/150

``

``

-   Filtrado de automóviles basado en precio, tipo y color.
-   Posibilidad de contactar a la agencia por un vehículo específico.
-   Contador de popularidad por vehículo que se incrementa al contactar a la agencia.
-   Funcionalidad especial para agentes que muestra la popularidad del vehículo junto con el filtrado

## Autores

-   Jorge Mainhard
-   Nicolas Rivas
-   Nicolas Sanhueza
