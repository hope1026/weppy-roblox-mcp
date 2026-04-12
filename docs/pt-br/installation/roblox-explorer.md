# WEPPY Roblox Explorer (Extensão VSCode)

Visualização em árvore de instâncias similar ao Explorer do Roblox Studio, dentro do VSCode. Navegue por instâncias sincronizadas, abra scripts diretamente e acompanhe o status de sincronização sem sair do editor.
Esta é uma extensao complementar do WEPPY, e não uma integração Roblox independente.

![WEPPY Roblox Explorer](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## Requisitos

- VSCode 1.85+
- [Roblox MCP](../../../README.md) instalado com Sync habilitado (Basic ou Pro)
- O Sync ja gerou `weppy-project-sync/place_*/.sync-meta.json` na raiz do projeto

## Instalação

Pesquise **WEPPY Roblox Explorer** na barra lateral de Extensões do VSCode (`Ctrl+Shift+X` / `Cmd+Shift+X`) e clique em **Install**.

Ou instale diretamente por um destes marketplaces:

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

A navegação basica da arvore funciona a partir dos arquivos sincronizados em disco. Status sync ao vivo, indicadores de direction e envio de telemetria do Explorer ficam disponiveis quando o servidor MCP local está acessivel.

## Funcionalidades

- **Árvore de instâncias**: Hierarquia de serviços/instâncias idêntica ao Roblox Studio
- **Ícones de classes Roblox**: Mais de 200 ícones com suporte a temas escuro/claro
- **Multi-Place**: Raízes de árvore separadas por Place sincronizado
- **Abrir ao clicar**: Abre arquivos de suporte (`.server.luau`, `.client.luau`, `.module.luau`, `.props.json`)
- **Pesquisa de instâncias**: Pesquisa QuickPick em todos os serviços
- **Badges de status Sync**: Visualize os estados `modified`, `studio`, `conflict` de relance
- **Atualização automática**: A árvore é atualizada automaticamente quando os arquivos Sync mudam (debounce 500ms)
- **Copiar caminho de instância**: Clique com o botão direito para copiar caminhos no formato `game.Workspace.Part`

## Configurações

| Configuração | Padrão | Descrição |
|--------------|--------|-----------|
| `robloxExplorer.syncRoot` | `""` | Caminho absoluto para a raiz do `weppy-project-sync`. Se estiver vazio, e detectado automaticamente. O WEPPY usa `{projectRoot}/weppy-project-sync`. |
| `robloxExplorer.hidePropsFiles` | `false` | Oculta arquivos de Sync (`.props.json`, `_tree.json`, `.value.json`) no explorador padrão do VSCode. |
| `robloxExplorer.autoRefresh` | `true` | Atualiza automaticamente a árvore quando os arquivos Sync mudam. |
| `robloxExplorer.showSyncStatus` | `true` | Exibe decorações de status Sync nos itens da árvore. |

## Comandos

| Comando | Descrição |
|---------|-----------|
| `WEPPY Explorer: Refresh` | Atualizar manualmente a árvore de instâncias |
| `WEPPY Explorer: Search Instances` | Pesquisar instâncias em todos os serviços |
| `WEPPY Explorer: Open Backing File` | Abrir o arquivo de suporte de uma instância selecionada |
| `WEPPY Explorer: Copy Instance Path` | Copiar o caminho completo da instância (ex. `game.Workspace.Part`) |
| `WEPPY Explorer: Reveal in Explorer` | Mostrar o arquivo no explorador padrão do VSCode |

## Relacionado

- [Guia detalhado de Sync](../sync/overview.md)
- [Guia de instalação](README.md)
