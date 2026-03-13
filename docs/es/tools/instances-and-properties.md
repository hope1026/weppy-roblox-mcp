# Instancias y propiedades

> Busca, crea y edita instancias de Roblox Studio mientras administras propiedades, atributos y tags.

## Tools incluidas

| Tool | Tier | Descripcion |
|------|:----:|-------------|
| `query_instances` | Mixto | Busca instancias, recorre la jerarquia e inspecciona informacion de clase |
| `mutate_instances` | Mixto | Crea, elimina, clona, mueve y renombra instancias |
| `manage_properties` | Mixto | Lee y escribe propiedades, atributos y tags |

## Flujos principales

### Entender la estructura de la escena

```
"Busca todos los Part dentro de Workspace y dime su posicion y tamano."
```

Usa `query_instances.search_class` para encontrar los Part y `manage_properties.mass_get` para leer `Position` y `Size` en lote.

### Colocar objetos en lote

```
"Coloca 4 SpawnLocation en un cuadrado en el centro del mapa y asigna un TeamColor distinto a cada uno."
```

Usa `mutate_instances.mass_create` para crearlos en una sola solicitud y luego `manage_properties.mass_set` para definir sus propiedades.

### Administrar objetos por tag

```
"Busca todos los objetos con el tag Collectible y cambia Anchored a true."
```

Usa `manage_properties.get_tagged` para reunir las instancias y `manage_properties.mass_set` para actualizarlas.

## Referencia de acciones

### Query Instances (Mixto)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `get` | Obtener propiedades de una instancia por path | Basic |
| `children` | Obtener hijos directos o todos los descendientes | Basic |
| `find_child` | Buscar el primer hijo por nombre y filtro opcional de clase | Basic |
| `find_descendant` | Buscar el primer descendiente por nombre | Basic |
| `wait_for_child` | Esperar a que aparezca un hijo (con timeout) | Basic |
| `class_info` | Obtener informacion de clase y propiedades validas | Basic |
| `search_name` | Buscar instancias por patron de nombre (con comodines) | Basic |
| `search_class` | Buscar instancias por nombre de clase | Basic |
| `file_tree` | Obtener la estructura de archivos desde la raiz | Pro |
| `project_structure` | Obtener la estructura completa del proyecto | Pro |
| `descendants` | Obtener todos los descendientes de una instancia | Pro |
| `ancestors` | Obtener todos los ancestros de una instancia | Pro |
| `search_property` | Buscar instancias por valor de propiedad | Pro |
| `search_tag` | Buscar instancias por tag | Pro |

### Mutate Instances (Mixto)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `create` | Crear una instancia nueva | Basic |
| `create_with_props` | Crear una instancia con propiedades iniciales | Basic |
| `delete` | Eliminar una instancia | Basic |
| `clone` | Clonar una instancia | Basic |
| `move` | Mover una instancia a un nuevo parent | Basic |
| `rename` | Renombrar una instancia | Basic |
| `pivot` | Definir posicion de pivot o CFrame | Basic |
| `create_tree` | Crear un arbol jerarquico de instancias | Pro |
| `mass_create` | Crear varias instancias de una vez | Pro |
| `mass_delete` | Eliminar varias instancias | Pro |
| `mass_duplicate` | Duplicar varias instancias | Pro |
| `smart_duplicate` | Duplicar con espaciado y cantidad | Pro |

### Manage Properties (Mixto)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `get` | Obtener el valor de una propiedad | Basic |
| `set` | Definir el valor de una propiedad | Basic |
| `get_all` | Obtener todas las propiedades de una instancia | Basic |
| `set_multiple` | Definir varias propiedades a la vez | Basic |
| `get_attr` | Obtener el valor de un atributo | Basic |
| `set_attr` | Definir el valor de un atributo | Basic |
| `get_all_attrs` | Obtener todos los atributos | Basic |
| `delete_attr` | Eliminar un atributo | Basic |
| `add_tag` | Agregar un tag a una instancia | Basic |
| `remove_tag` | Quitar un tag de una instancia | Basic |
| `check_tag` | Verificar si una instancia tiene un tag | Basic |
| `get_tags` | Obtener todos los tags de una instancia | Basic |
| `get_tagged` | Obtener todas las instancias con un tag especifico | Basic |
| `set_calculated` | Definir una propiedad usando una expresion matematica | Pro |
| `set_relative` | Definir una propiedad relativa a su valor actual | Pro |
| `mass_set` | Definir una propiedad en varias instancias | Pro |
| `mass_get` | Obtener una propiedad de varias instancias | Pro |
| `modify_children` | Modificar todos los hijos de un parent | Pro |

## Documentos relacionados

- [Scripting y ejecucion de codigo](scripting.md) - agregar o editar scripts en instancias
- [Assets y efectos](assets-and-effects.md) - insertar modelos, tween y efectos
- [Lista completa de tools](overview.md)
