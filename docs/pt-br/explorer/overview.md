# Guia detalhado do WEPPY Roblox Explorer

O **WEPPY Roblox Explorer** e uma extensao complementar para VSCode / Antigravity que replica a arvore do Explorer do Roblox Studio dentro do seu editor. Navegue por instancias sincronizadas, abra scripts e edite propriedades sem precisar alternar entre o Studio e o editor.

> **Opcional** — o Explorer nao e obrigatorio. O servidor MCP e o plugin do Roblox Studio sao suficientes para usar todos os recursos principais. Instale o Explorer quando quiser navegar pela estrutura do projeto ou inspecionar e editar propriedades diretamente do editor.

![WEPPY Roblox Explorer — arvore de instancias do Studio exibida na barra lateral do VSCode](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## Por que usar o Explorer

Agentes de IA ja conseguem entender o contexto completo do projeto a partir dos arquivos gerados pelo Sync, mas quando um humano navega pelo mirror os caminhos de arquivo sozinhos nem sempre deixam a hierarquia clara. O Explorer reutiliza os mesmos dados de sync e os apresenta com a **mesma arvore que voce ve no Roblox Studio**, o que facilita muito:

- Ver de relance a qual servico / instancia um script pertence
- Localizar rapidamente instancias entre servicos por nome ou caminho
- Verificar o status de sync por arquivo (modified / studio / conflict)
- Editar propriedades sem abrir o Studio

## Requisitos

- VSCode 1.85+ ou Antigravity
- [Roblox MCP](../installation/README.md) instalado com Sync habilitado (Basic ou Pro)
- Um arquivo `weppy-project-sync/place_*/.sync-meta.json` gerado pelo Sync na raiz do projeto

O Explorer funciona apenas com os arquivos de sync em disco. Quando o servidor MCP local esta em execucao, o estado de sync ao vivo e as informacoes de direction tambem sao refletidos.

## Instalacao

Procure por **WEPPY Roblox Explorer** na barra lateral de Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`) do VSCode ou Antigravity e clique em **Install**.

Links diretos dos marketplaces:

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

## Navegando pela arvore de instancias

Apos a instalacao, uma visao **WEPPY Explorer** aparece na Activity Bar do VSCode e descobre automaticamente o diretorio de sync a partir da raiz do projeto.

- **Raizes de servicos**: Servicos sincronizados como `Workspace`, `ReplicatedStorage` e `ServerScriptService` aparecem no nivel superior.
- **Icones de classes Roblox**: Mais de 200 icones no estilo do Studio que alternam automaticamente entre tema escuro e claro.
- **Multi Place**: Cada Place sincronizado e mostrado com sua propria raiz de arvore quando ha varios places.
- **Atualizacao automatica**: A arvore e atualizada com um debounce de 500ms sempre que arquivos de sync mudam.
- **Badges de status de sync**: Os estados `modified`, `studio` e `conflict` aparecem ao lado dos icones para voce notar mudancas e conflitos na hora.

Clicar em um item da arvore abre o arquivo que respalda a instancia (`.server.luau`, `.client.luau`, `.module.luau`, `.props.json`, ...). O menu de contexto permite copiar o caminho da instancia no formato `game.Workspace.Part` ou revelar o arquivo no explorador padrao do VSCode.

## Painel de propriedades

Selecione uma instancia na arvore do Explorer e execute **Open Properties** para abrir um painel parecido com a janela Properties do Studio. Voce pode inspecionar e editar propriedades agrupadas sem mexer diretamente no arquivo `.props.json`.

![Painel de propriedades — edite propriedades no estilo Studio dentro do VSCode](../../assets/screenshots/roblox-explorer/roblox-explorer-property-window.png)

- **Exibicao agrupada**: As propriedades sao organizadas nos mesmos grupos do Studio (Appearance, Behavior, Data, Part, Transform etc.).
- **Editores por tipo**: Os widgets de entrada combinam com o tipo da propriedade — numeros, strings, booleanos, cores, Vector3, enums e muito mais.
- **Edicao baseada em arquivo**: As mudancas sao escritas no arquivo `*.props.json` da instancia e retornam ao Studio pelo caminho reverso do Sync (Pro, quando bidirectional esta ativado).
- **Editor personalizado**: Abrir um arquivo `.props.json` diretamente carrega o Painel de propriedades em vez do editor de texto padrao.

Se voce quiser que o Painel de propriedades abra automaticamente enquanto navega pela arvore, defina `robloxExplorer.propertyPanel.autoOpen` como `true` nas configuracoes.

## Busca de instancias

Execute o comando `WEPPY Explorer: Search Instances` (pelo icone do titulo da visao ou pela Command Palette) para abrir um QuickPick que busca em todos os servicos sincronizados.

- Correspondencia parcial sobre os nomes de instancia
- Selecionar um resultado foca a arvore no item correspondente
- Quando varios places estao sincronizados, os resultados sao delimitados por place

## Configuracoes

| Configuracao | Padrao | Descricao |
|--------------|--------|-----------|
| `robloxExplorer.mcpBaseUrl` | `""` | URL HTTP base do MCP local. Vazio faz o Explorer tentar `http://127.0.0.1:3002` e depois `http://127.0.0.1:3003`. |
| `robloxExplorer.syncRoot` | `""` | Caminho absoluto para a raiz `weppy-project-sync`. Descoberto automaticamente pelas pastas do workspace quando vazio. |
| `robloxExplorer.hidePropsFiles` | `false` | Oculta os arquivos de sync (`.props.json`, `_tree.json`, `.value.json`) no explorador padrao do VSCode. |
| `robloxExplorer.autoRefresh` | `true` | Atualiza automaticamente a arvore quando arquivos de sync mudam. |
| `robloxExplorer.showSyncStatus` | `true` | Mostra decoracoes de status de sync nos itens da arvore. |
| `robloxExplorer.followFocusCue` | `false` | Segue arquivos externos de focus cue para expandir a arvore e abrir arquivos relacionados. |
| `robloxExplorer.propertyPanel.autoOpen` | `false` | Abre o Painel de propriedades automaticamente ao selecionar uma instancia na arvore. |

## Comandos

| Comando | Descricao |
|---------|-----------|
| `WEPPY Explorer: Refresh` | Atualiza manualmente a arvore de instancias |
| `WEPPY Explorer: Search Instances` | Busca instancias em todos os servicos |
| `WEPPY Explorer: Open Backing File` | Abre o arquivo da instancia selecionada |
| `WEPPY Explorer: Open Properties` | Abre o Painel de propriedades da instancia selecionada |
| `WEPPY Explorer: Copy Instance Path` | Copia o caminho completo da instancia (ex.: `game.Workspace.Part`) |
| `WEPPY Explorer: Reveal in Explorer` | Mostra o arquivo no explorador padrao do VSCode |
| `WEPPY Explorer: Collapse All` | Recolhe todos os nos da arvore |
| `WEPPY Explorer: Open Settings` | Abre a pagina de configuracoes do Explorer |

## Solucao de problemas

- **Arvore vazia**: Verifique se o diretorio `weppy-project-sync/place_*` existe e se o Sync completou pelo menos um Full Sync. Defina `robloxExplorer.syncRoot` manualmente se necessario.
- **Status de sync nao aparece**: Confirme que o servidor MCP local esta em execucao e tente definir `robloxExplorer.mcpBaseUrl` de forma explicita.
- **Painel de propriedades nao abre**: Se um arquivo `.props.json` abrir no editor de texto padrao, clique com o direito sobre ele e escolha **Reopen Editor With... → WEPPY Property Panel**.
- **Icones quebrados**: Selecione novamente o tema do VSCode ou reinicie a janela para atualizar o cache de icones.

## Documentos relacionados

- [Guia de instalacao do Roblox MCP](../installation/README.md)
- [Guia de Sync](../sync/overview.md)
- [Visao geral das ferramentas](../tools/overview.md)
