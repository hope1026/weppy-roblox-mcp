# Roblox MCP

[English](../../README.md) | [한국어](../ko/README.md) | [日本語](../ja/README.md) | **Español** | [Português](../pt-br/README.md) | [Bahasa Indonesia](../id/README.md)

> Habla con la IA y se ejecuta directamente en Roblox Studio.

[![Demo](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## Funciones principales

### 1) MCP Tool: ejecuta en Studio desde lenguaje natural

El primer eje de Roblox MCP es la **ejecucion de MCP Tool**.
La IA puede manejar directamente scripts, instancias, propiedades, terreno, iluminacion, assets, audio y animacion dentro de Studio.

- "Agrega particulas + sonido + cooldown cuando el jugador salte."
- "Crea una arena de boss en el centro del mapa y coloca spawns sin colision."
- "Cambia la interfaz de este modulo y actualiza todos los scripts dependientes."

No es solo generacion de codigo. Son **acciones ejecutables orientadas a produccion**.

### 2) Sync: mantiene el contexto completo del proyecto

El segundo eje es **Project Sync**.
La IA trabaja sobre un espejo local sincronizado, asi que los cambios en multiples archivos se mantienen consistentes.

![Flujo de Sync — Studio y archivos locales sincronizados en tiempo real](../assets/screenshots/sync.png)

- Basic: sincronizacion unidireccional (Studio -> Local)
- Pro: sincronizacion bidireccional + Direction/Apply Mode por tipo + historial + multiplace

Asi mantienes claro cual es la fuente de verdad y no pierdes contexto de cambios.

## Valor inmediato para el usuario

- Comprime trabajo repetitivo: convierte muchas ediciones manuales en una sola instruccion
- Cambios relacionados en conjunto: no solo un archivo aislado
- Menor riesgo: decide cambios con estado de sync e historial
- Mejor eficiencia de tokens (Pro): menos idas y vueltas con acciones masivas

## Documentacion detallada

- [Cobertura de herramientas (Tools Overview)](tools/overview.md)
- [Guia detallada de Sync](sync/overview.md)

## Comenzar

La instalacion se completa en dos pasos:

1. **Instalar el plugin de Roblox Studio** — Hace de puente entre Studio e IA
2. **Registrar el servidor MCP en tu app de IA** — Para que la app de IA lo reconozca

Solo toma 5 minutos. 👉 [Ver guia de instalacion](installation/README.md)

## Upgrade Pro

Sync bidireccional, capacidades de creacion avanzadas y eficiencia de tokens de IA — todo en una sola actualizacion.

👉 [Guia de actualizacion Pro](pro-upgrade.md)

## Enlaces

- [GitHub](https://github.com/hope1026/roblox-mcp)
- [Reportar problemas](https://github.com/hope1026/roblox-mcp/issues)
