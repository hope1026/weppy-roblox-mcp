# Changelog

> Registra todos los cambios realizados por la IA en Roblox Studio por sesion, y proporciona resumen de cambios, linea de tiempo y Before & After.

![Changelog — lista de tarjetas de cambios por sesion](../../assets/screenshots/dashboard/dashboard_changelog1.png)

## Descripcion general

Changelog es la pagina que rastrea el historial de cambios del juego realizados por el agente de IA en Studio. Los cambios se agrupan por sesion, y se puede ver de un vistazo cuantos cambios de cada tipo ocurrieron en cada sesion.

## Lista de tarjetas de sesion

La pantalla inicial de Changelog muestra una lista de tarjetas por sesion.

### Estado de sesion

Cada tarjeta de sesion muestra un estado:

| Estado | Significado |
|--------|-------------|
| **Active** | Sesion en curso (actualizacion en tiempo real) |
| **Completed** | Sesion completada |
| **Bootstrap** | Sesion de sincronizacion inicial |

### Resumen de sesion

Cada tarjeta muestra un resumen del numero de cambios por categoria de la sesion correspondiente:

- Script — numero de scripts creados/modificados
- Instance — numero de instancias creadas/eliminadas/movidas
- Property — numero de cambios de propiedades
- Lighting — numero de cambios de iluminacion/entorno
- Terrain — numero de cambios de terreno
- Asset — numero de assets insertados

### Pestanas de filtro

Las pestanas superiores permiten filtrar sesiones:
- **All** — todas las sesiones
- **Active** — solo sesiones en curso
- **Completed** — solo sesiones completadas

## Vista detallada de sesion

Al hacer clic en una tarjeta de sesion se accede a la vista detallada.

![Vista detallada de Changelog — resumen de cambios, linea de tiempo, Before & After](../../assets/screenshots/dashboard/dashboard_changelog2.png)

### Change Summary

Visualiza los cambios de la sesion en 6 tarjetas de categoria:

| Categoria | Icono | Descripcion |
|-----------|-------|-------------|
| Scripts | Script | Numero de scripts creados/modificados |
| Instances | Instancia | Numero de instancias creadas/eliminadas/movidas |
| Properties | Propiedad | Numero de cambios de propiedades |
| Lighting | Iluminacion | Numero de cambios de iluminacion/entorno |
| Terrain | Terreno | Numero de cambios de terreno |
| Assets | Asset | Numero de assets insertados |

### Change Timeline

Lista todos los cambios de la sesion en orden cronologico.

- Cada elemento muestra marca de tiempo, etiqueta de categoria de cambio y ruta del objetivo
- El desplegable **Category** permite filtrar por una categoria especifica
- Al hacer clic en un elemento se despliega la vista comparativa Before & After

### Before & After

Compara los datos antes y despues del cambio. Proporciona diferentes niveles de informacion segun el tipo de cambio:

| Confiabilidad | Significado | Ejemplo |
|---------------|-------------|---------|
| **exact** | Los valores antes y despues del cambio estan registrados con exactitud | Cambio de propiedad, modificacion de script |
| **partial** | Solo se registra informacion parcial | Cambios compuestos |
| **after-only** | Solo existe el valor posterior al cambio | Creacion de nueva instancia |
| **intent-only** | Solo se registra la intencion | Eliminacion, etc. |

## Casos de uso

### Verificacion de trabajo

```
"Quiero comprobar que scripts modifico la IA hace un momento"
```

Filtrando la categoria Script de la sesion Active en el Changelog, se puede ver la lista de scripts modificados y comparar el codigo antes y despues.

### Seguimiento de cambios

```
"Quiero revisar como se configuro el Lighting en la sesion de ayer"
```

Busca la sesion correspondiente en la pestana Completed y filtra por la categoria Lighting para ver el historial de cambios y los valores de configuracion.

### Depuracion de problemas

```
"Necesito encontrar en que momento se elimino una instancia especifica"
```

Filtra por la categoria Instance en la linea de tiempo y rastrea los cambios de tipo delete en orden cronologico.

## Documentos relacionados

- [WEPPY Dashboard Overview](overview.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
